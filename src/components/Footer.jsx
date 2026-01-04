import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaTwitterSquare,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import logo from "../assets/paw_logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content shadow-inner w-full py-14 mt-10 transition-colors duration-300 border-t border-base-300">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src={logo} className="w-12 h-12 bg-white rounded-full p-1 shadow-md" alt="PawMart Logo" />
            <Link
              to="/"
              className="text-3xl font-extrabold text-[var(--color-primary)] tracking-tight hover:opacity-80 transition"
            >
              PawMart
            </Link>
          </div>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0 text-base-content/80">
            PawMart brings pet lovers together, helping pets find homes and
            owners find quality care products. Connect, adopt, and shop for
            pets—making pet care easy and local.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[var(--color-primary)]">Quick Links</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link to="/" className="hover:text-[var(--color-secondary)] hover:translate-x-1 transition-all inline-block">Home</Link>
            </li>
            <li>
              <Link to="/pets" className="hover:text-[var(--color-secondary)] hover:translate-x-1 transition-all inline-block">Pets & Supplies</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[var(--color-secondary)] hover:translate-x-1 transition-all inline-block">Contact Us</Link>
            </li>
            
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[var(--color-primary)]">Contact Us</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[var(--color-secondary)] text-lg" /> 
              <span>San Francisco, CA</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FaPhoneAlt className="text-[var(--color-secondary)] text-lg" /> 
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FaMailBulk className="text-[var(--color-secondary)] text-lg" /> 
              <span>support@pawmart.com</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[var(--color-primary)]">Follow Us</h4>
          <p className="text-sm opacity-80 mb-4">Stay connected with our community.</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--color-secondary)] transition-transform hover:scale-110">
              <FaTwitterSquare />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--color-secondary)] transition-transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--color-secondary)] transition-transform hover:scale-110">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-12 pt-8 border-t border-base-300 opacity-60">
        <p>&copy; {new Date().getFullYear()} PawMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
