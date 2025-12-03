import React, { useContext, useState } from "react";
import { AuthContext } from "../App";

function AccountPage() {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = { ...form };
    setUser(updatedUser);
    localStorage.setItem("accountUser", JSON.stringify(updatedUser));
    setMessage("Account updated successfully.");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="mb-3 text-center">My Account</h2>
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={handleSave} className="card card-body">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
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
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountPage;
