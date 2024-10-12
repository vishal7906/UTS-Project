import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Carousel,CarouselContent,CarouselItem, } from './ui/carousel'
import { Card,CardContent} from './ui/card'
import Autoplay from 'embla-carousel-autoplay';
import { Avatar } from './ui/avatar';
import image1 from '../assets/services1.avif'
import image2 from '../assets/services2.avif'
import image3 from '../assets/services3.avif'
import { Button } from './ui/button'
import { ArrowRight, Headset,LoaderCircle } from 'lucide-react'

const Services = () => {
  const [services,setServices] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://backend-uts.vercel.app/api/service-page'); // Update with your API endpoint
        setServices(response.data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices()
  }, []);
  
  if (loading) {
    return <div className='flex h-screen justify-center items-center'><LoaderCircle className='animate-spin' /></div>; // You can customize loading state
  }
  return (
  <div className="container mx-auto px-4 pt-16 text-center w-full ">
      <h2 className='uppercase text-2xl text-gray-500 font-sm mb-4'>We Provide Digital services</h2>
      <h2 className="uppercase text-4xl font-bold mb-4 text-customBlue">Services Provided by UTS</h2>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-[800px] mx-auto">
        We offer cutting-edge marketing management services that are tailored to maximize every facet of your brand's approach.
        From creating campaigns and doing market research to analyzing performance,
        we customize our approach to fit your particular company requirements.
      </p>
      <Carousel 
         plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        className="w-full mx-auto ">
        <CarouselContent>
          {services[0].services.map((service, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <Card className="h-full border-2 border-dashed border-blue-500 hover:cursor-pointer hover:bg-blue-500 group">
                <CardContent className="flex flex-col justify-between h-full p-6">
                  {/* Avatar with proper centering and overflow hidden */}
                  <Avatar className="h-20 w-20 flex items-center justify-center overflow-hidden rounded-full ">
                    <i
                      className={service.imageUrl}
                      style={{ fontSize: "3.5rem", color: "#FBBF24"}} // Adjusted size & color
                    ></i>
                  </Avatar>

                  {/* Content Alignment */}
                  <div className="text-start">
                    <p className="font-bold text-2xl group-hover:text-yellow-500 transition duration-500 ease-in-out">
                      {service.name}
                    </p>
                    <p className="text-lg text-gray-500 mt-2">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>

    <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center text-start text-xl">
          {/* Text Section */}
          <div>
            <h3 className="text-gray-500 uppercase tracking-wider mb-4 text-2xl">
              About Our Company
            </h3>
            <h2 className="text-4xl font-bold text-customBlue mb-4">
              Mapping Adventures, Making Moments
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our state-of-the-art marketing management tools are designed to optimize every single brand strategy. From creating campaigns and doing market research to analyzing performance, we customize our approach to fit your particular company requirements.
            </p>

            {/* Bullet Points */}
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 mr-2">✔</span>
                Discuss your commitment to excellent customer service.
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 mr-2">✔</span>
                Discuss your commitment to n.
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 mr-2">✔</span>
                Discuss your commitment to excellent customer service.
              </li>
            </ul>

            {/* Call to Action Button */}
           <div className='flex flex-col md:flex-row items-center'>
           <Link to={'/getintouch'}>
              <Button className='bg-blue-500 text-md p-6 rounded-full'>
                Talk To An Expert <ArrowRight size={29} className='ml-1'/>
              </Button>
            </Link>
            <Link to='tel:+91-8962597306'>
            <Button variant='ghost' className='ml-3 text-md text-center'> <Headset className='mr-2'/> +91-8962597306</Button>
            </Link>
           </div>
          </div>

          {/* Image Section */}
          {/* Image Section */}
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 ">
  {/* First image takes up the entire height of the text section */}
  <img
    src={image1}
    alt="Image 1"
    className="rounded-lg shadow-lg row-span-2 h-full object-cover "
  />
  {/* Second image */}
  <img
    src={image2}
    alt="Image 2"
    className="rounded-lg shadow-lg md:block hidden"
  />
  {/* Third image */}
  <img
    src={image3}
    alt="Image 3"
    className="rounded-lg shadow-lg md:block hidden"
  />
</div>

        </div>
      </section>
      <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              
              {
                services[0].testimonials.map((service,index)=>(
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-yellow-500 rounded-full p-4 mb-4">
                      <img src={service.imageURL} alt={service.text} className="w-12 h-12"/>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">{service.shortDescription.split(" ")[0]}</p>
                    <p className="text-lg text-gray-600">{service.text}</p>
                  </div>

                ))
              }
            </div>
          </div>
      </section>
      <section className="container mx-auto px-4 py-16 text-center">
      <h2 className=' uppercase text-2xl text-gray-500 font-sm mb-4'>Are you ready to Digital Service? At Unstop techno solution</h2>
      <h2 className="uppercase text-4xl font-bold mb-4 text-customBlue">We are not just a Digital Service Provider - We are your Partner In Performance</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-[800px] mx-auto">
        We offer cutting-edge marketing management services that are tailored to maximize every fact of your brand's approach.
        From creating campaigns and doing market research to analyzing performance,
        we customize our approach to fit your particular company requirements.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-12">
        {services[0].moreServices.map((service,index) => (
           <Card key={index} className="h-full border-2 border-dashed border-blue-500 hover:cursor-pointer hover:bg-blue-500 group">
           <CardContent className="flex flex-col justify-between items-center h-full p-6">
             {/* Avatar with proper centering and overflow hidden */}
             <Avatar className="h-20 w-20 flex items-center justify-center overflow-hidden rounded-full ">
               <i
                 className={service.imageUrl}
                 style={{ fontSize: "3.5rem", color: "#FBBF24"}} // Adjusted size & color
               ></i>
             </Avatar>

             {/* Content Alignment */}
             <div className="text-center">
               <p className="font-bold text-customBlue text-3xl group-hover:text-yellow-500 transition duration-100 ease-in-out">
                 {service.name}
               </p>
               <p className="text-lg text-gray-500 mt-2">{service.description}</p>
             </div>
           </CardContent>
         </Card>
        ))}
      </div>
    </section>


  </div>
  )
}

export default Services