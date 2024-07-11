import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer w-[100%] py-10 ">
      <div className="max-w-[1050px] mx-auto text-center text-[#fff]">
        <div className="w-[100%] flex justify-center">
          <img src="/images/logo.png" alt="" className="max-w-[90px] " />
        </div>
        <div className="text-[13px] company-name my-2">
          Vengo Development & Cultural Association USA (VEDCAUSA)
        </div>
        <div className="text-[12px] mb-3 text-[#ffffffd7]">
          Copyright &copy; 2023, VEDCAUSA. All rights reserved
        </div>
        <div className="social-icon flex gap-2 justify-center">
          <Link href="https://www.twitter.com/globaltriumphng">
            <span>
              <FaTwitter />
            </span>
          </Link>
          <Link href="https://www.youtube.com/@globaltriumphng">
            <span>
              <FaYoutube />
            </span>
          </Link>
          <Link href="https://www.facebook.com/globaltriumphng">
            <span>
              <FaFacebook />
            </span>
          </Link>
          <Link href="https://www.instagram.com/globaltriumphng">
            <span>
              <FaInstagram />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
