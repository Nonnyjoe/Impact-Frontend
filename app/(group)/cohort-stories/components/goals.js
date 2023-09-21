import Image from 'next/image';

export function Goal() {
  return (
    <div className="mb-12 md:mb-0 relative mt-20 px-5 md:px-20 md:p-5 z-10 flex flex-col md:h-[90vh] w-full lg:items-center justify-between font-mono text-sm lg:flex gap-20">
      <div className='lg:w-[100%] p-6 lg:p-[80px] mx-2 lg:mx-[8%] bg-[#FA1011] rounded-3xl items-center justify-center shadow-2xl ring-red-500 mb-[4erm] md:mb-0'>
        <p className='text-sm md:text-base lg:text-xl text-center font-poppins mb-[3rem] md:mb-[8rem]'>
          Web3bridge is a program created in 2019 to train Web3 developers in Africa. We are working on building a sustainable Web3 economy in Africa through remote and onsite Web3 development training, supporting web3 developers and startups, and lowering barriers of entry into the Web3 ecosystem.
        </p>
      </div>
      <div className='absolute md:bottom-[-35vh] bottom-[-9rem]'>
            <Image src="/Images/Frame.png" alt="My Image" width={1000} height={750} />
      </div>
    </div>
  );
}
