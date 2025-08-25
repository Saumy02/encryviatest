import React, { useState } from 'react';

const ServiceCard = ({ service, index }) => {
  const [showMore, setShowMore] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative mb-16 md:flex md:items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Image */}
      <div className="md:w-1/2 px-6">
        <img
          src={service.imageUrl}
          alt={service.service}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 px-6 mt-6 md:mt-0 text-justify">
        <h3 className="text-2xl font-bold mb-2">
          {service.emoji} {service.title}
        </h3>
        <p className="text-indigo-500 bolditalic mb-2">{service.hook}</p>

        {/* Toggle Description */}
        {showMore && (
          <p className="text-gray-300 transition-all duration-300 ease-in-out">
            {service.description}
            
          </p>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-sm text-purple-400 hover:underline focus:outline-none"
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
