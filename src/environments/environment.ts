// Development environment configuration
export const environment = {
  production: false,
  apiBaseUrl: 'https://srv-d7a8avdm5p6s73b7o8qg.onrender.com',
  apiVersion: '/api/v1',

  // OAuth2 Configuration
  oauth2: {
    githubAuthUrl: 'https://srv-d7a8avdm5p6s73b7o8qg.onrender.com/oauth2/authorization/github',
    googleAuthUrl: 'https://srv-d7a8avdm5p6s73b7o8qg.onrender.com/oauth2/authorization/google',
    callbackUrl: 'https://quantity-measurement-app-frontend-olive.vercel.app/oauth2/callback'
  },

  // Token settings
  tokenKey: 'qm_token',
  userKey: 'qm_user',

  // Development settings
  debug: true,
  logRequests: true
};

