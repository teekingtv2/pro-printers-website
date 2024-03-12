/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaLocationArrow, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const AboutFullLeft = ({ setMore }) => {
  return (
    <div className="hidden col-span-3 md:flex flex-col justify-start items-start py-5 md:py-12 border-dashed border-r-[0px] md:border-r-[1px] border-[#444444]">
      <div className="w-full flex justify-end">
        <div
          className="md:invisible md:h-0 md:w-0 text-xl text-white py-2 px-4 bg-[#e55151] rounded-[50%] cursor-pointer fixed"
          onClick={() => setMore(false)}
        >
          X
        </div>
      </div>
      <div className="px-4">
        <div className="flex flex-col justify-start items-center mb-8">
          <img
            src="/images/mobile-device.png"
            alt="Jaflah Software Development Company"
            className="w-[50%] mb-4"
            style={{ borderRadius: '50%' }}
          />
          <h2 className="text-[21px] uppercase text-white text-center m-0 p-0">
            Jaf<span className="text-[#FC5B56]">lah</span>
          </h2>
          <h4 className="text-[13px] text-gray-400 text-center leading-5 m-0 p-0">
            Software Development <span className="text-white">Company</span>
          </h4>
        </div>
        <div className="flex flex-col gap-4 w-full mt-5 font-light text-sm">
          <div>
            <div className="flex justify-start items-center">
              <BiMailSend className="me-2 text-md" />
              <a href="mailto:info@jaflah.com.ng">info@jaflah.com.ng</a>
            </div>
            <div
              style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
              className="w-full mt-1"
            ></div>
          </div>
          <div>
            <div className="flex justify-start items-center">
              <FaWhatsapp className="me-2 text-md" />
              <a href="https://wa.me/2348143443420">+23481 434 434 20</a>
            </div>
            <div
              style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
              className="w-full mt-1"
            ></div>
          </div>
          <div>
            <div className="flex justify-start items-center">
              <FaPhone className="me-2 text-md" />
              <a href="tel:+2349046832081">+23490 468 320 81</a>
            </div>
            <div
              style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
              className="w-full mt-1"
            ></div>
          </div>
          <div>
            <div className="flex justify-start items-center">
              <FaLocationArrow className="me-2 text-md" />
              <a>Lagos, Nigeria</a>
            </div>
            <div
              style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
              className="w-full mt-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFullLeft;
