import { useState } from "react";
import "./AuthModal.css";
import axios from "axios";

const SignupForm = ({ onClose, sendDataToParent }) => {
  console.log("sendDataToParent:", sendDataToParent);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    //  otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    axios
      .post("http://localhost:4000/register", formData)
      .then((result) => console.log("result", result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="abc@mail.com"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>

          <p className="switch-text">
            <span>Already have an account?</span>
            <span
              className="signup_login"
              onClick={() => sendDataToParent(false)}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
