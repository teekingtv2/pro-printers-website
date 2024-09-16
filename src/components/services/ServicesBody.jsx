/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import TrackVisibility from 'react-on-screen';

const ServicesBody = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className=" container py-[80px] px-5 md:px-0 md:py-[120px] flex flex-col gap-10 md:gap-[70px]">
        <div className="animate__slower animate__animated animate__zoomIn mx-auto flex flex-col items-center gap-4 md:gap-3">
          <p className="uppercase font-semibold text-[14px] text-[#0047AB]">Our Services</p>
          <h1 className="w-full md:w-[50%] text-[#000] text-[30px] md:text-[38px] font-semibold mb-5 leading-[35px] md:leading-[45px] text-center">
            Special Stuning<span className="text-[#0047AB]"> Services </span> we
            <span className="text-[#FFBA21]"> For Your </span> Business
          </h1>
          <p className="w-full md:w-[70%] text-center text-13px">
            We have all the equipment, know-how and every thing you will need to receive fast,
            reliable printing services with high quality results. Chat live with us today to get
            things moving.
          </p>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? 'animate__slower animate__animated animate__zoomIn ' : ''}>
              <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-[50px] md:gap-[50px]">
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      className=""
                    >
                      <g clip-path="url(#clip0_1033_1402)">
                        <path
                          d="M41.2383 1.58203H44.4023V7.91016H41.2383V1.58203Z"
                          fill="#2C3B73"
                        ></path>
                        <path
                          d="M9.59766 1.58203H12.7617V7.91016H9.59766V1.58203Z"
                          fill="#47568C"
                        ></path>
                        <path
                          d="M25.418 1.58203H28.582V7.91016H25.418V1.58203Z"
                          fill="#47568C"
                        ></path>
                        <path d="M27 1.58203H28.582V7.91016H27V1.58203Z" fill="#2C3B73"></path>
                        <path
                          d="M22.2539 41.1328H31.7461V54H22.2539V41.1328Z"
                          fill="#61729B"
                        ></path>
                        <path d="M27 41.1328H31.7461V54H27V41.1328Z" fill="#47568C"></path>
                        <path
                          d="M0 6.32812V37.9688L3.16406 41.1328H50.8359L54 37.9688V6.32812H0Z"
                          fill="#47568C"
                        ></path>
                        <path
                          d="M54 6.32812V37.9688L50.8359 41.1328H27V6.32812H54Z"
                          fill="#2C3B73"
                        ></path>
                        <path d="M0 37.9688H54V44.4023H0V37.9688Z" fill="#64E1DC"></path>
                        <path d="M27 37.9688H54V44.4023H27V37.9688Z" fill="#00C8C8"></path>
                        <path
                          d="M50.8359 9.49219V37.9688H43.4848L27 35.5323L17.5078 34.1402L3.16406 26.23V9.49219H50.8359Z"
                          fill="#E0F4FF"
                        ></path>
                        <path
                          d="M50.8359 9.49219V37.9688H43.4848L27 35.5323V9.49219H50.8359Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M34.9102 12.6562H47.6719V15.8203H34.9102V12.6562Z"
                          fill="#9ABADB"
                        ></path>
                        <path
                          d="M34.9102 18.9844H47.6719V22.1484H34.9102V18.9844Z"
                          fill="#9ABADB"
                        ></path>
                        <path
                          d="M41.2383 25.3125H47.6719V28.4766H41.2383V25.3125Z"
                          fill="#9ABADB"
                        ></path>
                        <path d="M6.43359 0H15.9258V3.16406H6.43359V0Z" fill="#61729B"></path>
                        <path d="M22.2539 0H31.7461V3.16406H22.2539V0Z" fill="#61729B"></path>
                        <path d="M38.0742 0H47.5664V3.16406H38.0742V0Z" fill="#47568C"></path>
                        <path
                          d="M14.3438 22.1484C11.7268 22.1484 9.59766 20.0193 9.59766 17.4023C9.59766 14.7854 11.7268 12.6562 14.3438 12.6562C16.9607 12.6562 19.0898 14.7854 19.0898 17.4023C19.0898 20.0193 16.9607 22.1484 14.3438 22.1484Z"
                          fill="#FFB64C"
                        ></path>
                        <path d="M27 0H31.7461V3.16406H27V0Z" fill="#47568C"></path>
                        <path
                          d="M43.4848 37.9687H3.16406V26.23L8.01562 21.4839L14.3438 27.812L23.8359 18.3198L43.4848 37.9687Z"
                          fill="#9CDD05"
                        ></path>
                        <path
                          d="M43.4848 37.9687H27V21.4839L43.4848 37.9687Z"
                          fill="#66BB00"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1033_1402">
                          <rect width="54" height="54" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Direct UV</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it's
                    worth investing in a quality graphic designer.
                  </p>
                </div>
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1033_1437)">
                        <path
                          d="M47.5664 12.6562V38.0742L44.4023 42.1558L36.4922 43.7378H17.5078L9.59766 42.1558V9.49219H44.4023L47.5664 12.6562Z"
                          fill="#E0F4FF"
                        ></path>
                        <path
                          d="M47.5664 12.6562V38.0742L44.4023 42.1558L36.4922 43.7378H27V9.49219H44.4023L47.5664 12.6562Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M47.5664 45.0669L44.4023 47.5664V54H9.59766V42.1558L17.5078 34.2456L23.8359 40.5737L33.3281 31.0815L44.4023 42.1558L47.5664 45.0669Z"
                          fill="#9CDD05"
                        ></path>
                        <path
                          d="M47.5664 45.0669L44.4023 47.5664V54H27V37.4097L33.3281 31.0815L44.4023 42.1558L47.5664 45.0669Z"
                          fill="#66BB00"
                        ></path>
                        <path
                          d="M23.8359 31.7461C21.219 31.7461 19.0898 29.6169 19.0898 27C19.0898 24.3831 21.219 22.2539 23.8359 22.2539C26.4529 22.2539 28.582 24.3831 28.582 27C28.582 29.6169 26.4529 31.7461 23.8359 31.7461Z"
                          fill="#FDBF00"
                        ></path>
                        <path
                          d="M44.4023 0V12.6562H9.59766C6.11719 12.6562 3.26953 9.80859 3.26953 6.32812C3.26953 4.58789 3.96538 3.00586 5.13625 1.86671C6.27539 0.695846 7.85742 0 9.59766 0H44.4023Z"
                          fill="#BBDCFF"
                        ></path>
                        <path d="M27 0H44.4023V12.6562H27V0Z" fill="#9ABADB"></path>
                        <path
                          d="M44.4023 0C40.9075 0 38.0742 2.83324 38.0742 6.32812C38.0742 9.82301 40.9075 12.6562 44.4023 12.6562V47.5664H50.7305V6.32812C50.7305 2.83324 47.8972 0 44.4023 0Z"
                          fill="#1CADB5"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1033_1437">
                          <rect width="54" height="54" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">UV DTF</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it's
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1033_1384)">
                        <path
                          d="M34.9102 0V9.70312L31.7461 12.8672H23.0449L19.0898 9.70312V0H34.9102Z"
                          fill="#FF641A"
                        ></path>
                        <path
                          d="M31.7461 12.8672H27V0H34.9102V9.70312L31.7461 12.8672Z"
                          fill="#F03800"
                        ></path>
                        <path
                          d="M41.6812 23.4038L28.772 49.2539H25.2281L12.3188 23.4038L13.458 22.6441C13.521 22.581 19.0899 18.7841 19.0899 14.4492V9.70312H34.9102V14.4492C34.9102 18.7841 40.479 22.581 40.5424 22.6441L41.6812 23.4038Z"
                          fill="#E0F4FF"
                        ></path>
                        <path
                          d="M41.6812 23.4038L28.772 49.2539H27V9.70312H34.9102V14.4492C34.9102 18.7841 40.479 22.581 40.5424 22.6441L41.6812 23.4038Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M27 22.3594C24.3736 22.3594 22.2539 24.479 22.2539 27.1055C22.2539 29.7319 24.3736 31.8516 27 31.8516C29.6264 31.8516 31.7461 29.7319 31.7461 27.1055C31.7461 24.479 29.6264 22.3594 27 22.3594Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M27 31.8516V22.3594C29.6264 22.3594 31.7461 24.479 31.7461 27.1055C31.7461 29.7319 29.6264 31.8516 27 31.8516Z"
                          fill="#9ABADB"
                        ></path>
                        <path
                          d="M25.418 30.2695H28.582V49.2539H25.418V30.2695Z"
                          fill="#BBDCFF"
                        ></path>
                        <path d="M27 30.2695H28.582V49.2539H27V30.2695Z" fill="#9ABADB"></path>
                        <path
                          d="M50.4771 30.4911C48.8321 42.103 38.7388 50.8359 27 50.8359C15.2613 50.8359 5.16801 42.103 3.52295 30.4911L6.65529 30.0479C8.07912 40.0781 16.8433 47.6718 27 47.6718C37.1568 47.6718 45.921 40.0781 47.3448 30.0479L50.4771 30.4911Z"
                          fill="#61729B"
                        ></path>
                        <path
                          d="M50.4771 30.4911C48.832 42.103 38.7388 50.8359 27 50.8359V47.6718C37.1567 47.6718 45.9209 40.0781 47.3448 30.0479L50.4771 30.4911Z"
                          fill="#47568C"
                        ></path>
                        <path
                          d="M8.01562 47.6719H45.9844V50.8359H8.01562V47.6719Z"
                          fill="#61729B"
                        ></path>
                        <path d="M27 47.6719H45.9844V50.8359H27V47.6719Z" fill="#47568C"></path>
                        <path d="M54 31.8516H44.4023V22.3594H54V31.8516Z" fill="#00C8C8"></path>
                        <path
                          d="M49.1484 54C46.5315 54 44.4023 51.8708 44.4023 49.2539C44.4023 46.637 46.5315 44.5078 49.1484 44.5078C51.7654 44.5078 54 46.637 54 49.2539C54 51.8708 51.7654 54 49.1484 54Z"
                          fill="#00C8C8"
                        ></path>
                        <path
                          d="M4.85156 54C2.23462 54 0 51.8708 0 49.2539C0 46.637 2.23462 44.5078 4.85156 44.5078C7.46851 44.5078 9.59766 46.637 9.59766 49.2539C9.59766 51.8708 7.46851 54 4.85156 54Z"
                          fill="#64E1DC"
                        ></path>
                        <path d="M9.59766 31.8516H0V22.3594H9.59766V31.8516Z" fill="#64E1DC"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1033_1384">
                          <rect width="54" height="54" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Fabric DTF</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it's
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1033_1369)">
                        <path d="M44.4023 19.0898H54V25.418H44.4023V19.0898Z" fill="#2C3B73"></path>
                        <path
                          d="M44.4023 6.43359H54V12.7617H44.4023V6.43359Z"
                          fill="#47568C"
                        ></path>
                        <path d="M0 19.0898H9.59766V25.418H0V19.0898Z" fill="#47568C"></path>
                        <path d="M0 6.43359H9.59766V12.7617H0V6.43359Z" fill="#61729B"></path>
                        <path
                          d="M50.7305 38.0742V45.9844C50.7305 48.6219 48.5622 50.7305 45.9844 50.7305C43.358 50.7305 38.0742 48.6104 38.0742 45.9844V38.0742H50.7305Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M47.5664 15.9258V28.582H6.43359V15.9258L9.59766 12.7617H44.4023L47.5664 15.9258Z"
                          fill="#FF641A"
                        ></path>
                        <path
                          d="M47.5664 15.9258V28.582H27V12.7617H44.4023L47.5664 15.9258Z"
                          fill="#F03800"
                        ></path>
                        <path
                          d="M41.2383 12.7617V35.8277L33.3281 43.7378H17.5078L12.7617 35.8277V12.7617H41.2383Z"
                          fill="#E0F4FF"
                        ></path>
                        <path
                          d="M41.2383 12.7617V35.8277L33.3281 43.7378H27V12.7617H41.2383Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M45.9844 50.7305H19.0898C15.6094 50.7305 12.7617 47.8828 12.7617 44.4023V35.8276L17.5078 31.0815L23.8359 37.4097L33.3281 27.9175L41.2383 35.8276V45.9844C41.2383 48.6104 43.358 50.7305 45.9844 50.7305Z"
                          fill="#9CDD05"
                        ></path>
                        <path
                          d="M23.8359 31.7461C21.219 31.7461 19.0898 29.6169 19.0898 27C19.0898 24.3831 21.219 22.2539 23.8359 22.2539C26.4529 22.2539 28.582 24.3831 28.582 27C28.582 29.6169 26.4529 31.7461 23.8359 31.7461Z"
                          fill="#FDBF00"
                        ></path>
                        <path
                          d="M45.9844 50.7305H27V34.2456L33.3281 27.9175L41.2383 35.8276V45.9844C41.2383 48.6104 43.358 50.7305 45.9844 50.7305Z"
                          fill="#66BB00"
                        ></path>
                        <path
                          d="M6.43359 3.26953H47.5664V15.9258H6.43359V3.26953Z"
                          fill="#64E1DC"
                        ></path>
                        <path d="M27 3.26953H47.5664V15.9258H27V3.26953Z" fill="#00C8C8"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1033_1369">
                          <rect width="54" height="54" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Large Format</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it's
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      className=""
                    >
                      <g clip-path="url(#clip0_1033_1402)">
                        <path
                          d="M41.2383 1.58203H44.4023V7.91016H41.2383V1.58203Z"
                          fill="#2C3B73"
                        ></path>
                        <path
                          d="M9.59766 1.58203H12.7617V7.91016H9.59766V1.58203Z"
                          fill="#47568C"
                        ></path>
                        <path
                          d="M25.418 1.58203H28.582V7.91016H25.418V1.58203Z"
                          fill="#47568C"
                        ></path>
                        <path d="M27 1.58203H28.582V7.91016H27V1.58203Z" fill="#2C3B73"></path>
                        <path
                          d="M22.2539 41.1328H31.7461V54H22.2539V41.1328Z"
                          fill="#61729B"
                        ></path>
                        <path d="M27 41.1328H31.7461V54H27V41.1328Z" fill="#47568C"></path>
                        <path
                          d="M0 6.32812V37.9688L3.16406 41.1328H50.8359L54 37.9688V6.32812H0Z"
                          fill="#47568C"
                        ></path>
                        <path
                          d="M54 6.32812V37.9688L50.8359 41.1328H27V6.32812H54Z"
                          fill="#2C3B73"
                        ></path>
                        <path d="M0 37.9688H54V44.4023H0V37.9688Z" fill="#64E1DC"></path>
                        <path d="M27 37.9688H54V44.4023H27V37.9688Z" fill="#00C8C8"></path>
                        <path
                          d="M50.8359 9.49219V37.9688H43.4848L27 35.5323L17.5078 34.1402L3.16406 26.23V9.49219H50.8359Z"
                          fill="#E0F4FF"
                        ></path>
                        <path
                          d="M50.8359 9.49219V37.9688H43.4848L27 35.5323V9.49219H50.8359Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M34.9102 12.6562H47.6719V15.8203H34.9102V12.6562Z"
                          fill="#9ABADB"
                        ></path>
                        <path
                          d="M34.9102 18.9844H47.6719V22.1484H34.9102V18.9844Z"
                          fill="#9ABADB"
                        ></path>
                        <path
                          d="M41.2383 25.3125H47.6719V28.4766H41.2383V25.3125Z"
                          fill="#9ABADB"
                        ></path>
                        <path d="M6.43359 0H15.9258V3.16406H6.43359V0Z" fill="#61729B"></path>
                        <path d="M22.2539 0H31.7461V3.16406H22.2539V0Z" fill="#61729B"></path>
                        <path d="M38.0742 0H47.5664V3.16406H38.0742V0Z" fill="#47568C"></path>
                        <path
                          d="M14.3438 22.1484C11.7268 22.1484 9.59766 20.0193 9.59766 17.4023C9.59766 14.7854 11.7268 12.6562 14.3438 12.6562C16.9607 12.6562 19.0898 14.7854 19.0898 17.4023C19.0898 20.0193 16.9607 22.1484 14.3438 22.1484Z"
                          fill="#FFB64C"
                        ></path>
                        <path d="M27 0H31.7461V3.16406H27V0Z" fill="#47568C"></path>
                        <path
                          d="M43.4848 37.9687H3.16406V26.23L8.01562 21.4839L14.3438 27.812L23.8359 18.3198L43.4848 37.9687Z"
                          fill="#9CDD05"
                        ></path>
                        <path
                          d="M43.4848 37.9687H27V21.4839L43.4848 37.9687Z"
                          fill="#66BB00"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1033_1402">
                          <rect width="54" height="54" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">
                    Display Stand & PoSM
                  </h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it's
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1033_1369)">
                        <path d="M44.4023 19.0898H54V25.418H44.4023V19.0898Z" fill="#2C3B73"></path>
                        <path
                          d="M44.4023 6.43359H54V12.7617H44.4023V6.43359Z"
                          fill="#47568C"
                        ></path>
                        <path d="M0 19.0898H9.59766V25.418H0V19.0898Z" fill="#47568C"></path>
                        <path d="M0 6.43359H9.59766V12.7617H0V6.43359Z" fill="#61729B"></path>
                        <path
                          d="M50.7305 38.0742V45.9844C50.7305 48.6219 48.5622 50.7305 45.9844 50.7305C43.358 50.7305 38.0742 48.6104 38.0742 45.9844V38.0742H50.7305Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M47.5664 15.9258V28.582H6.43359V15.9258L9.59766 12.7617H44.4023L47.5664 15.9258Z"
                          fill="#FF641A"
                        ></path>
                        <path
                          d="M47.5664 15.9258V28.582H27V12.7617H44.4023L47.5664 15.9258Z"
                          fill="#F03800"
                        ></path>
                        <path
                          d="M41.2383 12.7617V35.8277L33.3281 43.7378H17.5078L12.7617 35.8277V12.7617H41.2383Z"
                          fill="#E0F4FF"
                        ></path>
                        <path
                          d="M41.2383 12.7617V35.8277L33.3281 43.7378H27V12.7617H41.2383Z"
                          fill="#BBDCFF"
                        ></path>
                        <path
                          d="M45.9844 50.7305H19.0898C15.6094 50.7305 12.7617 47.8828 12.7617 44.4023V35.8276L17.5078 31.0815L23.8359 37.4097L33.3281 27.9175L41.2383 35.8276V45.9844C41.2383 48.6104 43.358 50.7305 45.9844 50.7305Z"
                          fill="#9CDD05"
                        ></path>
                        <path
                          d="M23.8359 31.7461C21.219 31.7461 19.0898 29.6169 19.0898 27C19.0898 24.3831 21.219 22.2539 23.8359 22.2539C26.4529 22.2539 28.582 24.3831 28.582 27C28.582 29.6169 26.4529 31.7461 23.8359 31.7461Z"
                          fill="#FDBF00"
                        ></path>
                        <path
                          d="M45.9844 50.7305H27V34.2456L33.3281 27.9175L41.2383 35.8276V45.9844C41.2383 48.6104 43.358 50.7305 45.9844 50.7305Z"
                          fill="#66BB00"
                        ></path>
                        <path
                          d="M6.43359 3.26953H47.5664V15.9258H6.43359V3.26953Z"
                          fill="#64E1DC"
                        ></path>
                        <path d="M27 3.26953H47.5664V15.9258H27V3.26953Z" fill="#00C8C8"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1033_1369">
                          <rect width="54" height="54" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Gift Items</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it's
                    worth investing in a quality graphic designer.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default ServicesBody;
