'use client';

const BannerBottomSection = () => {
  return (
    <div className="flex bg-[#ffffff] w-full h-full">
      <div className="py-10 md:py-[90px] max-w-[1400px] mx-auto text-[#01081a] pb-[50px] px-5 md:px-2 grid grid-cols-1 md:grid-cols-11 gap-5 md:gap-[10px] justify-center items-center">
        <div className="col-span-2 w-[100%] h-[130px] text-start text-[#01081a] card flex flex-col items-start justify-center">
          <img
            src="/images/home/love.png"
            alt=""
            className="w-[35%] rounded-[5px] h-[100px] md:h-[65px]"
          />
          <div className="text-[14px] mt-3">Sustainable development</div>
        </div>
        <div className="col-span-2 w-[100%] h-[130px] text-start text-[#01081a] card flex flex-col items-start justify-center">
          <img
            src="/images/home/target.png"
            alt=""
            className="w-[35%] rounded-[5px] h-[100px] md:h-[65px]"
          />
          <div className="text-[14px] mt-3">Education & skills development</div>
        </div>
        <div className="col-span-2 w-[100%] h-[130px] text-start text-[#01081a] card flex flex-col items-start justify-center">
          <img
            src="/images/home/excellence.png"
            alt=""
            className="w-[35%] rounded-[5px] h-[100px] md:h-[65px]"
          />
          <div className="text-[14px] mt-3">Cultural exchange</div>
        </div>
        <div className="col-span-2 w-[100%] h-[130px] text-start text-[#01081a] card flex flex-col items-start justify-center">
          <img
            src="/images/home/excellence.png"
            alt=""
            className="w-[35%] rounded-[5px] h-[100px] md:h-[65px]"
          />
          <div className="text-[14px] mt-3">Community center renovation</div>
        </div>
        <div className="hidden col-span-3 w-[100%] text-start text-[#01081a] md:flex items-center justify-center">
          <img
            src="/images/home/excellence.png"
            alt=""
            className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerBottomSection;
