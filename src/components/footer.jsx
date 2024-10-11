import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin,BsInstagram,BsFacebook,BsPinterest} from 'react-icons/bs';
import { MapPinned, Mail, PhoneCall, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
      <footer className='text-center mb-6 '>
        <section className='flex md-justify-center items-center md-gap-16 flex-col gap-6'>
          <div >Get Connected with us on social networks</div>
          <div className='flex gap-6 '>
            <Link to={'https://www.facebook.com/profile.php?id=61563510916013'}><BsFacebook size={20} color='blue'/></Link>
            <Link to={'https://www.instagram.com/unstoptechnosolution/'}><BsInstagram size={20} color='red'/></Link>
            <Link to={'https://in.pinterest.com/unstoptechnosolution/'}><BsPinterest size={20} /></Link>
            <Link to={'https://www.linkedin.com/company/104142575/admin/dashboard/'}><BsLinkedin size={20} color='blue'/></Link>
          </div>
        </section>
        <div className="border-t-2 border-dotted border-black my-6"></div>
      
        <section className='container mx-auto px-4 py-8 max-w-screen-lg'>
          <div className='flex flex-col md:flex-row justify-between items-start md:gap-16'>
            
            {/* First Column: Unstop Techno Solution Description */}
            <div className='md:w-1/3 text-start mb-8'>
              <h6 className='mb-4 font-bold'>UNSTOP TECHNO SOLUTION</h6>
              <p>
                Providing a single database with a unified system that combines digital marketing and full manufacturing industry solutions. This simplified method assures effective order processing and quality control, increases transparency, and permits real-time monitoring.
              </p>
            </div>
            
            {/* Second Column: Quick Links */}
            <div className='md:w-1/4 text-start mb-8'>
              <h6 className='font-bold mb-4 text-uppercase'>QUICK LINKS</h6>
              <ul className='space-y-2'>
                <li className='flex items-center transition-transform duration-300 transform hover:translate-x-2 hover:cursor'>
                  <ChevronRight color='blue' className='mr-2' />
                  <Link to={""}>Home</Link>
                </li>
                <li className='flex items-center transition-transform duration-300 transform hover:translate-x-2 hover:cursor'>
                  <ChevronRight color='blue' className='mr-2' />
                  <Link to={"services"}>Service</Link>
                </li>
                <li className='flex items-center transition-transform duration-300 transform hover:translate-x-2 hover:cursor'>
                  <ChevronRight color='blue' className='mr-2' />
                  <Link to={"about"} >About Us</Link>
                </li>
                <li className='flex items-center transition-transform duration-300 transform hover:translate-x-2 hover:cursor'>
                  <ChevronRight color='blue' className='mr-2' />
                  <Link to={"career"} >Career</Link>
                </li>
                <li className='flex items-center transition-transform duration-300 transform hover:translate-x-2 hover:cursor'>
                  <ChevronRight color='blue' className='mr-2' />
                  <Link to={"blog"}>Blog</Link>
                </li>
                <li className='flex items-center transition-transform duration-300 transform hover:translate-x-2 hover:cursor'>
                  <ChevronRight color='blue' className='mr-2' />
                  <Link to={"getintouch"}>Get In Touch</Link>
                </li>
              </ul>
            </div>


            {/* Third Column: Contact Us */}
            <div className='md:w-1/3 text-start'>
              <h6 className='font-bold mb-4'>CONTACT US</h6>

              <div className='flex items-center mb-2'>
                <MapPinned size={21} className='mr-3' />
                <p className='text-gray-700'>Sare home, Sector - 92, Gurgaon, Haryana - 122050</p>
              </div>

              <div className='flex items-start mb-3'>
                <div className='flex items-center'>
                  <Mail size={19} className='mr-3' />
                  <div>
                    <a href="mailto:support@unstoptechnosolution.com" className='block text-gray-700'>
                      support@unstoptechnosolution.com
                    </a>
                    <a href="mailto:sales@unstoptechnosolution.com" className='block text-gray-700'>
                      sales@unstoptechnosolution.com
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                  <PhoneCall size={19} className='mr-3' />
                  <a href="tel:+91-8962597306" className='text-gray-700'>+91-8962597306, </a>
                  <a href="tel:+91-9340459812" className='text-gray-700 ml-1'>9340459812</a>
              </div>
            </div>
          </div>
        </section>
      </footer>
  );
};

export default Footer;
