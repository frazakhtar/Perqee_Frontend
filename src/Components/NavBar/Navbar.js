import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import Login from "../Modal/AuthModal/Login";
import SignupForm from "../Modal/AuthModal/SignupForm";

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOepn] = useState(false);

  const sendDataToParent = (val) => {
    if (val === true) {
      setLoginOpen(false);
      setSignupOepn(true);
    }
  };

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
        <li onClick={() => setLoginOpen(true)}>Login</li>
        <Login
          sendDataToParent={sendDataToParent}
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
        />
        {signupOpen && <SignupForm onClose={() => setSignupOepn(false)} />}
      </ul>
    </nav>
  );
};

export default Navbar;
