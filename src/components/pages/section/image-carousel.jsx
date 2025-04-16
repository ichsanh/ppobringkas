import React, { useState, useEffect } from 'react';
import steam from '../../../assets/img/steam.png';
import telkomsel from '../../../assets/img/telkomsel.png';
import pln from '../../../assets/img/pln.png';

const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Sample banner data - replace with your actual images and links
  const banners = [
    {
      id: 1,
      image: steam,
      title: "Special Discount Sale",
      link: "#",
      bgColor: "bg-blue-100",
    },
    {
      id: 2, 
      image: telkomsel,
      title: "New Product Arrival",
      link: "#",
      bgColor: "bg-red-100",
    },
    {
      id: 3,
      image: pln,
      title: "Exclusive Member Offer",
      link: "#",
      bgColor: "bg-green-100",
    },
    {
      id: 4,
      image: steam,
      title: "Special Promotion",
      link: "#",
      bgColor: "bg-purple-100",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-slide effect that pauses on hover
  useEffect(() => {
    let slideInterval;
    
    if (!isHovered) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [currentSlide, isHovered]);

  return (
    <div 
      className="relative w-full overflow-hidden mt-16" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main banner slider */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-64 md:h-96" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className={`min-w-full flex-shrink-0 ${banner.bgColor}`}
          >
            <a href={banner.link} className="block relative w-full h-full">
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-20 flex items-end">
                <div className="p-4 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold drop-shadow-lg">
                    {banner.title}
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 shadow-md transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 shadow-md transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderBanner;