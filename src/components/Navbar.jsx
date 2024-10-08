import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../assets/logo1.jpg'; // Assuming you have a logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get the current path

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-12 py-4 flex justify-between items-center">
        {/* Left Side - Logo */}
        <Link to="/">
          <img src={logo1} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-white focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Links - Hidden on small screens, visible on medium (md) and larger */}
        <ul className={`md:flex space-x-12 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link
              to="/"
              className={`hover:text-green-400 transition text-xl ${isActive('/') ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-green-400 transition text-xl ${isActive('/services') ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-green-400 transition text-xl ${isActive('/about') ? 'border-b-2 border-yellow-400' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className={`hover:text-green-400 transition text-xl ${isActive('/career') ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`hover:text-green-400 transition text-xl ${isActive('/blog') ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Blog
            </Link>
          </li>

          {/* Get In Touch Button - Stack vertically on small screens */}
          <li>
            <Link
              to="/getintouch"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition block md:inline-block"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
