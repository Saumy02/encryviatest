import React from 'react';
import ServiceCard from '../../pages/ServiceCard';
import services from '../Home/services.json';

const OurServices = ({ services }) => {
  return (
    <div className="relative py-10 text-white font-sans overflow-hidden w-full ">
      <div className="text-center mb-10 ">
        <h1 className="text-4xl font-bold inline-block border-b-2 border-white pb-2">
          Our Services
        </h1>
      </div>

      <div className="relative w-full px-4">
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-gray-700 hidden md:block"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-700 z-10 hidden md:block"></div>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            totalServices={services.length}
          />
        ))}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-700 z-10 hidden md:block"></div>
      </div>
    </div>
  );
};

export default OurServices;
