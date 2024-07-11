/* eslint-disable @next/next/no-img-element */
'use client';

const AboutSecondSection = () => {
  return (
    <div className="flex w-full h-full bg-[#060F3A] text-[#ffffff]">
      <div className="py-10 md:py-[80px] container">
        <div className=" container pb-[50px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[50px] px-5 items-center animate__slower animate__animated animate__zoomIn">
          <div className="col-span-1 text-left">
            <div
              className="md:max-w-[100%] p-7 rounded-md border"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div className="text-[18px] font-semibold mb-5">VEDCA USA Structure</div>
              <div className="text-[14px] my-7">
                VEDCA-USA shall compose of two permanent organs: the National Executive Committee
                and the General Assembly, derived currently from Three Regional Association
                (VEDCA-DMV, VEDCA-Texas and VEDCA-Tristate)
              </div>
              <div className="text-[16px] font-semibold mb-3">National Executive Committee</div>
              <div className="text-[14px] my-3">
                The National Executive Committee (NEC) shall serve as the executing body of VEDCA
                USA. The National Executive Committee shall execute all policies and also coordinate
                all activities of VEDCA-USA. Comprised of members from the three different branches
                that make up VEDCAUSA
              </div>
              <div className="text-[14px]">
                Three Branches: Vedca DMV Branch, Vedca Texas Branch, Vedca Tri-State Branch:
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src="/images/events/6.jpg"
              alt=""
              className="h-[300px] md:h-[550px] rounded-[20px] about-img-1 "
              style={{ border: '1px solid #03194a' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecondSection;
