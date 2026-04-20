# Gator Gains Frontend

This directory contains the main React + Vite frontend for the Gator Gains fitness app.

## Overview

The frontend is built with:

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Firebase Authentication
- Firebase Firestore data access

The app includes:

- Home page with features, workouts, and badge sections
- Login and signup pages
- About page with interactive content and animated media
- Header navigation across all pages

## Setup

Install dependencies and start the development server:

```bash
cd frontend
npm install
npm run dev
```

⚠️ Make sure your Firebase config is set in `frontend/src/firebase.js`.

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - build the production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the frontend source files

## Project Structure

- `src/main.jsx` - React entry point
- `src/firebase.js` - Firebase configuration and exports
- `src/app/App.jsx` - main application routes and auth state
- `src/app/components/` - shared UI components and header
- `src/app/pages/` - page components: `Home`, `Login`, `Signup`, `About`
- `src/styles/` - global and theme styles

## Notes

- The app uses client-side routing with `BrowserRouter`.
- The header contains links to `/login`, `/signup`, `/about`, and home sections.
- If you add Firebase auth, update the allowed domains and auth providers in your Firebase console.

## Recommended Improvements

- Add form validation feedback for login/signup
- Enable smooth section scrolling for internal page anchors
- Add persistent user profile state after login
- Complete social login flows and GitHub OAuth support

