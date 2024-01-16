import Link from 'next/link';
import React from 'react';
import { FaAppStore, FaArrowCircleRight } from 'react-icons/fa';

const HomeServiceCard = ({ title, subtitle, icon, bg }) => {
  return (
    <div
      className="h-[200px] flex flex-col justify-between items-start px-8 py-6 my-5 md:my-0 col-span-2 rounded-md boxShadow-sm"
      style={{ background: `${bg}` }}
    >
      <div className="h-[50px] w-[50px] bg-[#121212] flex justify-center items-center rounded-md">
        <FaAppStore className="text-[#fc8fb9] font-bold text-lg " />
      </div>
      <p className="">
        <span className="font-bold text-[#121212]">{title}</span>
        <br />
        <span className="text-sm text-gray-900">{subtitle}</span>
      </p>
      <div className="w-full flex justify-end">
        <div>
          <Link href="/" className="flex justify-center items-center gap-2 text-[#121212]">
            <span className="text-sm font-bold">Get Started</span>
            {icon === 'development' ? (
              <FaArrowCircleRight />
            ) : icon === 'reliability' ? (
              <FaArrowCircleRight />
            ) : icon === 'team' ? (
              <FaArrowCircleRight />
            ) : (
              <FaArrowCircleRight />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
