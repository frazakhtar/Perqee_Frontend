import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            Perqee<span>.in</span>
          </h2>
          <p>
            Smart gifting & rewards platform to engage, retain, and delight your
            users with ease.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="mailto:support@perqee.in" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li>
              <a href="#">Corporate Gifting</a>
            </li>
            <li>
              <a href="#">Employee Rewards</a>
            </li>
            <li>
              <a href="#">Customer Loyalty</a>
            </li>
            <li>
              <a href="#">API Integrations</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Perqee.in — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
