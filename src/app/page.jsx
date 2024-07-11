'use client';

import HomeGallery from '@/components/home/HomeGallery';
import HomeBanner from '@/components/home/HomeBanner';
import HomeBannerBottom from '@/components/home/HomeBannerBottom';
import HomeDonate from '@/components/home/HomeDonate';
import FooterJoin from '@/components/globals/FooterJoin';

const HomePage = () => {
  return (
    <>
      {/* <HomeBannerSection /> */}
      {/* <BannerBottomSection /> */}
      {/* <AboutSection /> */}
      <HomeBanner />
      <HomeBannerBottom />
      <HomeGallery />
      <HomeDonate />
      <FooterJoin />
    </>
  );
};

export default HomePage;
