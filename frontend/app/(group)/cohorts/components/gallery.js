import Image from 'next/image';

export function Gallery() {
  return (
    <div className="relative flex flex-col gap-8 md:gap-20 items-center justify-center md:mb-20 ">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-0 md:mt-3 px-8 md:px-[110px]">
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow md:w-1/4">
          <a href="/individual-cohort">
            <img src="/Images/img1.png" alt="Team Member" className="w-full h-auto md:h-full" />
          </a>
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-1/4">
          <a href="/individual-cohort">
            <img
              src="/Images/TeamMember-1(1).png"
              alt="Team Member"
              className="w-full h-auto md:h-full"
            />
          </a>
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-1/4">
          <a href="/individual-cohort">
            <img
              src="/Images/TeamMember-1.png"
              alt="Team Member"
              className="w-full h-auto md:h-full"
            />
          </a>
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-1/4">
          <a href="/individual-cohort">
            <img
              src="/Images/TeamMember2(1).png"
              alt="Team Member"
              className="w-full h-auto md:h-full"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-0 md:mt-3 px-8 md:px-[110px]">
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow md:w-1/4">
          <a href="/individual-cohort">
            <img src="/Images/img1.png" alt="Team Member" className="w-full h-auto md:h-full" />
          </a>
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-1/4">
          <a href="/individual-cohort">
            <img src="/Images/IMG.png" alt="Team Member" className="w-full h-auto md:h-full" />
          </a>
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-1/4">
          <a href="/individual-cohort">
            <img
              src="/Images/TeamMember-1.png"
              alt="Team Member"
              className="w-full h-auto md:h-full"
            />
          </a>
        </div>
        <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-1/4">
          <a href="/individual-cohort">
            <img
              src="/Images/TeamMember-1(1).png"
              alt="Team Member"
              className="w-full h-auto md:h-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
