import Image from 'next/image';

export function Goal() {
  return (
    <div className=" mt-20 md:mt-[120px] px-5 md:px-0 md:p-5 z-10 flex flex-col lg:flex-row w-full lg:items-center justify-between font-mono text-sm lg:flex gap-20">
      <div className='lg:w-[100%] p-6 lg:p-[80px] mx-2 lg:mx-[8%] bg-[#FA1011] rounded-3xl items-center justify-center shadow-2xl ring-red-500'>
        <p className='text-sm md:text-base lg:text-xl text-center font-poppins'>
          Web3bridge is a program created in 2019 to train Web3 developers in Africa. We are working on building a sustainable Web3 economy in Africa through remote and onsite Web3 development training, supporting web3 developers and startups, and lowering barriers of entry into the Web3 ecosystem.
        </p>
      </div>
    </div>
  );
}
