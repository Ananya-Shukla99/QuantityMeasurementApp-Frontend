import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="callback-page">
      <div class="spinner">⏳</div>
      <p>Completing login, please wait...</p>
    </div>
  `,
  styles: [`
    .callback-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      background: var(--bg);
      font-size: 16px;
      color: #333;
    }
    .spinner { font-size: 48px; animation: spin 1s linear infinite; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `]
})
export class OauthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      const token = params['token'];
      const email = params['email'];
      const name = params['name'];
      const role = params['role'] || 'USER';
      const returnUrl = params['returnUrl'] || '/quantity';
      const error = params['error'];

      if (error) {
        this.router.navigate(['/login'], {
          queryParams: { oauthError: error, returnUrl }
        });
        return;
      }

      if (!token) {
        this.router.navigate(['/login'], {
          queryParams: { oauthError: 'missing_token', returnUrl }
        });
        return;
      }

      if (email && name) {
        const user = { email, name, role };
        this.authService.setSession(token, user);
        this.router.navigateByUrl(returnUrl);
        return;
      }

      
      this.authService.storeToken(token);

      this.authService.me().subscribe({
        next: (user) => {
          this.authService.setSession(token, user);
          this.router.navigateByUrl(returnUrl);
        },
        error: () => {
          // no profile endpoint or user fetch failed; mark logged in by token only.
          this.router.navigateByUrl(returnUrl);
        }
      });
    });
  }
}
