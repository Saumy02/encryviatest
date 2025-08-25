import React from 'react';

const ProductCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
      <Icon />
      <h4 className="text-2xl font-bold mt-4 mb-2">{title}</h4>
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
};

export default ProductCard;
