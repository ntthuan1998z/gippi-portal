# Checklist
  - Build tool: Vite for client-side rendered React applications
  - Package manager: pnpm
  - State managemnet: useState, useReducer, useContext and Zustand (optional)
  - Data fetching: Tanstack query combined with axios
  - Routing: React router v7
  - CSS Styling: Utility-First-CSS (tailwind css) combine with CSS-in-CSS (SASS)
  - UI library: shadcn/ui combine with radix
  - Form: React hook form
  - Table: Tanstack Table
  - Project structure: Feature-based React architecture with ESLint + Prettier
  - Authentication: Auth.js
  - Setup  **dev containter**  theo docker file hiện để đảm bảo môi trường dev của team member giống nhau.
  - Setup Eslint và Prettier theo chuẩn coding style guide của Airbnb [React style](https://airbnb.io/javascript/react/) đảm bảo chuẩn chung cho team member.
  - Áp dụng template của ShadcnUI 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## TypeScript Style Guide

### Interface vs Type

**📌 Khi nào dùng Interface:**
- React/Component props
- State types
- Domain models (nếu có thể extend)

**📌 Khi nào dùng Type:**
- Union types/Constants
- Utility types
- Domain models (nếu cần union/intersection)

**Ví dụ:**
```typescript
// ✅ Interface cho component props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

// ✅ Type cho union/constants
type Status = 'pending' | 'success' | 'error';
type Theme = 'light' | 'dark';

// ✅ Interface cho domain models
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Type cho utility types
type Nullable<T> = { [K in keyof T]: T[K] | null };
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
