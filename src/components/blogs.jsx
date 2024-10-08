import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'BLOG POST TITLE 1',
      description: 'Short description of the blog post goes here. It should entice readers to click and read more.',
      imageUrl: image1,
    },
    {
      id: 2,
      title: 'BLOG POST TITLE 2',
      description: 'Short description of the blog post goes here. It should entice readers to click and read more.',
      imageUrl: image2,
    },
    {
      id: 3,
      title: 'BLOG POST TITLE 3',
      description: 'Short description of the blog post goes here. It should entice readers to click and read more.',
      imageUrl: image3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className='text-2xl text-blue-600 font-medium mb-4'>Our Blogs</h2>
      <h2 className="text-4xl font-bold mb-4 text-black">Explore UTS Company Blogs</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-[800px] mx-auto">At UTS, we offer a range of cutting-edge digital services designed to elevate your brand's strategy.
            From innovative market research to performance-driven campaign creation,
            we customize our approach to drive impactful results for your business.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-12">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center" // Centered text
          >
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-900">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
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
