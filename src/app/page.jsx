import Navbar from '@/components/globals/navbar/Navbar';
import HomeBanner from '@/components/home/section-1-banner/HomeBanner';
import HomeBannerSection from '@/components/home/section-1-banner/HomeBannerSection';
import HomeStats from '@/components/home/section-2-stats/HomeStats';
import HomeServices from '@/components/home/section-3-services/HomeServices';
import HomeWhyChooseUs from '@/components/home/section-4-why-us/HomeWhyChooseUs';
import Image from 'next/image';
// import img from "../../public/images/BG-Shade.png"

const HomePage = () => {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: "url('../../images/home-banner-bg.png') !important",
          backgroundColor: 'red !important',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-[100vw] flex flex-col p-0"
      > */}
      <HomeBannerSection />
      {/* <Navbar />
        <HomeBanner /> */}
      {/* </div> */}
      {/* <HomeStats />
      <HomeServices />
      <HomeWhyChooseUs /> */}
    </>
  );
};

export default HomePage;
