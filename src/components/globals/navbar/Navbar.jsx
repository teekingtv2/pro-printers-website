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
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [activeLink, setActiveLink] = useState('home');

  const router = useRouter();

  const handleNavToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath !== '/') {
      setLinkColor('#ecf0f3');
    } else {
      setLinkColor('#1f2937');
    }
  }, [router]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Head>
        <meta property="og:title" content="Software Development in Lagos" />
        <link
          rel="icon"
          href="/public/images/logo.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta
          name="description"
          content="Jaflah Software Development Company is a Nigerian business software company that specializes in delivering top notch software development solutions to businesses and individuals in Ngeria and beyond. We are dealers in software development services located in Lagops, Nigeria."
        />
        <meta
          name="keywords"
          content="Software development in Lagos, app development schools in Lagos, app developers in Ngeria, software development in Nigeria, web development in Lagos, mobile app development, mobile app developers, Jaflah Software Development Company, code expert in Nigeria, code geeks in Nigeria, UI UX design, web designers in Lagos, web designers, software developers"
        />
      </Head>
      <div className="w-full h-[8vh] md:h-[10vh] shadow-lg z-[100] px-2 md:px-0">
        <div className="flex justify-between items-center max-w-[1340px] mx-auto w-full h-full">
          <Link href="/">
            <Image src="/images/logo.png" alt="Mudashir Tunde" width="125" height="50" />
          </Link>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <Link
                href="/"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('home')}
              >
                <li className="ml-10 text-sm font-bold uppercase navLink">Home</li>
              </Link>
              <Link
                href="/about"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('about')}
              >
                <li className="ml-10 text-sm font-bold uppercase navLink">About</li>
              </Link>
              <Link
                href="/services"
                className={activeLink === 'services' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('services')}
              >
                <li className="ml-10 text-sm font-bold uppercase navLink">Services</li>
              </Link>
              <Link
                href="/projects"
                className={activeLink === 'projects' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('projects')}
              >
                <li className="ml-10 text-sm font-bold uppercase navLink">Projects</li>
              </Link>
            </ul>
            <div onClick={handleNavToggle} className="md:hidden">
              <AiOutlineMenu className="text-white" size={25} />
            </div>
          </div>
          <Link href="/contact" className="hidden md:flex">
            <div className="btnn primaryBtnn text-sm font-bold hover:border-b flex justify-center items-center">
              <span className="mr-2">Get Started</span>
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
                  <Image src="/images/logo.png" alt="Mudashir Tunde" width="87" height="35" />
                </Link>
                <div
                  onClick={handleNavToggle}
                  className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer text-gray-200"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-gray-200 leading-5">
                  Let's build something legendary together
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
                  href="/services"
                  className={activeLink === 'services' ? 'active' : 'text-gray-200'}
                >
                  <li className="py-4 text-sm">Services</li>
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
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#FBAD18] text-center">
                  Connect with us
                </p>
                <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-200">
                  <Link
                    href="https://x.com/jaflah03"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="https://instagram.com/jaflah03"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://facebook.com/jaflah03"
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
