// src/components/Header.js
import { Link } from 'react-router-dom';
import tbiLogo from '../assets/tbi-logo.png';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <img src={tbiLogo} alt="TBI GEU Logo" className="h-12" />
        </Link>
        <nav className="space-x-8">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/skill-development" className="hover:text-yellow-400">
            Skill Development
          </Link>
          <Link to="/events" className="hover:text-yellow-400">
            Events
          </Link>
          <Link to="/resources" className="hover:text-yellow-400">
            Resources
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
