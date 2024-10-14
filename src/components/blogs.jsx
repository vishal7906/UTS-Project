import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
const BlogSection = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://backend-uts.vercel.app/api/blogs'); // Update with your API endpoint
        setBlogs(response.data.data.blogs); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className='flex h-screen justify-center items-center'><LoaderCircle className='animate-spin' /></div>; // You can customize loading state
  }
  
  return (
    <div className="container mx-auto px-4 my-16 text-center">
      <h2 className=' uppercase text-2xl text-gray-500 font-medium mb-4'>Our Blogs</h2>
      <h2 className="uppercase text-4xl font-bold mb-4 text-customBlue">Explore UTS Company Blogs</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-[800px] mx-auto">At UTS, we offer a range of cutting-edge digital services designed to elevate your brand's strategy.
            From innovative market research to performance-driven campaign creation,
            we customize our approach to drive impactful results for your business.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-12">
        {blogs?.map((blog,index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center" // Centered text
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-customBlue">{blog.title}</h3>
              <p className="text-gray-500 mb-4">{blog.shortDescription}</p>
              {/* Passing individual blog data using state */}
              <Link 
                to={`/blog/${blog.id}`} 
                state={ blog } // Passing the individual blog as state
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
