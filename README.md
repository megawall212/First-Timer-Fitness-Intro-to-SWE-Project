# Gator Gains - First Timer Fitness Project

Gator Gains is a student-friendly fitness web app built with React, Firebase, and Vite. The app is designed for first-time gym users and students who want a welcoming way to track progress, unlock badges, and stay motivated with gamified workouts.

## Features

- Responsive React + Vite frontend
- Login and signup pages with Firebase auth support
- About page with interactive content and media
- Section navigation for Features, Workouts, and Badges
- Backend Express server for optional API flow
- Firebase Cloud Functions support for future serverless logic

## Folder Structure

- `frontend/` - main React app and UI
- `backend/` - simple Express server
- `functions/` - Firebase Cloud Functions project
- `app.jsx` - legacy root React entry
- `user.jsx` - standalone login mockup page

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm
- Firebase CLI if using Cloud Functions or emulator

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

This starts the Express server with `nodemon`.

### Firebase Functions Setup

```bash
cd functions
npm install
npm run serve
```

If you want to deploy functions:

```bash
npm run deploy
```

## Notes

- The frontend uses `react-router-dom` for client-side routing.
- Firebase configuration is stored in `frontend/src/firebase.js`; update this file with your Firebase project details before using auth.
- The current `frontend/README.md` contains more detailed frontend-specific build and dev commands.

## Future Improvements

- Add full workout tracking and user dashboards
- Store badge progress in Firestore
- Integrate GitHub and social login flows fully
- Add mobile-friendly menu improvements and animation polish

