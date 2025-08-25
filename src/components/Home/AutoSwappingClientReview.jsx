import React, { useState, useEffect } from 'react';

const AutoSwappingClientReview = ({ reviews, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, interval);
    return () => clearInterval(timer);
  }, [reviews.length, interval]);

  const currentReview = reviews[currentIndex];
  if (!currentReview) return null;

  return (
    <section className="py-20 px-6 text-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 to-black shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
          {/* Left arrow */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Review content */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
              <p className="text-lg md:text-xl mb-4 leading-relaxed">❝{currentReview.text}❞</p>
              <h3 className="text-xl font-semibold mb-2">{currentReview.author}</h3>
              <div className="flex justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < currentReview.rating ? 'text-green-400' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.97 6.06h6.388c.969 0 1.371 1.24.588 1.81l-5.174 3.754 1.97 6.06c.3.921-.755 1.688-1.539 1.158L10 16.294l-5.174 3.754c-.784.53-1.839-.237-1.539-1.158l1.97-6.06L.963 10.797c-.783-.57-.38-1.81.588-1.81h6.388l1.97-6.06z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review image */}
            <div className="md:w-1/2 flex justify-center items-center">
              <img
                src={currentReview.image}
                alt={currentReview.author || "Client Review"}
                className="rounded-2xl shadow-lg object-cover w-full h-full max-w-[630px] max-h-[630px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/630x630/2A2A2A/FFFFFF?text=Client+Review+Image";
                }}
              />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default AutoSwappingClientReview;
