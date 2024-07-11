'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaTwitter, FaFacebook, FaInstagram, FaArrowCircleRight } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState('#92a4ff');
  const [activeLink, setActiveLink] = useState('home');

  const router = useRouter();

  const handleNavToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath !== '/') {
      setLinkColor('#92a4ff');
    } else {
      setLinkColor('#92a4ff');
    }
  }, [router]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Head>
        <meta property="og:title" content="Software Development in Lagos" />
        <meta
          name="description"
          content="Welcome to the Vengo Development & Cultural Association USA (VEDCAUSA), USA chapter - an NGO organisation representing the good Nigerians outside of our dear motherland"
        />
        <meta
          name="keywords"
          content="Vengo Development & Cultural Association (VEDCA), Vengo Development & Cultural Association USA (VEDCAUSA), Vengo Development & Cultural Association USA (VEDCA-USA), VEDCAUSA, VEDCA, VEDCA non-governmental organization, VEDCA-USA,"
        />
      </Head>
      <div className="w-full shadow-lg z-[100] px-2 md:px-0 bg-[#060F3A]">
        <div className="flex justify-between items-center max-w-[1150px] mx-auto w-full h-full py-2 md:py-3">
          <Link href="/">
            <img src="/images/logo.png" alt="VEDCA USA" className="w-[50px] md:w-[70px]" />
          </Link>
          <div>
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex gap-10 text-[16px] font-medium"
            >
              <Link
                href="/"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('home')}
              >
                <li className="navLink">Home</li>
              </Link>
              <Link
                href="/about"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('about')}
              >
                <li className="navLink">About</li>
              </Link>
              <Link
                href="/projects"
                className={activeLink === 'projects' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('projects')}
              >
                <li className="navLink">Projects</li>
              </Link>
              <Link
                href="/contact"
                className={activeLink === 'contact' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('contact')}
              >
                <li className="navLink">Contact</li>
              </Link>
              <Link
                href="/donate"
                className={activeLink === 'donate' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('donate')}
              >
                <li className="navLink">Donate</li>
              </Link>
            </ul>
            <div onClick={handleNavToggle} className="md:hidden">
              <AiOutlineMenu className="text-gray-100" size={25} />
            </div>
          </div>
          <Link href="/register" className="hidden md:flex">
            <div className="btnn primaryBtnn text-sm font-bold hover:border-b flex justify-center items-center">
              <span className="mr-2">Register with us</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu */}
        <div
          className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}
          style={{ zIndex: '11111' }}
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0b0d13] p-10 '
                : 'fixed left-[-100%] top-0 ease-in duration-500 p-10'
            }
          >
            <div>
              <div className="flex w-full justify-between items-center">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt={`${process.env.APP_NAME}`}
                    width="75"
                    height="35"
                  />
                </Link>
                <div
                  onClick={handleNavToggle}
                  className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer text-gray-300"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-gray-200 leading-5">
                  Vengo Development and Cultural Association USA
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link
                  onClick={() => setNav(false)}
                  href="/"
                  className={activeLink === 'home' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/about"
                  className={activeLink === 'about' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/projects"
                  className={activeLink === 'projects' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/contact"
                  className={activeLink === 'contact' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">Contact</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/donate"
                  className={activeLink === 'donate' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">Donate</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/register"
                  className={activeLink === 'register' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">Register</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#86c2f3] text-center">
                  Connect with us
                </p>
                <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-200">
                  <Link
                    href="https://x.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="https://instagram.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://facebook.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
