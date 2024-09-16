'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaTwitter, FaFacebook, FaInstagram, FaArrowCircleRight } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState('#000');
  const [activeLink, setActiveLink] = useState('home');

  const router = useRouter();

  const handleNavToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath !== '/') {
      setLinkColor('#000');
    } else {
      setLinkColor('#000');
    }
  }, [router]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div className="fixed top-[35px] w-full shadow-md z-[100] px-5 md:px-0 bg-[#fff] ">
      <div className="flex justify-between items-center w-full h-full py-[2vh] md:py-4 px-0 md:px-[100px]">
        <Link href="/" className="">
          <img
            src="/images/logo.png"
            alt={process.env.APP_NAME}
            className="w-[130px] md:w-[130px]"
          />
        </Link>
        <div className="">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex gap-10 text-[16px] font-semibold"
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
              href="/services"
              className={activeLink === 'services' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('services')}
            >
              <li className="navLink">Services</li>
            </Link>
            <Link
              href="/contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('contact')}
            >
              <li className="navLink">Contact</li>
            </Link>
            <Link
              href="/blog"
              className={activeLink === 'blog' ? 'active' : ''}
              onClick={() => onUpdateActiveLink('blog')}
            >
              <li className="navLink">News & Articles</li>
            </Link>
          </ul>
          <div onClick={handleNavToggle} className="md:hidden">
            <AiOutlineMenu className="text-[#0005ca]" size={25} />
          </div>
        </div>
        <Link href="/contact" className="hidden md:flex">
          <div className="btnn primaryBtnn text-sm font-bold hover:border-b flex justify-center items-center">
            <span className="mr-2">Get in Touch</span>
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
              ? 'fixed left-0 top-0 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] p-10 '
              : 'fixed left-[-120%] top-0 ease-in duration-500 p-10'
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Link href="/">
                <img
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
              <p className="w-[85%] md:w-[90%] py-4 text-gray-900 leading-5">
                {process.env.APP_NAME}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link
                onClick={() => setNav(false)}
                href="/"
                className={activeLink === 'home' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/about"
                className={activeLink === 'about' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/projects"
                className={activeLink === 'projects' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/services"
                className={activeLink === 'services' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">Services</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/contact"
                className={activeLink === 'contact' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">Contact</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/blog"
                className={activeLink === 'blog' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">News & Articles</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/register"
                className={activeLink === 'register' ? 'active' : 'text-gray-900'}
              >
                <li className="py-4 text-sm">Register</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#000] text-center">Connect with us</p>
              <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-900">
                <Link
                  href="https://x.com/"
                  className="rounded-full shadow-md shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
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
  );
};

export default Navbar;
