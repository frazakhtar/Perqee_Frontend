import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">
            <AiFillHome size={22} />
          </Link>
        </li>
        <li>Categories</li>
        <li>Occasions</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
