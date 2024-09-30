import { Link } from 'react-router-dom';
import tbiLogo from '../assets/tbi-logo.png';  // Import your logo

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-[30] bg-transparent">  {/* Transparent navbar */}
      <div className="flex items-center justify-center h-20 relative">
        {/* Logo fixed to the left */}
        <div className="absolute left-5">
          <img src={tbiLogo} alt="TBI Logo" className="h-12" />  {/* Adjust logo height */}
        </div>

        {/* Elliptical box for navigation links */}
        <div className="flex gap-10 px-12 py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full">
          <Link 
            to="/" 
            className="text-gray-300 font-medium text-lg hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-300 font-medium text-lg hover:text-yellow-400 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/skill-development" 
            className="text-gray-300 font-medium text-lg hover:text-yellow-400 transition-colors"
          >
            Skill Development
          </Link>
          <Link 
            to="/events" 
            className="text-gray-300 font-medium text-lg hover:text-yellow-400 transition-colors"
          >
            Events
          </Link>
          <Link 
            to="/resources" 
            className="text-gray-300 font-medium text-lg hover:text-yellow-400 transition-colors"
          >
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
