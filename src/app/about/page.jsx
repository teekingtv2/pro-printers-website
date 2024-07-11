import AboutSecondSection from '@/components/about/AboutSecondSection';
import AboutThirdSection from '@/components/about/AboutThirdSection';
import AboutTopSection from '@/components/about/AboutTopSection';
import FooterJoin from '@/components/globals/FooterJoin';
import 'animate.css';

export const metadata = {
  title: 'About Us',
};

const AboutPage = () => {
  return (
    <>
      <AboutTopSection />
      <AboutSecondSection />
      <AboutThirdSection />
      <FooterJoin />
    </>
  );
};

export default AboutPage;
