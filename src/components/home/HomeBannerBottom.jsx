'use client';

import { FaTruck } from 'react-icons/fa';
import { MdOutlineHighQuality, MdSupportAgent } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';

const HomeBannerBottom = () => {
  return (
    <div className="flex bg-[#ffffff] w-full h-full">
      <div className="animate__slower animate__animated animate__zoomIn py-8 md:py-[50px] container mx-auto text-[#01081a] px-2 md:px-2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[10px] items-center">
        <div className="col-span-1 flex justify-center items-center gap-1 md:gap-2">
          <TbTruckDelivery size={20} />
          <div className="text-[13px] md:text-[16px] font-normal md:font-semibold">
            Fast project delivery
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center gap-1 md:gap-2">
          <MdSupportAgent size={20} />
          <div className="text-[13px] md:text-[16px] font-normal md:font-semibold">
            Top-notch support
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center gap-1 md:gap-2">
          <GiPriceTag size={20} />
          <div className="text-[13px] md:text-[16px] font-normal md:font-semibold">
            Low price guarantee
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center gap-1 md:gap-2">
          <MdOutlineHighQuality size={20} />
          <div className="text-[13px] md:text-[16px] font-normal md:font-semibold">
            High quality works
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerBottom;
