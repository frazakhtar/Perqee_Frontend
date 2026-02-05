import { useState } from "react";
import "./AuthModal.css";

const SignupForm = ({ onClose, sendDataToParent }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
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
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            onChange={handleChange}
          />

          <div className="otp-row">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
            />
            <button type="button" className="otp-btn">
              Send OTP
            </button>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
