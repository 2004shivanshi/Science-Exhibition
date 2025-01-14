import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.JPG";
import slider4 from "./images/slider4.JPG";
import rulesAndRegulations from "./images/Rules and Regulations.pdf";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const sliderWrapperRef = useRef(null);
  const scrollingTextRef = useRef(null);

  const images = [slider4, slider3, slider1, slider2];
  const totalSlides = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  useEffect(() => {
    const handleAnimation = () => {
      const newPosition = -currentIndex * 100;
      if (sliderWrapperRef.current) {
        setSlidePosition(newPosition);
      }
    };
    handleAnimation();
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const scrollText = () => {
      if (scrollingTextRef.current) {
        const textWidth = scrollingTextRef.current.offsetWidth;
        const parentWidth = scrollingTextRef.current.parentNode.offsetWidth;
  
        // Reset position instantly
        scrollingTextRef.current.style.transition = "none";
        scrollingTextRef.current.style.transform = `translateX(${parentWidth}px)`;
  
        // Start the scrolling animation after the reset
        setTimeout(() => {
          scrollingTextRef.current.style.transition = `transform ${(textWidth + parentWidth) / 100}s linear`; // Smooth scrolling
          scrollingTextRef.current.style.transform = `translateX(-${textWidth}px)`;
        }, 10); // Small delay for the reset
      }
    };
  
    scrollText();
  
    const intervalId = setInterval(scrollText, ((scrollingTextRef.current?.offsetWidth || 0) + (scrollingTextRef.current?.parentNode?.offsetWidth || 0)) / 100 * 1000);
  
    return () => clearInterval(intervalId);
  }, []);  

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = rulesAndRegulations;
    link.download = 'IPS_Inter_College_Science_Exhibition_Rules.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-100 to-white">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Gradient Overlay for Smooth Edge Transitions */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10" />

        {/* Slides */}
        <div
          ref={sliderWrapperRef}
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${slidePosition}%)` }}
        >
          {images.map((image, index) => (
            <div 
              className="relative min-w-full flex items-center justify-center" 
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 transform group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 transform group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-16 w-full flex justify-center items-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scrolling Text */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden z-30 shadow-lg">
          <div 
            ref={scrollingTextRef}
            className="whitespace-nowrap text-white text-lg font-semibold cursor-pointer hover:underline py-3"
            onClick={handleDownload}
          >
            Click Here to download the Rules and Regulations of IPS Inter College Science Exhibition
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

