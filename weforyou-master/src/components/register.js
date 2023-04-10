import React, { useState } from "react";


export const Register = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    name: '',
    isLoggedIn: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, isLoggedIn: true });
    console.log(formData);
  }

  if (formData.isLoggedIn) {
    window.location.href = "/Donate";
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={formData.name}
          name="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">email</label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={formData.pass}
          onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  )
}