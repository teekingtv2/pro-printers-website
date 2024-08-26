/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const HomeChapters = () => {
  return (
    <div className="flex w-full h-full colour-banner text-[#03194a] px-2 md:px-[100px] py-10 md:py-[100px] mx-auto">
      <div className="bg-[#ffffff] w-full rounded-xl md:rounded-[50px]">
        <div className="py-[70px] md:pt-[100px] md:pb-[0px] container px-3 md:px-[70px] animate__slower animate__animated animate__zoomIn">
          <div className="md:w-[60%] mx-auto text-[24px] font-bold text-center">
            VEDCA Chapters and Branches
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
                className="p-7 flex flex-col gap-3 banner updown text-[#ffffff]"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">VEDCA DMV Branch</div>
                <div className="text-[14px]">
                  Brief description, Chapter Exco Team, meeting date of the month
                </div>
                <img
                  // src="/images/vectors/health.png"
                  src="/images/events/dmv-home.jpg"
                  alt="Vengo Development & Cultural Association"
                  className="w-full"
                />
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
                <div className="text-[18px] font-bold">VEDCA Texas Branch</div>
                <div className="text-[14px]">
                  Brief description, Chapter Exco Team, meeting date of the month
                </div>
                <img
                  // src="/images/vectors/community.png"
                  src="/images/events/texas-branch.jpg"
                  alt="Vengo Development & Cultural Association"
                  className="w-[90%] mx-auto"
                />
              </div>
              <div
                className="p-7 h-[120px] rounded-xl flex flex-col gap-3 bg-[#03194a] text-[#ffffff] relative"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <img
                  src="/images/vectors/about-card.png"
                  alt="Vengo Development & Cultural Association"
                  className="w-[30%] absolute left-[35%] bottom-3 about-card-1"
                />
              </div>
              <div
                className="p-7 rounded-xl flex flex-col gap-3 updown"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">VEDCA Tri-State Branch</div>
                <div className="text-[14px]">
                  Brief description, Chapter Exco Team, meeting date of the month
                </div>
                <img
                  // src="/images/vectors/scholarship.png"
                  src="/images/events/12.jpg"
                  alt=""
                  className="w-full"
                />
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
                className="p-7 flex flex-col gap-3 leftRight banner text-[#ffffff]"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">VENMCUDA: Home Base</div>
                <div className="text-[14px]">
                  Brief description, Chapter Exco Team, meeting date of the month
                </div>
                <img
                  // src="/images/vectors/environmental.png"
                  src="/images/events/6.jpg"
                  alt=""
                  className="w-full"
                />
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

export default HomeChapters;
