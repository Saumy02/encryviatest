import React from 'react';

const Divider = ({ className = '' }) => {
  return (
    <div className={`w-full h-[1px] bg-white opacity-20 my-8 ${className}`}>
      {/*
        w-full: takes full width
        h-[1px]: sets height to 1 pixel
        bg-white: sets background color to white
        opacity-20: makes it slightly transparent (20% opacity)
        my-8: adds vertical margin (margin-top and margin-bottom) of 2rem (32px) for spacing
        className: allows passing additional custom classes for flexibility
      */}
    </div>
  );
};

export default Divider;