import React from 'react';
import WebDevelopment from '../components/Services/WebDevelopment';

const ServiceCard = ({ service, index, totalServices }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full my-12 md:my-24 group`}
    >
      <div className={`flex flex-col md:flex-row items-center w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className={`md:w-5/12 flex flex-col items-center text-center md:items-start p-4 rounded-lg
          ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{service.description}</p>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">View More</button>
        </div>
        <div className={`md:w-5/12 flex justify-center p-4`}>
          <img
            src={service.imageUrl}
            alt={service.title}
            className="rounded-2xl shadow-lg w-full max-w-xs h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/0A0A0A/FFFFFF?text=Image+Error"; }}
          />
        </div>
      </div>
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-700"></div>
        {index % 2 === 0 ? (
          <div className="absolute right-full w-60 h-1 bg-gray-700 top-1/2 transform -translate-y-1/2 -mr-2"></div>
        ) : (
          <div className="absolute left-full w-60 h-1 bg-gray-700 top-1/2 transform -translate-y-1/2 -ml-2"></div>
        )}
      </div>
      <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center h-full">
          {index > 0 && <div className="absolute top-0 w-1 h-[calc(50%_-_12px)] bg-gray-700"></div>}
          <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-700 z-10"></div>
          {index < totalServices - 1 && <div className="absolute bottom-0 w-1 h-[calc(50%_-_12px)] bg-gray-700"></div>}
      </div>
    </div>
  );
};

export default ServiceCard;