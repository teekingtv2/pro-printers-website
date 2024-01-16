/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import AboutFullContent from './AboutFullContent';
import Image from 'next/image';

const AboutBanner = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="flex h-[92vh] md:h-[90vh] ">
      <div className="w-full h-full mx-auto px-4 flex flex-col justify-center pb-12 md:pb-2">
        <div className="md:grid grid-cols-10">
          <div className="col-span-5 flex justify-center pb-10 md:pb-0">
            <img
              src="/images/mobile-device.png"
              alt="Jaflah Software Development Company"
              className="w-[250px] md:w-[80%]"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center items-start">
            <h1 className="uppercase textBlueGradient text-center mb-0">
              Jaf<span className="text-[#e55151]">lah</span>
            </h1>
            {/* <Image src="/images/logo.png" alt="Mudashir Tunde" width="190" height="50" /> */}
            <h2 className="text-gray-400 text-[19px] md:text-[21px] text-center leading-6 mt-2 mb-3">
              <span className="text-white">Software Development Company</span>
            </h2>
            <div
              style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
              className="w-full mt-3 mb-6"
            ></div>
            <p className="">
              Jaflah Software Development Company is a Nigerian business software company that
              specializes in delivering top notch software development solutions to businesses and
              individuals in the country and beyond.
            </p>
            <button className="mt-7 md:mt-10" onClick={() => setMore(true)}>
              Learn more
            </button>
          </div>
        </div>
        {more ? <AboutFullContent setMore={setMore} /> : null}
      </div>
    </div>
  );
};

export default AboutBanner;
