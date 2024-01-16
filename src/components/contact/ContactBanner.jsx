/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PageHeader from '../globals/PageHeader';
import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

const ContactBanner = () => {
  return (
    <div className="flex h-[92vh] md:h-[90vh] ">
      <div className="w-full h-full mx-auto px-4 flex flex-col justify-center items-start pb-10 md:pb-2">
        <PageHeader title="Get in Touch" subheader="Get" header="in Touch" />
        <div className="grid grid-cols-4 md:gap-7 w-full">
          <div className="col-span-1 md:col-span-2 md:pe-10 w-full flex justify-between items-center pe-3">
            <div className="h-[100px] w-[100px] md:h-[350px] md:w-[350px] text-center">
              <img
                src="/images/contact.jpg"
                alt="Jaflah Software Development Company"
                className="rounded-xl w-[100%]"
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 flex flex-col justify-between w-[100%] h-[300px] md:h-[100%] px-0 md:px-0 text-sm md:text-[14px]">
            <div className="px-5 py-[13px] md:py-3 bg-[#222222] w-full flex justify-start items-center gap-4 rounded-lg">
              <BiLocationPlus size={20} className="text-[#FBAD18]" />
              <p className="text-white">Lagos, Nigeria</p>
            </div>
            <div className="px-5 py-[13px] md:py-3 bg-[#222222] w-full flex justify-start items-center gap-4 rounded-lg">
              <AiOutlineWhatsApp size={20} className="text-[#FBAD18]" />
              <Link href="https://wa.me/2349046832081" className="text-white" target="__blank">
                +234 904 6832 081
              </Link>
            </div>
            <div className="px-5 py-[13px] md:py-3 bg-[#222222] w-full flex justify-start items-center gap-4 rounded-lg">
              <FaPhone size={19} className="text-[#FBAD18]" />
              <Link href="tel/2348143443420" className="text-white">
                +234 814 3443 420
              </Link>
            </div>
            <div className="px-5 py-[13px] md:py-3 bg-[#222222] w-full flex justify-start items-center gap-4 rounded-lg">
              <BiLocationPlus size={20} className="text-[#FBAD18]" />
              <Link href="mailto:info@jaflah.com.g" className="text-white">
                info@jaflah.com
              </Link>
            </div>
            <div className="px-5 py-[13px] md:py-3 bg-[#222222] w-full flex justify-center md:justify-start items-center gap-4 rounded-lg">
              <div className="text-white">@jaflah03</div>
              <Link href="https://instagram/jaflah03" className="text-white" target="__blank">
                <FaInstagram size={25} className="text-[#FBAD18]" />
              </Link>
              <Link href="https://instagram/jaflah03" className="text-white" target="__blank">
                <FaTwitter size={25} className="text-[#FBAD18]" />
              </Link>
              <Link href="https://instagram/jaflah03" className="text-white" target="__blank">
                <FaFacebook size={25} className="text-[#FBAD18]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
