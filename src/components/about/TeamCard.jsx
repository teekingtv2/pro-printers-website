/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ team }) => {
  return (
    <div
      className="col-span-2 my-1 md:my-0 w-full flex flex-col justify-center items-center px-2 py-3 boxShadow-sm rounded-lg"
      style={{ boxShadow: '3px 3px 10px #000000', border: '1px dotted #aaa' }}
    >
      <Link href={`/images/team/${team.img}`}>
        <img
          src={`/images/team/${team.img}`}
          alt="Jaflah Software Development Company"
          className="w-[100px] h-[100px] mb-2 rounded-[50%]"
        />
      </Link>
      <div className="text-[14px] p-0 m-0">{team.name}</div>
      <div className="text-[11px] md:text-[11px] p-0 m-0">{team.post}</div>
      <div className="px-5 pt-[9px] md:pt-3 w-full flex justify-center items-center gap-4 rounded-lg">
        <Link href={team.linkedin} className="text-white" target="__blank">
          <FaLinkedin size={18} className="text-[#FC5B56]" />
        </Link>
        <Link href={team.instagram} className="text-white" target="__blank">
          <FaInstagram size={18} className="text-[#FC5B56]" />
        </Link>
        <Link href={team.x} className="text-white" target="__blank">
          <FaTwitter size={18} className="text-[#FC5B56]" />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
