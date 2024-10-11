import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Homepage = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("https://backend-uts.vercel.app/api/sliders/slides")
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error fetching slides:", error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/60"></div>
          <div className="relative z-10 flex items-center justify-center h-full px-4 text-white text-center">
            <div>
              <h2 className="text-3xl font-roboto font-bold mb-4 text-shadow-lg">{slide.heading}</h2>
              <p className="text-lg mb-6 text-shadow-md text">{slide.subheading}</p>
              <Link to={'getintouch'} className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-orange-500 hover:translate-y-[-2px]">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-white/40" onClick={goToPrevSlide}>
        <ChevronLeft size={24} color="white" />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-white/40" onClick={goToNextSlide}>
        <ChevronRight size={24} color="white" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
