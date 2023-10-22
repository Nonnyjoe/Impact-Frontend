import Image from 'next/image';

export function ImpactSpread() {
  return (
    <div className=" mt-20 md:mt-[90px] relative flex flex-col items-center justify-center ">
      <div className="p-4 md:p-6 lg:p-[80px] mx-2 md:mx-[8%] rounded-3xl flex flex-col items-center justify-center">
        <p className="text-3xl md:text-6xl mb-4 md:mb-10 font-bold font-poppins">
          <span className="text-black">Our</span>{' '}
          <span className="text-[#FA1011]">Impact Spread</span>
        </p>
        <p className="text-sm md:text-lg text-black px-4 md:px-10 text-center font-poppins">
          We have introduced over 800 students into web3 development and 1800+ trained in web2
          technologies. We have a spread of 20+ countries.
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <Image src="/Images/WorldMap.png" alt="My Image" width={1000} height={750} />
      </div>
      <div className="absolute bottom-4 right-0 md:top-[90%] md:right-4 md:disabled: hidden md:block">
        <Image src="/Images/Vector-2.png" alt="My Image" width={150} height={50} />
      </div>
    </div>
  );
}
