import Image from 'next/image';

export function ImpactSpread() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="py-10 max-w-3xl mx-auto text-center">
        <p className="text-3xl md:text-6xl mb-4 md:mb-8 font-bold font-poppins">
          <span className="text-black">Our</span>{' '}
          <span className="text-w3b-red">Impact Spread</span>
        </p>
        <p className="md:text-xl text-black font-poppins">
          We have introduced over 800 students into Web3 development and 1800+ trained in Web2
          technologies. Our Alumni are spread in 20+ countries.
        </p>
      </div>
      <div className="w-full xl:w-[90%] mx-auto">
        <Image src="/Images/WorldMap.png" alt="My Image" width={1800} height={750} />
      </div>
      <div className="absolute right-0 translate-y-3/4 hidden lg:block">
        <Image src="/Images/Vector-2.png" alt="My Image" width={150} height={50} />
      </div>
    </div>
  );
}
