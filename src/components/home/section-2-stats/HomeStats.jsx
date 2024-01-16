import React from 'react';

const HomeStats = () => {
  return (
    <div className="w-[100vw] text-center flex py-[60px] md:py-[30px] bg-[#000]">
      <div className="max-w-[1340px] w-full h-full px-4 md:px-0 mx-auto md:grid grid-cols-10">
        <div className="col-span-2 text-start">
          <h3 className="py-2 text-[22px] text-white">Stats that matter</h3>
          <p className="text-gray-500 text-[15px] leading-6">We have the proven track record</p>
        </div>
        <div className="col-span-8 grid grid-cols-4 md:grid-cols-8">
          <div className="col-span-2 text-start md:text-center my-4 md:my-0">
            <h3 className="py-1 text-[22px] text-white">100+</h3>
            <p className="text-gray-500 text-[15px]">Web App Developed</p>
          </div>
          <div className="col-span-2 text-start md:text-center my-4 md:my-0">
            <h3 className="py-1 text-[22px] text-white">15+</h3>
            <p className="text-gray-500 text-[15px]">Mobile App Developed</p>
          </div>
          <div className="col-span-2 text-start md:text-center my-4 md:my-0">
            <h3 className="py-1 text-[22px] text-white">150+</h3>
            <p className="text-gray-500 text-[15px]">Motion Graphics Designed</p>
          </div>
          <div className="col-span-2 text-start md:text-center my-4 md:my-0">
            <h3 className="py-1 text-[22px] text-white">200+</h3>
            <p className="text-gray-500 text-[15px]">Projects Managed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
