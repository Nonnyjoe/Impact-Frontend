import Image from 'next/image';

export function RecentCohorts() {
  return (
    <div className="relative flex flex-col items-center justify-center md:mt-20 ">
      <div className="pt-4 md:pt-[80px] pb-4 mx-4 md:mx-[8%] rounded-3xl flex flex-col items-center justify-center">
        <p className="text-3xl md:text-6xl px-4 md:px-10 mb-4 md:mb-10 font-bold font-poppins hidden md:block">
          <span className="text-black"> Recent </span>{' '}
          <span className="text-w3b-red">
            Cohort <span className="">Stories...</span>
          </span>
        </p>
        <p className="text-3xl md:text-6xl px-4 md:px-10 mb-4 md:mb-10 font-bold font-poppins md:hidden">
          <span className="text-black"> Recent </span> <span className="text-w3b-red">Cohorts</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-0 md:mt-3 px-8 md:px-[110px]">
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow">
          <img src="/Images/img1.png" alt="Team Member" className="w-full h-auto md:h-full" />
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0">
          <img src="/Images/IMG.png" alt="Team Member" className="w-full h-auto md:h-full" />
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0">
          <img
            src="/Images/TeamMember-1.png"
            alt="Team Member"
            className="w-full h-auto md:h-full"
          />
        </div>
      </div>
      <div className="mt-5">
        <button className="rounded-3xl border-2 border-w3b-red text-w3b-red px-4 md:px-[45px] py-2 md:py-[9px] gap-2 md:gap-10 items-start mt-4 md:mt-10 font-poppins font-bold text-sm md:text-[18px]">
          View other Cohort's Stories...
        </button>
      </div>
    </div>
  );
}
