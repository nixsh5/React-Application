import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    // Password length check (min 6 chars)
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    const user = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem("accountUser", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <h2 className="mb-3 text-center">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="card card-body shadow-sm">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
