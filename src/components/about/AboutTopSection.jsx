/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

const AboutTopSection = () => {
  return (
    <div className="flex w-full h-full banner text-[#03194a] px-2 md:px-10 mx-auto">
      <div className="bg-[#ffffff] w-full">
        <div className="py-10 md:pt-[100px] md:pb-[0px] container px-3 md:px-[70px] animate__slower animate__animated animate__zoomIn">
          <div className="md:w-[60%] mx-auto text-[24px] font-bold text-center">
            Learn About Us - Vengo Development and Cultural Association (VEDCA-USA)
          </div>
          <div className="grid grid-cols- md:grid-cols-3 gap-8 items-center">
            <div
              className="col-span-1 flex flex-col gap-7"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div
                className="h-[15px] md:h-[100px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderBottom: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              ></div>
              <div
                className="p-7 flex flex-col gap-3 updown"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <img src="/images/vectors/people.svg" className="h-[50px] w-[50px]" />
                <div className="text-[18px] font-bold">For the culture...</div>
                <div className="text-[14px]">
                  Vengo Development and Cultural Association USA is a non-profit organization
                  founded on the principles of social justice, cultural diversity, and community
                  engagement.
                </div>
                <img src="/images/vectors/people.png" className="w-full" />
              </div>
              <div
                className="h-[15px] md:h-[100px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderTop: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              ></div>
            </div>
            <div
              className="col-span-1 flex flex-col gap-7"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div
                className="h-[15px] md:h-[30px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderBottom: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              ></div>
              <div
                className="p-7 rounded-xl flex flex-col gap-3 leftRight"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[14px]">
                  VEDCA-USA is an inclusive association nurturing a holistic frame for the promotion
                  of culture, performant and adaptive development, through values that promote
                  individual and collective prosperity in the civic life of the Vengo community
                </div>
                <img src="/images/vectors/associate.png" className="w-[90%] mx-auto" />
              </div>
              <div
                className="p-7 rounded-xl flex flex-col gap-3 bg-[#03194a] text-[#ffffff] relative"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[16px] font-medium mb-3">
                  As a non-profit, non-governmental organization, VEDCA-USA shall be non-partisan
                  and apolitical.
                </div>
                <Link href="/projects">
                  <div className="py-2 rounded-xl primaryBtnn w-[60%] text-sm flex justify-center items-center">
                    <span className="mr-2">See our projects</span>
                  </div>
                </Link>
                <img
                  src="/images/vectors/about-card.png"
                  className="w-[30%] absolute right-0 bottom-3 about-card-1"
                />
              </div>
              <div
                className="p-7 rounded-xl flex flex-col gap-3 updown"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[14px]">
                  Our team consists of passionate individuals from diverse backgrounds, united by a
                  shared vision of a better community for all.
                </div>
                <img src="/images/vectors/support-2.png" className="w-full" />
              </div>
              <div
                className="h-[15px] md:h-[30px] "
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderTop: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              ></div>
            </div>
            <div
              className="col-span-1 flex flex-col gap-7"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div
                className="h-[15px] md:h-[100px] "
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderBottom: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              ></div>
              <div
                className="p-7 flex flex-col gap-3 leftRight"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <img src="/images/vectors/support.svg" className="h-[50px] w-[50px]" />
                <div className="text-[18px] font-bold">Opportunies & support...</div>
                <div className="text-[14px]">
                  We strive to create opportunities for our communities and support sustainable
                  development initiatives. Our work is guided by the values of empathy, respect, and
                  transparency.
                </div>
                <img src="/images/vectors/support.png" className="w-full" />
              </div>
              <div
                className="h-[15px] md:h-[100px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderTop: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTopSection;
