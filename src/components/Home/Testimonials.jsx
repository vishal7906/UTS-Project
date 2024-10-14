import React, { useEffect, useState } from 'react'
import { Carousel,CarouselContent,CarouselItem } from '../ui/carousel';
import { Card,CardContent } from '../ui/card'
import Autoplay from 'embla-carousel-autoplay';
import axios from 'axios';
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar';

const Testimonial = () => {

  const [testimonials,setTestimonial] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://backend-uts.vercel.app/api/testimonial');
            setTestimonial(response.data.data); // Adjust based on your API response structure
        } catch (error) {
            console.error('Error while fetching testimonial data:', error);
        }
    };
  
    fetchData();
  }, []);

  console.log(testimonials);
  
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center mt-6">Our Testimonials</h2>
        <Carousel 
        loop={true}
         plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction:false
            }),
          ]}
        className="w-full mx-auto mb-4">
          <CarouselContent >
            {testimonials?.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-full p-6">
                      <div className='flex items-center mt-4'>
                        <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage 
                            src={testimonial.image}
                            alt={testimonial.name}
                            /> 
                            <AvatarFallback>
                                {testimonial.name
                                    .split(" ").map((n)=>n[0])
                                    .join("")
                                }
                            </AvatarFallback>       
                        </Avatar>
                        <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                        <p className="text-sm text-gray-500">{testimonial.message}</p>
                        </div>
                        </div>
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </>
  )
}

export default Testimonial