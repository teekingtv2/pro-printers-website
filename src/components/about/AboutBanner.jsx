/* eslint-disable @next/next/no-img-element */
'use client';

const AboutBanner = () => {
  return (
    <div className="flex w-full h-full banner text-[#ffffff]">
      <div className="py-[70px] md:pt-[100px] md:pb-[100px] container">
        <div className="text-[30px] font-bold text-center mb-6">About VEDCA-USA</div>
        <div className="col-span-1 text-left">
          <div
            className="md:max-w-[70%] mx-auto p-7 rounded-lg "
            style={{ border: '1px dashed #ffffff' }}
          >
            <div className="text-[21px] text-center font-semibold mb-5">
              Vengo Development and Cultural Association (VEDCA-USA)
            </div>
            <div className="text-[15px] my-3">
              Vengo Development and Cultural Association USA is a non-profit organization founded on
              the principles of social justice, cultural diversity, and community engagement. As a
              non-profit, non-governmental organization, VEDCA-USA shall be non-partisan and
              apolitical.
            </div>
            <div className="text-[15px] my-3">
              VEDCA-USA is an inclusive association nurturing a holistic frame for the promotion of
              culture, performant and adaptive development, through values that promote individual
              and collective prosperity in the civic life of the Vengo community
            </div>
            <div className="text-[15px] my-3">
              Our team consists of passionate individuals from diverse backgrounds, united by a
              shared vision of a better community for all. We strive to create opportunities for our
              communities and support sustainable development initiatives. Our work is guided by the
              values of empathy, respect, and transparency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
