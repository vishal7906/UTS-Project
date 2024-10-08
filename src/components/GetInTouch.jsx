import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const GetInTouch = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Submit the form data to the server or database
      const response = await axios.post('https://your-backend-api.com/submit', data);
      if (response.status === 200) {
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Contact Form Section */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          We would love to hear from you! Please fill out this form and we'll get in touch with you shortly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">Name *</label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-sm font-medium">Mobile number *</label>
            <input
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Mobile number must be 10 digits',
                },
              })}
              type="text"
              placeholder="Enter your number"
              className="mt-1 w-full p-2 border rounded"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium">Message *</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Enter your message"
              className="mt-1 w-full p-2 border rounded"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="mt-6 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.440076289582!2d76.87593211491763!3d28.431501582506265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3fe8df26a647%3A0xfed99f4ff5e79e2b!2sSector%2092%2C%20Gurugram%2C%20Haryana%20122505!5e0!3m2!1sen!2sin!4v1696755670163!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow-lg"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default GetInTouch;
