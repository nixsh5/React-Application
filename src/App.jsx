import React, { useState } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";

export const AuthContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>

      <header className="py-3 border-bottom mb-4 bg-white bg-opacity-75 shadow-sm sticky-top">
        <div className="container d-flex justify-content-between align-items-center">

          <h1 className="h5 mb-0 fw-bold">Account Management App</h1>


          <div className="d-flex gap-2 align-items-center">
            {!user && (
              <>
                <Link to="/login" className="btn btn-primary btn-sm">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  Register
                </Link>
              </>
            )}

            {user && (
              <>
                <Link to="/account" className="btn btn-primary btn-sm">
                  Account
                </Link>
                <LogoutButton />
              </>
            )}
          </div>
        </div>
      </header>


      <main className="container" style={{ minHeight: "60vh" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>


      <footer className="py-3 mt-auto border-top text-center bg-white bg-opacity-75 fixed-bottom">
        <small className="text-muted">React Internship Practical – Account Management App</small>
      </footer>

    </AuthContext.Provider>
  );
}

function ProtectedRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function LogoutButton() {
  const { setUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("accountUser");
    navigate("/login");
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default App;
