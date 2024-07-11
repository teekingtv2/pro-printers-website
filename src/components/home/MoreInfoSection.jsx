import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';
import { FaArrowCircleRight } from 'react-icons/fa';

const MoreInfoSection = () => {
  return (
    <div className="flex bg-white w-full h-full">
      <div className="py-10 md:py-[90px] container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-5">
        <div className="col-span-1 flex justify-center items-center">
          <img src="/images/banner2.png" alt="" className="w-[300px] md:w-[500px]" />
        </div>
        <div className="col-span-1 text-left">
          <div className="md:max-w-[80%]">
            <div
              className=" text-[30px] md:text-[35px] mb-5 font-bold"
              style={{ lineHeight: '1.2em' }}
            >
              Get <span className="textBlueGradient">Involved</span>
            </div>
            <div className="text-[#01081a] text-[16px] my-2">
              <div className="text-[#01081a] text-[17px] font-semibold">
                Join us in our mission to create positive change! You can:
              </div>
              <ul className=" leading-[1.8rem] mt-5">
                <li className="flex gap-2 items-center mb-1">
                  <BiRightArrow className="text-[#FBAD18]" />{' '}
                  <span>Donate to support our programs and projects</span>
                </li>
                <li className="flex gap-2 items-center mb-1">
                  <BiRightArrow className="text-[#FBAD18]" />{' '}
                  <span>Volunteer your time and skills</span>
                </li>
                <li className="flex gap-2 items-center mb-1">
                  <BiRightArrow className="text-[#FBAD18]" />{' '}
                  <span>Partner with us for collaborative initiatives</span>
                </li>
                <li className="flex gap-2 items-center ">
                  <BiRightArrow className="text-[#FBAD18]" />{' '}
                  <span>Spread the word about our work and mission</span>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/contact" className="w-[100px] mt-10">
            <div className="btnn primaryBtnn text-md font-bold hover:border-b flex justify-center items-center">
              <span className="mr-2">View our gallery</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoSection;
