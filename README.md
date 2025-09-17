# Zetra

Zetra is a full-stack language learning and social platform. Users can sign up, onboard, connect with friends, send/accept friend requests, chat, and make video calls.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Frontend Overview](#frontend-overview)
- [Backend Overview](#backend-overview)
- [Key Files & Folders](#key-files--folders)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Tech Stack](#tech-stack)

---

## Project Structure

```
Zetra/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── ...
```

---

## Setup & Installation

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Stream API credentials (for chat/video features)

### Backend

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_uri
     JWT_SECRET_KEY=your_jwt_secret
     STREAM_API_KEY=your_stream_api_key
     STREAM_API_SECRET=your_stream_api_secret
     NODE_ENV=development
     ```
3. **Run the server:**
   ```sh
   npm run dev
   ```

### Frontend

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in:
     ```
     VITE_STREAM_API_KEY=your_stream_api_key
     ```
3. **Run the frontend:**
   ```sh
   npm run dev
   ```

---

## Frontend Overview

- **Framework:** React + Vite
- **Styling:** TailwindCSS + DaisyUI
- **State:** Zustand, React Query
- **Routing:** React Router
- **Chat/Video:** Stream Chat & Stream Video SDK

### Main Files

- [`src/App.jsx`](frontend/src/App.jsx): Main app router, handles authentication and onboarding logic.
- [`src/main.jsx`](frontend/src/main.jsx): Entry point, sets up React Query and routing.
- [`src/pages/`](frontend/src/pages/): Contains all page components (Home, Login, Signup, Chat, Call, Notifications, Onboarding).
- [`src/components/`](frontend/src/components/): UI components (Navbar, Sidebar, ThemeSelector, etc.).
- [`src/hooks/`](frontend/src/hooks/): Custom hooks for authentication, signup, login, logout.
- [`src/lib/api.js`](frontend/src/lib/api.js): API calls to backend.
- [`src/store/useThemeStore.js`](frontend/src/store/useThemeStore.js): Theme management using Zustand.
- [`src/constants/index.js`](frontend/src/constants/index.js): Theme and language constants.

---

## Backend Overview

- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT + Cookies
- **Chat/Video:** Stream Chat API

### Main Files

- [`src/server.js`](backend/src/server.js): Express server setup, routes, middleware, DB connection.
- [`src/routes/`](backend/src/routes/): API route definitions (auth, user, chat).
- [`src/controllers/`](backend/src/controllers/): Route handlers for authentication, user, chat.
- [`src/models/`](backend/src/models/): Mongoose models for User and FriendRequest.
- [`src/lib/db.js`](backend/src/lib/db.js): MongoDB connection logic.
- [`src/lib/stream.js`](backend/src/lib/stream.js): Stream Chat API integration.
- [`src/middleware/auth.middleware.js`](backend/src/middleware/auth.middleware.js): JWT authentication middleware.

---

## Key Files & Folders

### Frontend

- [`src/App.jsx`](frontend/src/App.jsx): Main router, handles protected routes and onboarding.
- [`src/pages/HomePage.jsx`](frontend/src/pages/HomePage.jsx): Shows friends and recommended users.
- [`src/pages/LoginPage.jsx`](frontend/src/pages/LoginPage.jsx): Login form.
- [`src/pages/SignUpPage.jsx`](frontend/src/pages/SignUpPage.jsx): Signup form.
- [`src/pages/NotificationsPage.jsx`](frontend/src/pages/NotificationsPage.jsx): Friend requests and notifications.
- [`src/pages/ChatPage.jsx`](frontend/src/pages/ChatPage.jsx): Chat interface using Stream Chat.
- [`src/pages/CallPage.jsx`](frontend/src/pages/CallPage.jsx): Video call interface using Stream Video SDK.
- [`src/pages/OnboardingPage.jsx`](frontend/src/pages/OnboardingPage.jsx): Profile onboarding form.
- [`src/components/`](frontend/src/components/): Reusable UI components.
- [`src/hooks/`](frontend/src/hooks/): Custom React hooks for API and state.
- [`src/lib/api.js`](frontend/src/lib/api.js): API functions for frontend-backend communication.
- [`src/lib/axios.js`](frontend/src/lib/axios.js): Axios instance setup.
- [`src/constants/index.js`](frontend/src/constants/index.js): Theme and language constants.
- [`src/store/useThemeStore.js`](frontend/src/store/useThemeStore.js): Theme state management.

### Backend

- [`src/server.js`](backend/src/server.js): Express app setup.
- [`src/routes/auth.route.js`](backend/src/routes/auth.route.js): Auth routes (signup, login, logout, onboarding, me).
- [`src/routes/user.route.js`](backend/src/routes/user.route.js): User routes (friends, friend requests).
- [`src/routes/chat.route.js`](backend/src/routes/chat.route.js): Chat token route.
- [`src/controllers/auth.controller.js`](backend/src/controllers/auth.controller.js): Auth logic.
- [`src/controllers/user.controller.js`](backend/src/controllers/user.controller.js): User logic (friend requests, recommendations).
- [`src/controllers/chat.controller.js`](backend/src/controllers/chat.controller.js): Stream token generation.
- [`src/models/User.models.js`](backend/src/models/User.models.js): User schema/model.
- [`src/models/FriendRequest.models.js`](backend/src/models/FriendRequest.models.js): Friend request schema/model.
- [`src/lib/db.js`](backend/src/lib/db.js): MongoDB connection.
- [`src/lib/stream.js`](backend/src/lib/stream.js): Stream Chat integration.
- [`src/middleware/auth.middleware.js`](backend/src/middleware/auth.middleware.js): JWT authentication middleware.

---

## Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET_KEY=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NODE_ENV=development
```

### Frontend `.env`

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## Scripts

### Backend

- `npm run dev` — Start backend with nodemon (auto-restart on changes)
- `npm start` — Start backend

### Frontend

- `npm run dev` — Start frontend dev server
- `npm run build` — Build frontend for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, DaisyUI, Zustand, React Query, Stream Chat/Video SDK
- **Backend:** Express, MongoDB (Mongoose), JWT, Stream Chat API
- **Other:** Axios, Lucide Icons, React Hot Toast

---

## Usage

1. **Sign Up:** Create an account.
2. **Onboarding:** Complete your profile (bio, languages, location, avatar).
3. **Connect:** Find friends, send/accept friend requests.
4. **Chat:** Message friends in real-time.
5. **Video Call:** Start video calls with friends.

---

## License

MIT

---

## Contributing

Feel free to open issues or PRs for improvements or bug fixes.

---

## Contact

For questions, reach out via GitHub Issues.
