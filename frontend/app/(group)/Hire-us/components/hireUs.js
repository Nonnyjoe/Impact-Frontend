import Image from 'next/image';

export function Hireus() {
  return (
    <div className="md:mb-0 mb-8 mt-20 md:mt-20 px-5 md:px-0 md:p-x5 z-10 flex flex-col lg:flex-row w-full lg:items-center justify-between font-mono text-sm lg:flex gap-20">
      <div className=" lg:w-[100%] md:mt-20 p-2 lg:px-[80px] mx-2 lg:mx-[8%] text-center items-center justify-center">
        <h1 className="text-3xl md:text-6xl font-poppins font-bold mb-5 mt-5">
          {' '}
          <span className="text-black">Hire</span> <span className="text-[#FA1011]">Us</span>
        </h1>
        <p className=" text-sm md:text-base text-black lg:text-[18px] text-center font-poppins md:mx-[10rem]">
          LET US BUILD INDUSTRY-STANDARD PROECTS FOR YOU
        </p>
      </div>
    </div>
  );
}
