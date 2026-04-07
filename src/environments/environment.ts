// Development environment configuration
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080',
  apiVersion: '/api/v1',

  // OAuth2 Configuration
  oauth2: {
    githubAuthUrl: 'http://localhost:8080/oauth2/authorization/github',
    googleAuthUrl: 'http://localhost:8080/oauth2/authorization/google',
    callbackUrl: 'http://localhost:4200/oauth2/callback'
  },

  // Token settings
  tokenKey: 'qm_token',
  userKey: 'qm_user',

  // Development settings
  debug: true,
  logRequests: true
};

