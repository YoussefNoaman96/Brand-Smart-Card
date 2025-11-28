<!-- Repository-specific Copilot instructions for AI coding agents -->
# Copilot Instructions — smart-card

Purpose: Give an AI code assistant the minimal, concrete context it needs to be productive in this repository (React Create‑React‑App single page app).

- Quick start (developer commands):
  - `npm install` — install deps.
  - `npm start` — run development server at `http://localhost:3000`.
  - `npm run build` — produce production bundle in `build/`.
  - `npm test` — start tests (interactive watch mode).

- Big picture / architecture:
  - This is a Create React App (CRA) single-page React application (see `package.json`, `react-scripts: 5.0.1`).
  - App entry: `src/index.js` mounts `<App />` into `#root` in `public/index.html`.
  - Main UI component: `src/App.js`. Additional UIs live under `src/components/` (example: `src/components/BrandPage.jsx`).
  - Static assets such as icons and images are served from `public/` and should be referenced with absolute paths from the app (e.g. `/logo192.png`).

- Project-specific conventions and patterns:
  - Functional React components (ES modules). Follow the existing style: default exports for components, CSS imported next to components (e.g. `import "./BrandPage.css"`).
  - CSS files are colocated with components (component imports expect a sibling CSS file). If a component imports a CSS file that doesn't exist (e.g. `BrandPage.css`), create it under the same folder.
  - Assets referenced with leading `/` come from `public/` (do not import them from `src/` unless added to the build pipeline).
  - Tests use React Testing Library + Jest via CRA defaults — prefer small, focused tests matching existing style in `src/App.test.js`.

- Integration points & external dependencies:
  - External links in `BrandPage.jsx` point to social platforms and a `wa.me` phone link — treat these as content, not services requiring new backend integration.
  - There is no API or backend code in this repo; changes should avoid adding runtime network dependencies unless the user instructs otherwise.

- When editing or adding code, follow these actionable rules:
  - Keep changes minimal to the requested feature. Update `src/App.js` to add or mount new pages/components.
  - To add a new component: create `src/components/YourComponent.jsx` and `src/components/YourComponent.css`, then import and render it from `src/App.js` or `src/index.js` as required.
  - Use `/`-prefixed asset paths to reference files in `public/` (example: `<img src="/logo192.png" />`).
  - Do not change CRA build scripts in `package.json` unless the user requests ejecting — avoid `eject` entirely without consent.
  - Run `npm test` after code changes. For a single (non-watch) run in CI-like mode: `powershell -Command "$env:CI='true'; npm test -- --watchAll=false"`.

- Examples (concrete edits an AI may be asked to make):
  - Add the `BrandPage` into the main app:
    - `import BrandPage from './components/BrandPage';` in `src/App.js`
    - Render `<BrandPage />` inside the returned JSX.
  - Create missing `BrandPage.css` when styling `BrandPage.jsx` to avoid runtime import errors.

- What *not* to assume:
  - There is no routing library present — do not add `react-router` unless asked.
  - There is no backend or environment config in this repository; network calls are out of scope unless the user provides an API and credentials.

If any section above is unclear or you want more examples (component wiring, test examples, or a preferred CSS pattern), tell me which area to expand and I will update this file.
