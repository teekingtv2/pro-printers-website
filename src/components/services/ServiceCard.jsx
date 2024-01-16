/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaAppStore, FaArrowCircleRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  return (
    <div
      className="flex flex-col justify-center items-center col-span-2 rounded-xl boxShadow-sm h-[230px] w-[300px] bg-[#131313] gap-2"
      style={{ border: `3px solid ${service.bg}` }}
    >
      <img
        src={`/images/services/${service.img}`}
        alt="Jaflah Software Development Company"
        className="w-[100px]"
      />
      <p className="text-[17px] font-bold " style={{ color: `${service.bg}` }}>
        {service.title}
      </p>
    </div>
  );
};

export default ServiceCard;
