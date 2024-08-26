'use client';

import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

const HomeGallery = () => {
  return (
    // <div className="flex home-gallery w-full h-full mt-[-120px]">
    <div className="flex bg-[#e9faef] w-full h-full">
      <div className="py-[70px] md:py-[100px] container pb-[50px] grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-0 px-5">
        <div className="col-span-4 text-left ">
          <div className="md:max-w-[90%] h-full flex flex-col justify-center text-[#03194a]">
            <div className="font-extrabold text-[30px] md:text-[40px] mb-3 md:mb-10 leading-[2.5rem] md:leading-[3rem] z-30">
              Stay connected with the community
            </div>
            <div className="font-norma md:font-semibold text-15px md:text-[19px] my-3">
              Our mission is to empower our communities through health, education, cultural
              exchange, and sustainable development. We believe in the power of collaboration and
              inclusivity, and we are dedicated to creating positive change in the world.
            </div>
            <Link href="#" className="max-w-[220px] mt-5">
              <div className="btnn primaryBtnn text-md font-bold hover:border-b flex justify-center items-center">
                <span className="mr-2">View our gallery</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[80%] ms-auto md:w-[100%] col-span-4 md:col-span-2 grid grid-cols-3 home-gallery-card rounded-lg dancingSlide">
          <Link href="/images/events/4.jpg" className="col-span-1">
            <img
              src="/images/events/4.jpg"
              alt=""
              className="w-[100%] h-[150px] md:h-[150px]"
              style={{ borderTopLeftRadius: '13px' }}
            />
          </Link>
          <Link href="/images/events/2.jpg" className="col-span-1">
            <img src="/images/events/2.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/1.jpg" className="col-span-1">
            <img
              src="/images/events/1.jpg"
              alt=""
              className="w-[100%] h-[150px] md:h-[150px]"
              style={{ borderTopRightRadius: '13px' }}
            />
          </Link>
          <Link href="/images/events/3.jpg" className="col-span-1">
            <img src="/images/events/3.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/5.jpg" className="col-span-1">
            <img src="/images/events/5.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/6.jpg" className="col-span-1">
            <img src="/images/events/6.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/7.jpg" className="col-span-1">
            <img src="/images/events/7.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/8.jpg" className="col-span-1">
            <img src="/images/events/8.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/9.jpg" className="col-span-1">
            <img src="/images/events/9.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/10.jpg" className="col-span-1">
            <img
              src="/images/events/10.jpg"
              alt=""
              className="w-[100%] h-[150px] md:h-[150px]"
              style={{ borderBottomLeftRadius: '13px' }}
            />
          </Link>
          <Link href="/images/events/11.jpg" className="col-span-1">
            <img src="/images/events/11.jpg" alt="" className="w-[100%] h-[150px] md:h-[150px]" />
          </Link>
          <Link href="/images/events/12.jpg" className="col-span-1">
            <img
              src="/images/events/12.jpg"
              alt=""
              className="w-[100%] h-[150px] md:h-[150px]"
              style={{ borderBottomRightRadius: '13px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
