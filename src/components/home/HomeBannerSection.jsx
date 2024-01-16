'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomeBannerSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    'Software Solutions',
    'Web App Development',
    'Mobile App Development',
    'Project Management',
    'Motion Graphics Design',
    'UI/UX Design',
  ];
  const [text, setText] = useState('');
  const period = 500;
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <div className="flex h-[92vh] md:h-[90vh]">
      <div className="w-full h-full mx-auto px-4 flex flex-col justify-center items-center pb-12 md:pb-2">
        <h1 className="uppercase text-center mb-0 textBlueGradient text-[70px]">Jaflah</h1>
        <h2 className="text-[#e55151] text-[21px] text-center leading-6 md:mt-[-11px]">
          <span className="text-white bg-black">Software Development Company</span>
        </h2>
        <h2 className="text-gray-400 text-[17px] md:text-[19px] my-2">
          Best hands in <span className="text-white">{text}</span>
        </h2>
        <button>
          <Link href="/about">What we do</Link>
        </button>
        {/* <img src="/images/team/piafo.webp" alt="" height={300} width={300} /> */}
      </div>
    </div>
  );
};

export default HomeBannerSection;
