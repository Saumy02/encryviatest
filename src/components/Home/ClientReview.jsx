import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import reviews from '../data/clientReviews.json';

const ClientReview = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextReview = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 300);
  };

  const prevReview = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setIsSliding(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentReviewIndex]);

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="relative bg-purple-700 p-8 rounded-2xl shadow-lg w-full max-w-xl mx-auto flex items-center mb-24 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevReview}
        className="absolute top-1/2 left-[-40px] sm:left-[-56px] transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white z-20 hover:bg-gray-700 transition duration-200"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Review Content */}
      <div
        className={`flex flex-col md:flex-row items-center md:items-start w-full transition-transform duration-300 ${
          isSliding ? 'animate-fade-left' : ''
        }`}
      >
        <div className="md:w-3/5 text-center md:text-left pr-0 md:pr-4 mb-4 md:mb-0">
          <p className="text-gray-200 text-sm mb-4">{currentReview.text}</p>
          <h3 className="text-xl font-bold mb-2">Client Review</h3>
          <div className="flex justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < currentReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img
            src={currentReview.image}
            alt="Client"
            className="rounded-xl shadow-md w-36 h-28 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/150x100/0A0A0A/FFFFFF?text=Image+Error';
            }}
          />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextReview}
        className="absolute top-1/2 right-[-40px] sm:right-[-56px] transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white z-20 hover:bg-gray-700 transition duration-200"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default ClientReview;
