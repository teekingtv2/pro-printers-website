const HomeBannerSection = () => {
  return (
    <div className="flex banner w-full h-full">
      <div className="py-10 md:py-[130px] container pb-[50px] grid grid-cols-1 md:grid-cols-8 gap-10 md:gap-0 px-5">
        <div className="col-span-5 text-left">
          <div className="md:max-w-[80%]">
            <div className="mb-0 text-white text-[20px] font-medium">Welcome to</div>
            <h1 className="text-white text-30px md:text-[40px] mb-5">
              Vengo Development and Cultural Association USA
            </h1>
            <div className="text-white text-[19px] my-2">
              ...a non-profit organization founded on the principles of social justice, cultural
              diversity, and community engagement
            </div>
            <div className="text-white text-[17px] md:text-[22px] my-5">
              Our work is guided by the values of empathy, respect, and transparency.
            </div>

            <div className="w-[250px] h-[150px] relative mt-9">
              <img
                src="/images/events/12.jpg"
                alt=""
                className="w-[100px] h-[100px] rounded-[50px] border-[1px] border-[#fff] absolute top-0 left-0 z-10"
              />
              <img
                src="/images/events/2.jpg"
                alt=""
                className="w-[100px] h-[100px] rounded-[50px] border-[1px] border-[#fff] absolute bottom-0 left-[27%] z-20"
              />
              <img
                src="/images/events/16.jpg"
                alt=""
                className="w-[100px] h-[100px] rounded-[50px] border-[1px] border-[#fff] absolute top-1 right-5 z-30"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <img src="/images/banner2.png" alt="" className="w-[300px] md:w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSection;
