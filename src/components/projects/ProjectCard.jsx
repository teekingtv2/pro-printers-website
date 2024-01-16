/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';
import SingleProjectFull from './SingleProjectFull';

const ProjectCard = ({ proj }) => {
  const [more, setMore] = useState(false);
  return (
    <>
      <div
        className={
          proj.id === 1 ||
          proj.id === 4 ||
          proj.id === 7 ||
          proj.id === 10 ||
          proj.id === 13 ||
          proj.id === 16
            ? `relative shadow-gray-400 w-[350px] h-[300px] md:w-[300px] md:h-[300px] group px-5 py-12 bg-[#FBAD18] flex justify-center items-center rounded-xl`
            : proj.id === 2 ||
              proj.id === 5 ||
              proj.id === 8 ||
              proj.id === 11 ||
              proj.id === 14 ||
              proj.id === 17
            ? `relative shadow-gray-400 w-[350px] h-[300px] md:w-[300px] md:h-[300px] group px-5 py-12 bg-[#017EC1] flex justify-center items-center rounded-xl`
            : `relative shadow-gray-400 w-[350px] h-[300px] md:w-[300px] md:h-[300px] group px-5 py-12 bg-[#fa8a8a] flex justify-center items-center rounded-xl`
        }
      >
        <img
          src={proj.img}
          alt="Jaflaf Software Development Company"
          className="rounded-xl w-[100%] h-[100%] group-hover:scale-105 ease-in duration-300"
        />
        <Link href={proj.url} target="__blank">
          <div
            className="hidden group-hover:flex ease-in duration-500 absolute bottom-[10px] left-[20px] translate-y-[-20%] bg-white rounded-xl p-4 flex-col items-start "
            //   onClick={() => setMore(true)}
          >
            <p className="text-[18px] font-medium mb-0 p-0 text-[#222222] ">{proj.title}</p>
            <p className="text-[#444444] text-sm m-0 p-0">{proj.tool}</p>
          </div>
        </Link>
      </div>
      {/* {more ? <SingleProjectFull setMore={setMore} proj={proj} /> : null} */}
    </>
  );
};

export default ProjectCard;
