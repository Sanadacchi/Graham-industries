import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[524px] mb-6 md:mb-8 px-4 md:px-0">
      <h2 className="text-gray-200 text-base md:text-lg font-poppins bg-opacity-80 bg-[#292929] px-3 md:px-4 py-1.5 md:py-2 rounded-full self-start mb-2 md:mb-4">
        Graham Industries
      </h2>
      <h1 className="text-white text-2xl md:text-[36px] font-poppins font-bold leading-tight">
        Empowering Tomorrow with
        <span className="text-red-600"> Intelligent</span>
        Technology
      </h1>
      <p className="text-gray-300 text-base md:text-[20px] font-poppins leading-relaxed">
        We build <span className="text-red-600">AI-driven</span> solutions that elevate
        businesses, streamline processes, and drive
        innovation across industries.
      </p>
    </div>
  );
};

export default Hero;