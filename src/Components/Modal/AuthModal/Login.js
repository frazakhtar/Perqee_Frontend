import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";
import axios from "axios";

const Login = ({ isOpen, onClose, sendDataToParent }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    //  otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://127.0.0.1:4000/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((result) => {
        console.log(result);
        navigate("/about");
      })
      .catch((err) => console.log(err));
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
            type="Email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="Password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
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
