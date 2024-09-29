import { Link } from 'react-router-dom';
import tbiLogo from '../assets/tbi-logo.png';  // Import your logo

const NavBar = () => {
  return (
    <div>
        <header className="bg-blue-900 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={tbiLogo} alt="TBI Logo" className="h-12" />
            <span className="text-2xl font-bold">TBI @ GEU</span>
          </Link>
          <nav className="space-x-6">
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/skill-development" className="hover:text-yellow-400">Skill Development</Link>
            <Link to="/events" className="hover:text-yellow-400">Events</Link>
            <Link to="/resources" className="hover:text-yellow-400">Resources</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar