import React from 'react';
import { FaAppStore } from 'react-icons/fa';

const HomeChooseCard = ({ title, subtitle, icon, text }) => {
  return (
    <div className="col-span-2 h-[160px] flex flex-col justify-between mb-6 my-[60px] md:my-0">
      <div className="flex gap-5">
        <div className="h-[50px] w-[50px] bg-[#121212] flex justify-center items-center rounded-md">
          {icon === 'quality' ? (
            <FaAppStore className="text-[#86c2f3] font-bold text-lg " />
          ) : icon === 'reliability' ? (
            <FaAppStore className="text-[#86c2f3] font-bold text-lg " />
          ) : icon === 'team' ? (
            <FaAppStore className="text-[#86c2f3] font-bold text-lg " />
          ) : (
            <FaAppStore className="text-[#86c2f3] font-bold text-lg " />
          )}
        </div>
        <div className="flex flex-col items-start text-[#212121]">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <p className="text-gray-500 mb-5">{text}</p>
      <div className="h-1 w-[80%] bg-[#86c2f3]"></div>
    </div>
  );
};

export default HomeChooseCard;
