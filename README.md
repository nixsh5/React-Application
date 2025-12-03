# Account Management App

A modern, responsive single-page application (SPA) built with React 18 and Bootstrap 5, featuring user authentication and account management. This project demonstrates a clean frontend architecture using Vite for fast tooling and standard best practices for routing and state management.

## 🚀 Features

- User Authentication: Full registration and login flow with basic validation.
- Account Management: Protected dashboard to view and update user profile details.
- Persistent Session: Uses `localStorage` to persist user sessions across page reloads.
- Route Protection: Higher-order component (HOC) based routing to secure private pages.
- Responsive UI: Built with Bootstrap 5, ensuring compatibility across mobile and desktop.
- Dark Mode & Styling: Custom dark theme with a modern animated CSS background.

## 🛠️ Tech Stack

- Framework: [React 18](https://react.dev/)
- Build Tool: [Vite](https://vitejs.dev/)
- Styling: [Bootstrap 5.3](https://getbootstrap.com/) + Custom CSS
- Routing: [React Router v6](https://reactrouter.com/)
- State Management: React Context API

## 📦 Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/account-management-app.git
   cd account-management-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser
   Visit `http://localhost:5173` to view the app.

## 📂 Project Structure
```
src/
├── pages/
│   ├── LoginPage.jsx       # User login form
│   ├── RegisterPage.jsx    # Registration with validation
│   └── AccountPage.jsx     # Protected user profile view
├── App.jsx                 # Main layout & routing logic
├── main.jsx                # App entry point
└── index.css               # Global styles (if any)
index.html                  # HTML entry with Bootstrap CDN
```

## 📝 Usage Guide
1. Register: Create a new account. Passwords must be at least 6 characters long.
2. Login: Use your registered credentials to access the system.
3. Manage Account: Update your name, email, or password from the protected dashboard.
4. Logout: Securely end your session (clears local storage).
