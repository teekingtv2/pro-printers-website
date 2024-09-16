import Head from 'next/head';
import React from 'react';
import { FaMailBulk, FaPhone } from 'react-icons/fa';

const TopBar = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Printing Press Company in Lagos" />
        <meta
          name="description"
          content="Welcome to Pro Printers Agency - your go-to destination for premium custom gift item branding in Ilorin and Lagos. Specializing in UV printing, DTF printing, Large Format Printing (Flex Banner, Stickers), Office Branding, Custom Wall Papers, Vehicle branding, Display Stand, POSM, Product Labels and custom gift and promotional Items"
        />
        <meta
          name="keywords"
          content="Pro Printers, Pro Printers Agency, Printing Press in Lagos, Printing Press in Nigeria, Best Printing Services in Lagos, Best Printing Services in Nigeria, premium custom gift item branding in Ilorin and Lagos, Specializing in UV printing, DTF printing, Large Format Printing (Flex Banner, Stickers), Office Branding, Custom Wall Papers, Vehicle branding, Display Stand, POSM, Product Labels and custom gift and promotional Item"
        />
      </Head>
      <div className="z-50 fixed top-[0px] w-full topBarBg p-2 flex justify-between items-center px-3 md:px-[100px] text-[#fff] font-normal md:font-semibold text-[12px] md:text-[14px]">
        <div className="w-full md:w-auto flex justify-between md:justify-normal md:gap-5">
          <div className="flex items-center gap-1 md:gap-2">
            <FaPhone />
            <a href="tel:+2349046832081">+2349046832081</a>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaMailBulk />
            <a href="mailto:info@proprintersagency.com">info@proprintersagency.com</a>
          </div>
        </div>
        <p className="text-[#fff] font-semibold hidden md:block">
          Huge discount of as high as 20% off your first order!
        </p>
        <div className="hidden md:block">
          <a href="">Lagos, Nigeria</a>
        </div>
      </div>
    </>
  );
};

export default TopBar;
