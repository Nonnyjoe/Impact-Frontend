import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative mt-[4.4rem] md:mt-20">
      <div className="z-10 flex flex-col-reverse  lg:flex-row h-[90vh] items-center justify-between font-mono text-sm lg:flex gap-16 md:gap-20">
        <div className="lg:w-1/2 px-6 md:p-6 lg:p-[60px] lg:pl-[100px] md:mr-6 lg:mr-20 flex md:block flex-col justify-center items-center ">
          <p className="text-3xl lg:text-6xl mb-4 lg:mb-10 text-black font-bold font-poppins md:text-left text-center">
            {' '}
            Our <span className="text-[#FA1011]">Mission.</span>
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-13 text-black font-poppins md:text-left text-center">
            We are on the journey to discover Web3 passion, create an African Web3 community, train
            in a collaborative and supportive environment, and in turn develop Africa’s Web3
            economy.
          </p>
          <button className="rounded-3xl border-2 text-sm md:text-lg lg:text-xl font-bold border-[#FA1011] text-[#FA1011] px-3 w-[180px] md:w-[13rem] lg:px-[35px] py-2 lg:py-[7px] mt-2 lg:mt-10 font-poppins">
            Learn More
          </button>
        </div>

        <div className="bg-[url('/Images/VID.png')] bg-cover bg-center w-[100vw] lg:w-1/2 h-[60vh] lg:h-[90vh] rounded-bl-3xl"></div>
      </div>
      <div className="absolute top-[65%] left-0">
        <Image src="/Images/Vector-3.png" alt="My Image" width={150} height={50} />
      </div>
    </div>
  );
}
