/* eslint-disable @next/next/no-img-element */
'use client';

const AboutThirdSection = () => {
  return (
    <div className="flex w-full h-full bg-[#ffffff] text-[#ffffff]">
      <div className="pt-10 pb-5 md:pt-[100px] container ">
        <div className="text-[30px] font-bold text-center mb-6 text-[#060F3A]">Our Programs</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-5 md:px-0 animate__slower animate__animated animate__zoomIn">
          <div
            className="col-span-1 banner rounded-lg boxShadow-sm"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/development.png" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-medium my-3">Sustainable Development</div>
            <div className="text-[14px]">
              We support community-led initiatives and projects focused on health, environmental
              conservation, renewable energy, and sustainable livelihoods.
            </div>
          </div>
          <div
            className="col-span-1 banner rounded-lg boxShadow-sm"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/education.png" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-medium my-3">Education and Skills Development</div>
            <div className="text-[14px]">
              We offer training programs, workshops, and scholarships to individuals from
              underserved communities, focusing on skills development, literacy, and vocational
              training.
            </div>
          </div>
          <div
            className="col-span-1 banner rounded-lg boxShadow-sm"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/culture.png" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-medium my-3">Cultural Exchange</div>
            <div className="text-[14px]">
              WWe facilitate cultural exchange programs, events, and festivals to promote
              cross-cultural understanding, diversity, and inclusion.
            </div>
          </div>
          <div
            className="col-span-1 banner rounded-lg boxShadow-sm"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/community.png" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-medium my-3">Community Center Renovation</div>
            <div className="text-[14px]">
              We're renovating a community center in [location] to create a safe space for local
              youth and families.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThirdSection;
