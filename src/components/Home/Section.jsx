import React from "react";

const Section = () => {
  return (
    <div>
      {/* First Section - Digital Marketing Effective */}
      <section className="max-w-[1200px] mx-auto px-8 py-8" id="digital-marketing">
        <div className="flex justify-between items-center flex-wrap mb-16 gap-8">
          {/* Image Section (Left) */}
          <div className="w-full max-w-[500px] transition-transform duration-300 ease-in-out rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg">
            <img
              src="https://unstoptechnosolution.com/assets/image/marketing.jpg"
              alt="Digital Marketing"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Section (Right) */}
          <div className="w-full max-w-[600px] p-5 text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-5 transition-colors duration-300 ease-in-out hover:text-blue-500">
              What Makes Digital Marketing Effective?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-7">
              Reaching your audience is only one aspect of digital marketing; the other is establishing meaningful and quantifiable connections with them that will foster engagement and growth over the long run.
            </p>
            <a href="#learn-more" className="inline-block py-3 px-6 bg-blue-500 text-white text-lg font-bold rounded-full shadow transition-colors duration-300 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Second Section - Solution Image */}
      <section className="max-w-[1200px] mx-auto px-8 py-8" id="solution-image">
        <div className="flex justify-between items-center flex-wrap mb-16 gap-8">
          {/* Text Section (Left) */}
          <div className="w-full max-w-[600px] p-5 text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-5 transition-colors duration-300 ease-in-out hover:text-blue-500">
              Content Matters
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-7">
              The art of creating engaging content involves telling tales that captivate readers, enlighten them, and motivate them to take action—converting site visitors into devoted supporters and followers.
            </p>
            <a href="#learn-more" className="inline-block py-3 px-6 bg-blue-500 text-white text-lg font-bold rounded-full shadow transition-colors duration-300 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1">
              Learn More
            </a>
          </div>

          {/* Image Section (Right) */}
          <div className="w-full max-w-[500px] transition-transform duration-300 ease-in-out rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg">
            <img
              src="https://unstoptechnosolution.com/assets/image/boximage.jpg"
              alt="Solution"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
