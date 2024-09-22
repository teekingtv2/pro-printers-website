'use client';

import React from 'react';
import TrackVisibility from 'react-on-screen';

const HomeServices = () => {
  return (
    <div className="container mx-auto py-[90px] md:py-[120px] px-5 md:px-0">
      <div className="text-center mb-6 md:mb-[50px]">
        <h1 className="text-[#000] text-[27px] md:text-[30px] font-semibold mb-5">
          Here are some of <span className="text-[#0047AB]">the services</span> we offer
        </h1>
        <p className="w-[95%] md:w-[60%] mx-auto text-[15px]">
          Discover {process.env.APP_NAME}&apos;s range of high-quality products designed to meet all
          your promotional and branding needs.
        </p>
      </div>

      <div className="animate__slower animate__animated animate__zoomIn grid grid-cols-1 md:grid-cols-3 gap-9 animate__slower animate__animated animate__zoomIn">
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/service1.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Direct UV</h2>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/service2.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">UV DTF</h2>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/service3.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Fabric DTF</h2>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/service4.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Large Format</h2>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/service5.jpg" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Display Stand & PoSM</h2>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/service6.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Gift Items</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
