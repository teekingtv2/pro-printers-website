'use client';

const HomeBannerBottom = () => {
  return (
    <div className="flex bg-[#ffffff] w-full h-full">
      <div className="py-10 md:py-[90px] container mx-auto text-[#01081a] px-5 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[10px] items-center">
        <div className="col-span-1 flex justify-center gap-2">
          <img
            src="/images/vectors/home-small/happy.svg"
            alt=""
            className="bg-[#e9faef] w-[65px] rounded-[50%] h-[65px] md:h-[65px]"
          />
          <div className="flex flex-col gap-1">
            <div className="text-[16px] font-bold">Sustainable development</div>
            <div className="text-[13px]">
              We support community-led initiatives and projects focused on livelihoods...
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center gap-2">
          <img
            src="/images/vectors/home-small/skill.svg"
            alt=""
            className="bg-[#e9faef] w-[65px] rounded-[50%] h-[65px] md:h-[65px]"
          />
          <div className="flex flex-col gap-1">
            <div className="text-[16px] font-bold">Education & skills development</div>
            <div className="text-[13px]">
              We offer training programs, workshops, and scholarships to individuals...
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center gap-2">
          <img
            src="/images/vectors/home-small/event.svg"
            alt=""
            className="bg-[#e9faef] w-[65px] rounded-[50%] h-[65px] md:h-[65px]"
          />
          <div className="flex flex-col gap-1">
            <div className="text-[14px] font-semibold">Cultural exchange</div>
            <div className="text-[13px]">
              We facilitate cultural exchange programs, events, and festivals...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerBottom;
