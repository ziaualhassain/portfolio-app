import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-800 w-full">
      <div className="flex justify-between items-center p-4 w-full">
        {/* Left side: Zia Logo */}
        <div className="text-white font-semibold text-xl">
          Zia
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:justify-end lg:space-x-8 text-white">
          <li className="hover:text-yellow-300 py-2 px-4">
            <Link to="/">Home</Link>  {/* Home - HeroCard */}
          </li>
          <li className="hover:text-yellow-300 py-2 px-4">
            <Link to="/projects">Projects</Link>  {/* Projects page */}
          </li>
          <li className="hover:text-yellow-300 py-2 px-4">
            <Link to="/contact">Contact</Link>  {/* Contact page */}
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      <ul
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} flex flex-col items-center justify-center space-y-4`}
      >
        <li className="text-white hover:text-yellow-300 py-2 px-4">
          <Link to="/">Home</Link>  {/* Home - HeroCard */}
        </li>
        <li className="text-white hover:text-yellow-300 py-2 px-4">
          <Link to="/projects">Projects</Link>  {/* Projects page */}
        </li>
        <li className="text-white hover:text-yellow-300 py-2 px-4">
          <Link to="/contact">Contact</Link>  {/* Contact page */}
        </li>
      </ul>
    </div>
  );
}
