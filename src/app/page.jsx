'use client';

import HomeBannerBottom from '@/components/home/HomeBannerBottom';
import HomeBanner from '@/components/home/HomeBanner';
import HomeHow from '@/components/home/HomeHow';
import HomeServicesScroll from '@/components/home/HomeServicesScroll';
import HomeTopCategories from '@/components/home/HomeTopCategories';
import HomeReadAboutUs from '@/components/home/HomeReadAboutUs';
import HomeServices from '@/components/home/HomeServices';
import HomeBlog from '@/components/home/HomeBlog';
import 'animate.css';

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeBannerBottom />
      <HomeHow />
      <HomeServicesScroll />
      <HomeTopCategories />
      <HomeReadAboutUs />
      <HomeServices />
      <HomeBlog />
    </>
  );
};

export default HomePage;
