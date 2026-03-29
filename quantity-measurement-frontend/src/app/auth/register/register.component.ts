import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  showPassword = false;
  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }

  togglePassword() { this.showPassword = !this.showPassword; }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    this.authService.register({
      name: this.name.value!,
      email: this.email.value!,
      password: this.password.value!
    }).subscribe({
      next: () => {
        this.loading = false;
        this.successMsg = 'Account created! Redirecting...';
        setTimeout(() => this.router.navigate(['/quantity']), 1500);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Registration failed. Try again.';
      }
    });
  }
}