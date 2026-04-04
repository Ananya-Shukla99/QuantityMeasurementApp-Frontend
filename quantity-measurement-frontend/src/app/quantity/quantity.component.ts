import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { QuantityService } from '../core/services/quantity.service';
import { MeasurementType, QuantityInputDTO } from '../core/models/quantity.models';

type ActionType = 'comparison' | 'conversion' | 'arithmetic';
type ArithmeticOp = '+' | '-' | '/';

interface TypeConfig {
  label: string;
  icon: string;
  measurementType: MeasurementType;
  units: string[];
}

const TYPE_CONFIGS: TypeConfig[] = [
  {
    label: 'Length',
    icon: '📏',
    measurementType: 'LengthUnit',
    units: ['FEET', 'INCH', 'YARDS', 'CENTIMETERS']
  },
  {
    label: 'Weight',
    icon: '⚖️',
    measurementType: 'WeightUnit',
    units: ['GRAM', 'KILOGRAM', 'POUND']
  },
  {
    label: 'Temperature',
    icon: '🌡️',
    measurementType: 'TemperatureUnit',
    units: ['CELSIUS', 'FAHRENHEIT', 'KELVIN']
  },
  {
    label: 'Volume',
    icon: '🧪',
    measurementType: 'VolumeUnit',
    units: ['LITRE', 'MILLILITRE', 'GALLON']
  }
];

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.css'
})
export class QuantityComponent implements OnInit {

  // Config
  typeConfigs = TYPE_CONFIGS;
  actions: ActionType[] = ['comparison', 'conversion', 'arithmetic'];
  ops: { symbol: string; value: ArithmeticOp }[] = [
    { symbol: '+', value: '+' },
    { symbol: '−', value: '-' },
    { symbol: '÷', value: '/' }
  ];

  // State
  selectedConfig: TypeConfig = TYPE_CONFIGS[0];
  selectedAction: ActionType = 'comparison';
  selectedOp: ArithmeticOp = '+';

  val1 = 1;
  val2 = 1;
  unit1 = 'FEET';
  unit2 = 'INCH';

  resultText = '';
  loading = false;
  errorMsg = '';

  ngOnInit(): void {
    this.resetUnits();
  }

  setType(config: TypeConfig): void {
    this.selectedConfig = config;
    this.resetUnits();
    this.resultText = '';
    this.errorMsg = '';
  }

  setAction(action: ActionType): void {
    this.selectedAction = action;
    this.resultText = '';
    this.errorMsg = '';
  }

  setOp(op: ArithmeticOp): void {
    this.selectedOp = op;
  }

  resetUnits(): void {
    this.unit1 = this.selectedConfig.units[0];
    this.unit2 = this.selectedConfig.units[1] || this.selectedConfig.units[0];
  }

  isArithmetic(): boolean { return this.selectedAction === 'arithmetic'; }
  isConversion(): boolean { return this.selectedAction === 'conversion'; }

  calculate(): void {
    this.loading = true;
    this.resultText = '';
    this.errorMsg = '';

    const quantity1 = {
      value: this.val1,
      unit: this.unit1,
      measurementType: this.selectedConfig.measurementType
    };

    const quantity2 = {
      value: this.val2,
      unit: this.unit2,
      measurementType: this.selectedConfig.measurementType
    };

    let input: QuantityInputDTO;
    let call;

    if (this.selectedAction === 'comparison') {
      input = { quantity1, quantity2 };
      call = this.quantityService.compare(input);

    } else if (this.selectedAction === 'conversion') {
      input = { quantity1, targetUnit: this.unit2 };
      call = this.quantityService.convert(input);

    } else {
      input = { quantity1, quantity2 };
      if (this.selectedOp === '+') {
        call = this.quantityService.add(input);
      } else if (this.selectedOp === '-') {
        call = this.quantityService.subtract(input);
      } else {
        call = this.quantityService.divide(input);
      }
    }

    call.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.isError) {
          this.errorMsg = res.errorMessage || 'Calculation failed';
        } else if (res.resultString) {
          this.resultText = res.resultString;
        } else {
          this.resultText = `${res.resultValue} ${res.resultUnit}`;
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Calculation failed. Check your inputs.';
      }
    });
  }

  constructor(private quantityService: QuantityService) {}
}
