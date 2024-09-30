// src/components/Header.js
import { Link } from 'react-router-dom';
import tbiLogo from '../assets/tbi-logo.png';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-200 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={tbiLogo} alt="TBI GEU Logo" className="h-12 transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Navigation Menu */}
        <nav className="space-x-8">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300 hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="/skill-development"
            className="hover:text-yellow-400 transition duration-300 hover:underline underline-offset-4"
          >
            Skill Development
          </Link>
          <Link
            to="/events"
            className="hover:text-yellow-400 transition duration-300 hover:underline underline-offset-4"
          >
            Events
          </Link>
          <Link
            to="/resources"
            className="hover:text-yellow-400 transition duration-300 hover:underline underline-offset-4"
          >
            Resources
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
