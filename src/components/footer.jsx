import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-center">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-xl font-bold mb-4">UNSTOP TECHNO SOLUTION</h3>
          <p>Offering a comprehensive range of integrated system design and digital manufacturing solutions through industry insights and enhanced technological approaches. This ensures absolute real-time monitoring, efficient order processing, and quality control.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
          <ul className="list-none p-0">
            <li><Link to={'/'} className="text-black no-underline hover:underline">Home</Link></li>
            <li><Link to={'/services'} className="text-black no-underline hover:underline">Services</Link></li>
            <li><Link to={'about'} className="text-black no-underline hover:underline">About Us</Link></li>
            <li><Link to={'career'} className="text-black no-underline hover:underline">Career</Link></li>
            <li><Link to={'blog'} className="text-black no-underline hover:underline">Blog</Link></li>
            <li><Link to={'getintouch'} className="text-black no-underline hover:underline">Get In Touch</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-xl font-bold mb-4">CONTACT</h3>
          <p className="flex items-center justify-center mb-2"><FaMapMarkerAlt className="mr-2" color='blue'/>Sector - 22, Gurgaon, Haryana - 122002.</p>
          <p className="flex items-center justify-center"><FaEnvelope className="mr-2"color='blue' /><a href="mailto:support@unstoptechnosolution.com" className="text-black no-underline hover:underline">support@unstoptechnosolution.com</a></p>
          <p className="flex items-center justify-center mb-2"><a href="mailto:sales@unstoptechnosolution.com" className="text-black no-underline hover:underline">sales@unstoptechnosolution.com</a></p>
          <p className="flex items-center justify-center"><FaPhone className="mr-2" color='blue' /><a href="tel:+919876543210" className="text-black no-underline hover:underline">+91 9876543210</a></p>
          <p className="flex items-center justify-center"><a href="tel:+91234567890" className="text-black no-underline hover:underline">234567890</a></p>
        </div>
      </div>
      <div className="mt-8">
        <p>© 2024 UNSTOP TECHNO SOLUTION. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-black"><FaFacebookF color='blue'/></a>
          <a href="#" className="text-black"><FaTwitter color='blue'/></a>
          <a href="#" className="text-black"><FaLinkedinIn color='blue'/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
