import React from 'react';

const CTA: React.FC = () => {
  return (
    <button 
      className="
        bg-white text-black
        font-poppins font-medium
        rounded-full
        hover:bg-gray-100 transition-colors
        text-base md:text-lg
        w-[100px] h-[32px]
        md:w-[123px] md:h-[35px]
      "
    >
      Contact us
    </button>
  );
};

export default CTA;