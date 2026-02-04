import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
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
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
