import LayoutWrapper from '@/app/components/LayoutWrapper';
export function Goal() {
  return (
    <LayoutWrapper>
      <div className="mt-20 relative flex flex-col items-center justify-between mb-40 md:mb-80">
        <div className="lg:w-[100%] md:p-[60px] lg:p-[80px] mx-2 md:mx-[4%] lg:mx-[8%] p-6 bg-w3b-red rounded-3xl">
          <p className="text-xs md:text-base lg:text-lg text-center font-poppins mb-[3rem] md:mb-[8rem]">
            Web3bridge is a program created in 2019 to train Web3 developers in Africa. We are
            working on building a sustainable Web3 economy in Africa through remote and onsite Web3
            development training, supporting web3 developers and startups, and lowering barriers of
            entry into the Web3 ecosystem.
          </p>
        </div>
        <div className="absolute mt-20 pt-20">
          <img src="/Images/Frame.png" alt="My Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </LayoutWrapper>
  );
}
