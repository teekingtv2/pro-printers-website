/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaAppStore } from 'react-icons/fa';
import HomeChooseCard from './HomeChooseCard';

const HomeWhyChooseUs = () => {
  return (
    <div className="w-[100vw] py-[80px] md:py-[100px] bg-[#ffffff]">
      <div className="max-w-[1340px] w-full h-full px-4 md:px-0 mx-auto md:grid grid-cols-12">
        <div className="col-span-4">
          <h2 className="py-4 text-gray-900 text-2xl md:text-3xl md:leading-[3rem] max-w-full md:max-w-[40vw]">
            Wondering Why Clients Choose Us?
          </h2>
        </div>
        <div className="col-span-8 md:px-[100px] ">
          <p className="text-gray-500 text-[17px] pt-3 pb-10">
            At {process.env.APP_NAME}, our core values serve as the foundation of our operations as
            highlihghted below, and beyond just that:
          </p>
        </div>
      </div>
      <div className="max-w-[1340px] w-full h-full py-8 px-4 md:px-0 mx-auto md:grid grid-cols-12">
        <div className="col-span-4">
          <img
            src="/images/desk2.jpg"
            alt={process.env.APP_NAME}
            // width={500}
            // height={500}
          />
        </div>
        <div className="col-span-8 md:ps-[100px] md:grid grid-cols-4 gap-10">
          <HomeChooseCard
            title="Innovative, Quality Delivery"
            subtitle="We thrive on pushing..."
            icon="quality"
            text="...boundaries with unwavering dedication to excellent, engaging & highest quality deliveries"
          />
          <HomeChooseCard
            title="Collaboration with Clients"
            subtitle="We achieve great ourcomes..."
            icon="collaboration"
            text="...by working closely with clients, understand their visions, and bring their concepts to life"
          />
          <HomeChooseCard
            title="Expert, Realiable Team"
            subtitle="Our team of seasoned tech experts..."
            icon="team"
            text="...bring a wealth of expertise to every project, ensuring unparalleled quality and innovation."
          />
          <HomeChooseCard
            title="Client-Centric Approach"
            subtitle="Our captivating services provide..."
            icon="advantage"
            text="...a distinct competitive edge, helping you pass ideas effectively, and drive business growth."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
