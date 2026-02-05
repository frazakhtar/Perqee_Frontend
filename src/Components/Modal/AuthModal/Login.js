import { useState } from "react";
import "./AuthModal.css";
import SignupForm from "./SignupForm";

const Login = ({ isOpen, onClose, sendDataToParent }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile Number:", mobile);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Send OTP" : "Register"}</button>
        </form>

        <p className="switch-text">
          <span>{isLogin ? "New user?" : "Already have an account?"}</span>
          <span className="signup_login">
            {isLogin ? (
              <div onClick={() => sendDataToParent(true)}>Sign Up</div>
            ) : (
              " Login"
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
