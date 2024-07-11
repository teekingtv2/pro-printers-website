import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';
import { FaArrowCircleRight } from 'react-icons/fa';

const HomeDonate = () => {
  return (
    <div className="flex bg-[#ffffff] w-full h-full">
      <div className="pt-[90px] container px-5 text-[#03194a] text-center">
        <div className="text-[15px] uppercase">Support the cause</div>
        <div className="text-[27px] md:text-[35px] mb-3 font-extrabold">Donate To Us</div>
        <div className="md:w-[60%] mx-auto text-[16px] mb-10 font-[600]">
          Join us in our mission to create positive change! You can. Donate using any of these
          payment methods: Bank transfer, Credit Card, Zelle, CashApp, Paypal
        </div>
        <div className="animate__slower animate__animated animate__zoomIn grid grid-cols-1 md:grid-cols-4 gap-5 leading-[1.8rem] mt-5 px-5 mb-[50px] md:mb-[90px]">
          <div
            className="grid-cols-1 flex flex-col gap-2 mb-1 text-start rounded-xl card banner text-[#ffffff]"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/donate.gif" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-[500]">Donate to us</div>
            <div className="text-[14px] leading-5 font-normal">
              Your donation will do a lot in supporting our programs and projects
            </div>
          </div>
          <div
            className="grid-cols-1 flex flex-col gap-2 mb-1 text-start rounded-xl card banner text-[#ffffff] updown"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/volunteer.gif" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-[500]">Volunteer</div>
            <div className="text-[14px] leading-5 font-normal">
              We would always appreciate having your time and skill to benefit our programs
            </div>
          </div>
          <div
            className="grid-cols-1 flex flex-col gap-2 mb-1 text-start rounded-xl card banner text-[#ffffff] leftRight"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/collaborate.png" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-[500]">Collaborate</div>
            <div className="text-[14px] leading-5 font-normal">
              We are open for valuable patnerships that birth collaborative initiatives
            </div>
          </div>
          <div
            className="grid-cols-1 flex flex-col gap-2 mb-1 text-start rounded-xl card banner text-[#ffffff] updown"
            style={{ padding: '2rem 1rem' }}
          >
            <img src="/images/vectors/speak.png" className="w-[70%] mx-auto" />
            <div className="text-[19px] font-[500]">Spread the word</div>
            <div className="text-[14px] leading-5 font-normal">
              Spread the word about our work and mission. Let the world see the light
            </div>
          </div>
        </div>
        <Link href="/donate" className="block w-[90%] md:w-[30%] mx-auto mt-10">
          <div className="btnn secondaryBtnn text-md font-bold hover:border-b flex justify-center items-center">
            <span className="mr-2">Donate now</span>
            <span>
              <FaArrowCircleRight />
            </span>
          </div>
        </Link>
      </div>
      {/*  */}
    </div>
  );
};

export default HomeDonate;
