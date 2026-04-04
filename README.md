# Quantity Measurement Application – Frontend (Angular)

## Responsive UI for Quantity Conversion & Measurement Operations

A modern, responsive, and interactive frontend built using **Angular 21** and **TypeScript** for performing quantity-based operations such as **unit conversion, unit comparison, and arithmetic calculations on measurable quantities**.

---

## Project Overview

The **Quantity Measurement Application – Frontend** is a web-based user interface designed to provide users with an intuitive experience for working with measurable quantities. This Angular implementation leverages modern web technologies and best practices to create a scalable, maintainable, and feature-rich application.

This project demonstrates practical experience with:

- Angular framework and component-based architecture
- TypeScript for type-safe development
- Reactive forms for robust form handling
- Angular routing for navigation
- RxJS for reactive programming
- Angular services for state management
- HTTP client for API integration
- Authentication guards and interceptors
- Responsive design with CSS/SCSS

---

## Objective

Build a production-ready Angular frontend for the Quantity Measurement Application that provides:

- **Scalable architecture** following Angular best practices
- **Type-safe development** using TypeScript
- **Reusable component structure** for maintainability
- **Responsive and accessible UI** for all device sizes
- **Efficient state management** using RxJS and services
- **Secure authentication** with JWT support
- **Real-time API integration** with the backend service

---

## Tech Stack

### Core Framework
- **Angular**: ^21.2.0
- **TypeScript**: ~5.9.2
- **RxJS**: ~7.8.0

### Frontend Technologies
- **HTML5** - Semantic markup
- **CSS3 / SCSS** - Modern styling with variables and mixins
- **JavaScript (ES6+)** - Enhanced with TypeScript

### Development Tools
- **Angular CLI**: ^21.2.5
- **Node.js**: LTS version recommended
- **npm**: ^10.9.3

### Testing & Quality
- **Vitest**: ^4.0.8 - Unit testing framework
- **jsdom**: ^28.0.0 - DOM testing utilities
- **Prettier**: ^3.8.1 - Code formatting

---

## Features

- Quantity Conversion Interface - Convert between different units
- Unit Comparison UI - Compare multiple quantities
- Arithmetic Operations - Perform calculations on quantities
- Authentication System - Login/Register with JWT support
- Form-based User Input - Reactive forms with validation
- Dynamic Component Updates - Real-time UI updates with RxJS
- Input Validation & Error Handling - Comprehensive validation
- Responsive User Interface - Mobile-first design approach
- Modular Component Architecture - Reusable, maintainable components
- HTTP Interceptors - Automatic JWT token handling
- Route Guards - Protected and guest-only routes

---

## Project Structure

```
src/
├── app/
│   ├── app.config.ts          # Angular configuration
│   ├── app.routes.ts          # Route definitions
│   ├── app.ts                 # Root component
│   ├── app.html               # Root template
│   ├── app.css                # Global styles
│   │
│   ├── auth/                  # Authentication module
│   │   ├── login/             # Login component
│   │   ├── register/          # Registration component
│   │   └── oauth-callback/    # OAuth callback handler
│   │
│   ├── core/                  # Core functionality
│   │   ├── guards/            # Route guards (auth, guest)
│   │   ├── interceptors/      # HTTP interceptors (JWT)
│   │   ├── models/            # TypeScript interfaces & types
│   │   │   ├── auth.models.ts
│   │   │   └── quantity.models.ts
│   │   └── services/          # Business logic services
│   │       ├── auth.service.ts
│   │       └── quantity.service.ts
│   │
│   ├── quantity/              # Quantity operations module
│   │   ├── quantity.component.ts
│   │   ├── quantity.component.html
│   │   └── quantity.component.css
│   │
│   └── shared/                # Shared components
│       └── navbar/            # Navigation bar
│           ├── navbar.component.ts
│           ├── navbar.component.html
│           └── navbar.component.css
│
├── main.ts                    # Application entry point
├── styles.css                 # Global styles
└── index.html                 # HTML template

public/
├── favicon.ico
└── logo.jpeg

angular.json                   # Angular configuration
tsconfig.json                  # TypeScript configuration
tsconfig.app.json              # App-specific TS config
tsconfig.spec.json             # Test TS config
package.json                   # Project dependencies
proxy.conf.json                # Development proxy config
```

---

## How to Run the Project

### 1 Clone the repository
```bash
git clone https://github.com/Ananya-Shukla99/QuantityMeasurementApp-Frontend.git
cd FrontEnd-Main-HTML-CSS
```

### 2 Install dependencies
```bash
npm install
```

### 3 Start the development server
```bash
npm start
# or
ng serve
```

Once the server is running, open your browser and navigate to:
```
http://localhost:4200
```

The application will automatically reload whenever you modify any of the source files.

### 4 Build for production
```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build with optimizations.

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Build project for production |
| `npm test` | Run unit tests with Vitest |
| `npm run watch` | Build in watch mode during development |
| `ng generate component <name>` | Generate new component with Angular CLI |
| `ng generate service <name>` | Generate new service with Angular CLI |

---

## Development Setup

For the best development experience, use:

- **Visual Studio Code** - Recommended IDE
- **Angular Language Service Extension** - VSCode extension for Angular support
- **Prettier Extension** - For automatic code formatting
- **Modern browsers**:
  - Google Chrome (recommended)
  - Microsoft Edge
  - Mozilla Firefox

### VS Code Extensions (Recommended)
- Angular Language Service
- Angular Schematics
- Prettier - Code formatter
- ES7+ React/Redux/React-Native snippets
- TypeScript Vue Plugin (Volar)

---

## Responsive Design

This Angular frontend is built with a mobile-first approach using:

- **CSS Flexbox** - Modern layout system
- **CSS Grid** - Complex layout patterns
- **Media Queries** - Breakpoint-based responsive design
- **Flexible component design** - Works across all device sizes
- **Angular Material principles** - Accessible and user-friendly UI

---

## Testing

### Running Unit Tests
```bash
npm test
# or
ng test
```

Tests are executed using **Vitest** with **jsdom** for DOM simulation.

### Running End-to-End Tests (Optional)
```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can integrate tools like Cypress or Playwright based on your needs.

---

## Key Angular Concepts

### Components
- **AppComponent** - Root component
- **LoginComponent** - User authentication
- **RegisterComponent** - User registration
- **QuantityComponent** - Main quantity operations
- **NavbarComponent** - Navigation UI

### Services
- **AuthService** - Authentication and authorization logic
- **QuantityService** - Quantity operations and API calls

### Guards
- **AuthGuard** - Protects authenticated routes
- **GuestGuard** - Restricts authenticated users from guest routes

### Interceptors
- **JwtInterceptor** - Automatically attaches JWT tokens to requests

### Models & Interfaces
- Auth models for user data
- Quantity models for measurement data

---

## Authentication Flow

1. User registers or logs in through the UI
2. **AuthService** handles login/registration requests
3. JWT token is received and stored
4. **JwtInterceptor** automatically includes token in subsequent requests
5. **AuthGuard** checks token validity for protected routes
6. User session persists until logout

---

## API Integration

The frontend communicates with the backend API through:

- **HttpClient** - Angular's HTTP module
- **Services** - Abstracted API calls
- **Interceptors** - Request/response transformation
- **Proxy Configuration** - `proxy.conf.json` for development

---

## Learning Outcomes

This implementation demonstrates expertise in:

- **Angular Architecture** - Component-based design
- **TypeScript** - Strong typing and OOP principles
- **Reactive Programming** - RxJS and Observables
- **Form Handling** - Reactive and template-driven forms
- **Routing** - Navigation and lazy loading
- **HTTP Communication** - RESTful API integration
- **State Management** - Service-based state
- **Security** - Authentication, authorization, and JWT
- **Responsive Design** - Mobile-first CSS architecture
- **Testing** - Unit tests and component testing
- **Best Practices** - Clean code, DRY, SOLID principles

---

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** and test locally
   ```bash
   npm start
   npm test
   ```

3. **Format code** with Prettier
   ```bash
   npx prettier --write "src/**/*.{ts,html,css}"
   ```

4. **Build and verify**
   ```bash
   npm run build
   ```

5. **Commit and push**
   ```bash
   git commit -m "feat: description of changes"
   git push origin feature/your-feature-name
   ```

---

## Additional Resources

- [Angular Official Documentation](https://angular.dev/)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Material](https://material.angular.io/)

---

