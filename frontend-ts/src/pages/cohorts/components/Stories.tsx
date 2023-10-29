import Image from 'next/image';

export function Stories() {
  return (
    <div className=" md:mb-0 mb-8 mt-20 md:mt-20 px-5 md:px-0 md:p-5 z-10 flex flex-col lg:flex-row w-full lg:items-center justify-between font-mono text-sm lg:flex gap-20">
      <div className="lg:w-[100%] p-2 lg:p-[80px] mx-2 lg:mx-[8%] text-center items-center justify-center">
        <p className="text-3xl md:text-6xl font-poppins font-bold mb-5 mt-5">
          {' '}
          <span className="text-black">Our</span> <span className="text-w3b-red">Cohorts</span>
        </p>
        <p className="text-sm md:text-base text-black lg:text-[18px] text-center font-poppins md:mx-20">
          From Cohort I to X Hear the strories of our Alumni from various cohorts and what they have
          to say about Web3Bridge
        </p>
      </div>
    </div>
  );
}
