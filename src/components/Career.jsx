import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { LoaderCircle } from 'lucide-react';
import CareerCarousel from './CareerCarousel';

const CareerSection = () => {

  const [careers, setCareer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://backend-uts.vercel.app/api/careers'); // Update with your API endpoint
        setCareer(response.data.data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className='flex h-screen justify-center items-center'><LoaderCircle className='animate-spin' /></div>; // You can customize loading state
  }


  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className='uppercase text-2xl text-gray-500 font-medium mb-4'>Empowering Digital Success</h2>
      <h2 className="uppercase text-4xl font-bold mb-4 text-customBlue">Explore Opportunities with UTS Company</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-[800px] mx-auto">
        At UTS, we offer a range of cutting-edge digital services designed to elevate your brand's strategy.
        From innovative market research to performance-driven campaign creation,
        we customize our approach to drive impactful results for your business.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-12">
        {careers?.map((career,index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center" // Centered text
          >
            <img 
              src={career?.icon} 
              alt={career?.title} 
              className="h-10 object-cover" 
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-blue-900">{career?.title}</h3>
              <p className="text-gray-600 mb-4">{career?.description}</p>
              {/* Passing individual blog data using state */}
              <Link to={career?.applyLink}><Button className="bg-blue-500 mt-2 flex ">Apply Now</Button></Link>
            </div>
          </div>
        ))}
      </div>
      {/* <CareerCarousel /> */}
    </div>
  );
};

export default CareerSection;
