/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HomeBanner = () => {
  return (
    <div id="home" className="w-full text-center flex pt-[40px] md:pt-[120px]">
      <div className="max-w-[1340px] w-full h-full px-4 md:px-0 mx-auto md:grid grid-cols-10">
        <div className="col-span-4 text-start">
          <h1 className="py-4 text-white md:leading-[4rem]">Supercharge your software needs</h1>
          <h2 className="text-gray-400 text-[20px] leading-6">
            With <span className="text-[#e55151]">Jaflah Software Development Company</span>
          </h2>
          <p className="py-5 md:py-16 text-gray-500">
            Get <span className="text-[#fff]">mobile</span>,<span className="text-[#fff]">web</span>{' '}
            and
            <span className="text-[#fff]"> desktop applicantions</span> development, manitenance and
            management services at cost-efective pricings
          </p>
          <div className="flex justify-start gap-6 py-4">
            <Link href="/" className="flex">
              <div className="btnn primaryBtnn text-sm font-bold hover:border-b flex justify-center items-center">
                <span className="mr-2">Get Started</span>
              </div>
            </Link>
            <Link href="/" className="flex">
              <div className="btnn secondaryBtnn text-sm font-bold hover:border-b flex justify-center items-center">
                <span className="mr-2">Get Started</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 pb-0 px-6">
          <img
            src="/images/banner-mobile.png"
            alt={process.env.APP_NAME}
            // width={500}
            // height={500}
          />
        </div>
        <div className="col-span-3 px-4 py-8 md:py-0">
          <div className="flex flex-col h-full justify-center">
            <div className="flex gap-[20px]">
              <img src="/images/mobile-device.png" alt={process.env.APP_NAME} width={150} />
              <img src="/images/all-devices.png" alt={process.env.APP_NAME} width={150} />
            </div>
            <h1 className="pt-4 text-start text-white">150 +</h1>
            <p className="text-start text-md font-bold tracking-widest text-[#e55151]">
              Global Clients
            </p>
            <div className="flex items-center justify-center gap-5 md:mx-3 md:gap-[50px] py-4">
              <div className="rounded-full shadow-md shadow-gray-500 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
              <div className="rounded-full shadow-md shadow-gray-500 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
              <div className="rounded-full shadow-md shadow-gray-500 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
              <div className="rounded-full shadow-md shadow-gray-500 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
