import React, { useState } from 'react';
import image from '../assets/logo1.jpg';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (path) =>
    location.pathname === path ? 'border-b-2 border-blue-500' : '';

  return (
    <nav className="bg-black shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img src={image} alt="Logo" className="h-14 w-49 mr-2" />
              </Link>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className={`py-4 px-2 text-xl text-white font-bold hover:text-blue-500 transition duration-300 ${getNavLinkClass('/')}`}>Home</Link>
            <Link to="/services" className={`py-4 px-2 text-xl text-white font-semibold hover:text-blue-500 transition duration-300 ${getNavLinkClass('/services')}`}>Services</Link>
            <Link to="/about" className={`py-4 px-2 text-xl text-white font-semibold hover:text-blue-500 transition duration-300 ${getNavLinkClass('/about')}`}>About</Link>
            <Link to="/career" className={`py-4 px-2 text-xl text-white font-semibold hover:text-blue-500 transition duration-300 ${getNavLinkClass('/career')}`}>Careers</Link>
            <Link to="/blog" className={`py-4 px-2 text-xl text-white font-semibold hover:text-blue-500 transition duration-300 ${getNavLinkClass('/blog')}`}>Blogs</Link>
            <Link to="/getintouch" className="py-2 px-3 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Get In Touch</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-white hover:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-1/2 h-full bg-black z-20 transition-transform duration-300 ease-in-out md:hidden`}>
        <ul className="mt-20">
        `<li>
            <img src={image} className='h-14 w-49 '/>
          </li>
          <li>
            <Link to="/" className={`block text-sm px-2 py-4 mt-1 hover:bg-blue-500 text-white font-semibold ${getNavLinkClass('/') ? 'bg-blue-500' : ''}`} onClick={closeMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={`block text-sm px-2 py-4 text-white hover:bg-blue-500 transition duration-300 ${getNavLinkClass('/services')}`} onClick={closeMobileMenu}>Services</Link>
          </li>
          <li>
            <Link to="/about" className={`block text-sm px-2 py-4 text-white hover:bg-blue-500 transition duration-300 ${getNavLinkClass('/about')}`} onClick={closeMobileMenu}>About</Link>
          </li>
          <li>
            <Link to="/career" className={`block text-sm px-2 py-4 text-white hover:bg-blue-500 transition duration-300 ${getNavLinkClass('/career')}`} onClick={closeMobileMenu}>Careers</Link>
          </li>
          <li>
            <Link to="/blog" className={`block text-sm px-2 py-4 text-white hover:bg-blue-500 transition duration-300 ${getNavLinkClass('/blog')}`} onClick={closeMobileMenu}>Blogs</Link>
          </li>
          <li>
            <Link to="/getintouch" className="block text-sm px-2 py-4 text-white hover:bg-blue-500 transition duration-300" onClick={closeMobileMenu}>Get In Touch</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
