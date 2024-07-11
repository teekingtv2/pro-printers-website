'use client';

const AboutSection = () => {
  return (
    <div className="flex bg-[#ffffff] w-full h-full">
      <div className="blue-border py-10 bg-white md:pb-[40px] max-w-[900px] mx-auto text-[#01081a] pb-[50px] px-5 rounded-lg">
        {/* <div className=" text-[30px] md:text-[35px] mb-5 font-bold" style={{ lineHeight: '1.2em' }}>
          Our <span className="textBlueGradient">Core Values</span>
        </div> */}
        <div className="max-w-[1000px] text-[17px] font-semibold mb-10">
          Welcome to Vengo Development and Cultural Association USA! Our mission is to empower our
          communities through health, education, cultural exchange, and sustainable development. We
          believe in the power of collaboration and inclusivity, and we're dedicated to creating
          positive change in the world. Our members are based in the U.S.A and Canada Thus, if you
          are a son, daughter or sympathizer with the Vengo people in North America, once more,
          Welcome Home! Explore our website to learn more
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[40px] ">
          <div className="col-span-1 w-[100%] text-start text-[#01081a] ">
            <img
              src="/images/home/love.png"
              alt=""
              className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[150px]"
            />
          </div>
          <div className="col-span-1 w-[100%] text-start text-[#01081a] ">
            <img
              src="/images/home/target.png"
              alt=""
              className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[150px]"
            />
          </div>
          <div className="col-span-1 w-[100%] text-start text-[#01081a] ">
            <img
              src="/images/home/excellence.png"
              alt=""
              className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[150px]"
            />
          </div>
        </div>
      </div>
      {/* <div className="blue-border py-10 bg-white md:pb-[40px] max-w-[1000px] mx-auto text-[#01081a] pb-[50px] px-5 rounded-lg">
        <div className=" text-[30px] md:text-[35px] mb-5 font-bold" style={{ lineHeight: '1.2em' }}>
          Our <span className="textBlueGradient">Core Values</span>
        </div>
        <div className="max-w-[500px] text-[17px] font-semibold mb-10">
          We are not just another random community. We represent integrity, members' growth and
          development, cultural and heritage preservation
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[40px] ">
          <div className="col-span-1 w-[100%] text-start text-[#01081a] ">
            <img
              src="/images/home/love.png"
              alt=""
              className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[200px]"
            />
            <div className="text-[23px] font-bold my-3">Sustainable Development</div>
            <div className="text-[15px]">
              We support community-led initiatives and projects focused on health, environmental
              conservation, renewable energy, and sustainable livelihoods
            </div>
          </div>
          <div className="col-span-1 w-[100%] text-start text-[#01081a] ">
            <img
              src="/images/home/target.png"
              alt=""
              className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[200px]"
            />
            <div className="text-[23px] font-bold my-3">Education & Skills Development</div>
            <div className="text-[15px]">
              We offer training programs, and scholarships to individuals from underserved
              communities, focusing on skills development, and literacy.
            </div>
          </div>
          <div className="col-span-1 w-[100%] text-start text-[#01081a] ">
            <img
              src="/images/home/excellence.png"
              alt=""
              className="w-[100%] mx-auto rounded-[5px] h-[100px] md:h-[200px]"
            />
            <div className="text-[23px] font-bold my-3">Cultural Exchange</div>
            <div className="text-[15px]">
              We facilitate cultural exchange programs, events, and festivals to promote
              cross-cultural understanding, diversity, and inclusion."
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutSection;
