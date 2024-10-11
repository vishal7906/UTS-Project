import React from 'react';
import { Carousel,CarouselContent,CarouselItem, } from './ui/carousel'
import { Card,CardContent,CardHeader} from './ui/card'
import Autoplay from 'embla-carousel-autoplay';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Avatar,AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
const CareerCarousel = () => {
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
    return <div>Loading...</div>; // You can customize loading state
  }

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Career Opportunities</h2>
        <p className="text-xl text-gray-500 mt-2">Empowering Digital Success</p>
      </div>
      <Carousel 
         plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        className="w-full mx-auto">
      <CarouselContent >
        {careers.map((career, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader>
                  
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full p-6">
                  <div className='flex items-center mt-4'>
                    <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage 
                        src={career.icon}
                        alt={career.name}
                        />       
                    </Avatar>
                    <div>
                    <p className="font-semibold text-start">{career.title}</p>
                    <p className="text-sm text-gray-500 text-start">{career.description}</p>
                    <Link to={career.applyLink}><Button className="bg-blue-500 mt-2 flex">Apply Now</Button></Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
      
    </div>
  );
};

export default CareerCarousel;
