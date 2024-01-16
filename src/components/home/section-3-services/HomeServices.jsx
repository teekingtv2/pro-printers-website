/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaAppStore, FaArrowCircleRight } from 'react-icons/fa';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
  return (
    <div className="w-[100vw] py-[20px] md:py-[100px] bg-[#eff4fa]">
      <div className="max-w-[1340px] w-full h-full py-8 px-4 md:px-0 mx-auto">
        <h1 className="py-4 text-gray-900 text-2xl md:text-4xl md:leading-[3rem] max-w-full md:max-w-[40vw]">
          We provides all kinds of software and digital solutions services
        </h1>
        <p className="text-gray-500 text-[17px] pt-5 pb-10">We have the proven track record</p>
        <div className="w-full md:grid grid-cols-8 gap-5 px-8 md:px-0">
          <HomeServiceCard
            title="Application Development"
            subtitle="For web, mobile, desktop devices"
            icon="development"
          />
          <HomeServiceCard
            title="Management & Maintenance"
            subtitle="For web, mobile, desktop apps"
            icon="management"
          />
          <HomeServiceCard
            title="Graphics Design"
            subtitle="Motion & general graphics"
            icon="graphics"
          />
          <HomeServiceCard
            title="User Experiences"
            subtitle="UI/UX for web, mobile & desktop"
            icon="ui"
          />

          {/* <div className="my-5 md:my-0 col-span-2 bg-[#fc8fb9]">
            <p className="h-[120px] px-5 flex justify-center items-center font-bold leading-5 text-center">
              UI/UX Design
            </p>
            <img
              src="/images/desk.jpg"
              style={{ height: '200px', width: '100%' }}
              alt={process.env.APP_NAME}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
