import React from 'react';
import image1 from '../assets/aboutUs1.jpg';
import { CheckCircle } from 'lucide-react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://backend-uts.vercel.app/api/about-page'); // Update with your API endpoint
        setAboutData(response.data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>; // You can customize loading state
  }

  return (
    <div className='mb-12'>
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className='uppercase text-2xl text-blue-600 font-medium mb-4'>We Provide Digital Services</h2>
        <h2 className="uppercase text-4xl font-bold mb-4 text-black">About Us</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-[800px] mx-auto leading-7">
          {aboutData.shortDescription}
        </p>
      </div>

      {/* First Section with Image and Description */}
      <main className='flex flex-col md:flex-row container mx-auto px-4 md:px-24 justify-center items-start gap-8'> 
        <div className='w-full md:w-1/2 text-center'>
          <img src={image1} alt="About Us 1" className='w-3/4 max-w-full h-auto rounded-lg shadow-lg' />
        </div>
        <div className='w-full md:w-1/3 text-left'>
          <p className='text-lg text-bold text-gray-700 leading-7 mb-8 tracking-wider'>
            {aboutData.detailDescription}
          </p>
          <div> 
            <h1 className='uppercase text-blue-600 text-lg tracking-wider mb-2'>Unstop in a nutshell</h1>
            <ul className='text-gray-600 text-lg tracking-wider mb-2 space-y-2'>
              {aboutData.highlightPoints.map((point, index) => (
                <li key={index} className='flex items-center'>
                  <CheckCircle className='mr-2' />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Second Section for Mission with Image */}
      <main className='flex flex-col md:flex-row container mx-auto px-4 md:px-24 justify-between items-start pt-16 gap-8'>
        <div className='w-full md:w-1/2 text-left'>
          <h1 className='text-blue-600 text-2xl tracking-wider font-bold mb-2'>Our Mission</h1>
          <p className='text-lg text-gray-700 leading-7 mb-14 tracking-wider'>
            {aboutData.mission.text}
          </p>
        </div>
        <div className='w-full md:w-1/2 text-center'>
          <img src={aboutData.mission.image} alt="About Us 2" className='w-3/4 max-w-full h-auto rounded-lg shadow-lg' />
        </div>
      </main>

      {/* Third Section with Image3 */}
      <main className='flex flex-col md:flex-row container mx-auto px-4 md:px-24 justify-between items-start pt-16 '>
        <div className='w-full md:w-1/2 text-center'>
          <img src={aboutData.vision.image} alt="About Us 3" className='w-3/4 max-w-full h-auto rounded-lg shadow-lg' />
        </div>
        <div className='w-full md:w-1/2 text-left'>
          <h1 className='text-blue-600 text-2xl tracking-wider font-bold mb-2'>Our Vision</h1>
          <p className='text-lg text-gray-700 leading-7 mb-14 tracking-wider'>
            {aboutData.vision.text}
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
