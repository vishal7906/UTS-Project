import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail = () => {
  const location = useLocation();
  const blog = location.state;

  // Default check in case blog data is missing
  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4 max-w-3xl">
      {/* Blog Header Image */}
      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-5xl font-bold mb-4 text-gray-900">{blog.title}</h1>

      {/* Published Date & Author */}
      <div className="text-gray-500 text-sm mb-6">
        <p>Published on <span className="font-semibold">October 7, 2024</span></p>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          {blog.content || "This is a placeholder for the blog content. The content section is where you'll elaborate on the topic."}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {blog.description || "This is a sample description of the blog. The description is intended to give a summary of the blog's content."}
        </p>
      </div>

      {/* Blockquote Section */}
      <blockquote className="border-l-4 border-blue-500 italic text-gray-600 pl-4 py-2 mb-8">
        "This is an example of a quote or an important note that you'd like to highlight in the blog post. It adds more value to the reader."
      </blockquote>

      {/* Author Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold mb-2">About the Author</h3>
        <p className="text-gray-600">John Doe is a seasoned writer and expert in digital marketing, known for his insights on industry trends and effective strategies.</p>
      </div>
    </div>
  );
};

export default BlogDetail;
