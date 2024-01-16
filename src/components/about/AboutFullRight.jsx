import Link from 'next/link';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselSettings } from '@/utils/carousel-setting';
import TeamCard from './TeamCard';
import { teamData } from '@/data/data';

const AboutFullRight = ({ setMore }) => {
  return (
    <div className="col-span-6 text-start py-8 md:py-12 ps3 pe-4 md:ps-10 md:pe-5">
      <div className="w-full flex justify-end">
        <div
          className="md:invisible md:h-0 md:w-0 text-xl text-white py-2 px-4 bg-[#e55151] rounded-[50%] cursor-pointer fixed"
          onClick={() => setMore(false)}
        >
          X
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-[#FC5B56] text-[18px] leading-6 my-2">
          <span className="textBlueGradient">About</span>{' '}
          <span className="text-white">Our Company</span>
        </h2>
        <div
          style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
          className="w-full mt-2 mb-6"
        ></div>
        <p className="text-[14px]">
          Jaflah Software Development Company is a Nigerian business software company that
          specializes in delivering top notch software development solutions to businesses and
          individuals in the country and beyond.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-[#FC5B56] text-[18px] leading-6 my-2">
          <span className="textBlueGradient">Our</span>{' '}
          <span className="text-white">Specialty</span>
        </h2>
        <div
          style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
          className="w-full mt-2 mb-6"
        ></div>
        <p className="text-[14px]">
          Our specialty spans across delivering various technology solutions that include but not
          limited to <span className="text-[#fff]">web</span>,
          <span className="text-[#fff]"> mobile</span> and
          <span className="text-[#fff]"> desktop app development</span>,
          <span className="text-[#fff]"> web management & maintenance</span>,
          <span className="text-[#fff]"> visual experience</span> rending,
          <span className="text-[#fff]"> graphics </span> design and
          <span className="text-[#fff]"> data analysis</span> &
          <span className="text-[#fff]"> visualization</span> for African and global markets. We
          major in transforming concepts and ideas into stunning visual representations that bridge
          the gap between imagination and reality. Our commitment to innovation, precision, and
          creativity sets us apart, enabling us to deliver captivating technical solutions that
          resonate with diverse industries.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-[#FC5B56] text-[18px] leading-6 my-2">
          <span className="textBlueGradient">Why</span>{' '}
          <span className="text-[#fff]">Choose Us</span>
        </h2>
        <div
          style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
          className="w-full mt-2 mb-6"
        ></div>
        <ul className="font-light leading-[1.8rem]">
          <li className="flex gap-2 items-center">
            <BiRightArrow className="text-[#FBAD18]" /> <span>Innovative, Quality Delivery</span>
          </li>
          <li className="flex gap-2 items-center">
            <BiRightArrow className="text-[#FBAD18]" /> <span>Collaboration with Clients</span>
          </li>
          <li className="flex gap-2 items-center">
            <BiRightArrow className="text-[#FBAD18]" /> <span>Expert, Realiable Team</span>
          </li>
          <li className="flex gap-2 items-center">
            <BiRightArrow className="text-[#FBAD18]" /> <span>Client-Centric Approach</span>
          </li>
          <li className="flex gap-2 items-center">
            <BiRightArrow className="text-[#FBAD18]" /> <span>Competitive Advantage</span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-[#FC5B56] text-[18px] leading-6 my-2">
          <span className="textBlueGradient">Meet The</span>{' '}
          <span className="text-[#fff]">Jaflah Team</span>
        </h2>
        <div
          style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
          className="w-full mt-2 mb-6"
        ></div>
        <p className="text-[14px] mb-3">
          Here are the incredible people putting us on the global map
        </p>
        <div className=" grid grid-cols-4 w-full gap-5">
          {teamData && teamData.map((team) => <TeamCard team={team} key={team.id} />)}
        </div>
      </div>

      <div className="mb-10">
        <div
          style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
          className="w-full mt-2 mb-6"
        ></div>
        <div className="flex justify-between items-center">
          <Link href="/services">
            <button>Services</button>
          </Link>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutFullRight;
