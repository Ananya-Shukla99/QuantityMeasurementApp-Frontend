import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [guestGuard]
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(m => m.RegisterComponent),
    canActivate: [guestGuard]
  },
  {
    path: 'quantity',
    loadComponent: () =>
      import('./quantity/quantity.component').then(m => m.QuantityComponent),
    canActivate: [authGuard]
  },
  {
    path: 'oauth2/callback',
    loadComponent: () =>
      import('./auth/oauth-callback/oauth-callback.component').then(m => m.OauthCallbackComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
