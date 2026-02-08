import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import Login from "../Modal/AuthModal/Login";
import SignupForm from "../Modal/AuthModal/SignupForm";
const Navbar = () => {
  const [authMode, setAuthMode] = useState(null);

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/" className="nav-link">
            <AiFillHome size={22} />
          </Link>
        </li>
        <li>Categories</li>
        <li>Occasions</li>
      </ul>

      <ul className="navbar__links">
        <li onClick={() => setAuthMode("login")}>Login</li>

        {authMode === "login" && (
          <Login
            isOpen={true}
            onClose={() => setAuthMode(null)}
            sendDataToParent={() => setAuthMode("signup")}
          />
        )}

        {authMode === "signup" && (
          <SignupForm
            onClose={() => setAuthMode(null)}
            sendDataToParent={() => setAuthMode("login")}
          />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
