# HireZen-AI Frontend

A React + Vite frontend for the HireZen-AI application. This README provides startup commands, the main UI structure, and routing details for contributors.

---

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```

2. Run dev server
   ```bash
   npm run dev
   ```

3. Build for production
   ```bash
   npm run build
   ```

4. Preview the production build
   ```bash
   npm run preview
   ```

---

## Project structure (important files)

- `index.html` — HTML entry point
- `vite.config.js` — Vite configuration
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — top-level component with providers
- `src/index.css` — global styles
- `src/auth` — auth pages, hooks, and services
- `src/dashboard` — dashboard components and page
- `src/home` — landing/home page UI components
- `src/report` — interview report pages, components, and hooks
- `src/resume` — resume upload and preview pages
- `src/routes/Routes.jsx` — client-side router definitions

---

## Routing overview

Routes implemented in `src/routes/Routes.jsx`:

- `/` → `Home`
- `/dashboard` → `Dashboard` (protected)
- `/login` → `Login`
- `/register` → `Register`
- `/resume` → `ResumeUpload` (protected)
- `/reports` → `InterviewReport` (protected)
- `/reports/:id` → `ReportDetails` (protected)

---

## Key folders

- `src/auth`
  - `components/Protected.jsx` — protects private routes
  - `hooks/useAuth.js` — auth hook
  - `pages/Login.jsx` — login page
  - `pages/Register.jsx` — register page
  - `services/auth.api.js` — auth request helpers
  - `services/auth.context.js` — auth context definitions
  - `services/auth.provider.jsx` — auth provider wrapper

- `src/report`
  - `components/` — report cards and report display UI
  - `hooks/useInterview.js` — interview report hook
  - `pages/InterviewReport.jsx` — reports list page
  - `services/interview.api.js` — interview API calls
  - `services/interview.context.jsx` — report context
  - `services/interview.provider.jsx` — report provider wrapper

- `src/dashboard` — dashboard overview and stats cards
- `src/home` — landing page and feature promotion UI
- `src/resume` — resume upload and preview experience
- `src/ui/components` — shared UI components like `Navbar` and `Footer`

---

## Notes for contributors

- API endpoints and request logic are implemented inside the auth and report services.
- `App.jsx` wraps the app with `AuthProvider` and `InterviewProvider`.
- The router is defined in `src/routes/Routes.jsx` using React Router.
- Keep UI components modular and reusable.
- Static assets belong in `src/assets` for bundling or `public/` for direct public paths.

### Files to open first

- `src/main.jsx`
- `src/App.jsx`
- `src/routes/Routes.jsx`
- `src/report/pages/InterviewReport.jsx`
- `src/auth/pages/Login.jsx`

---

## Development notes

- This app uses React 19, Vite, Tailwind CSS, Axios, and React Router DOM.
- Use `npm run lint` to run ESLint checks.
- If API base URLs change, update auth and interview service files accordingly.
