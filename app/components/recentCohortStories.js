import Image from 'next/image';

export function RecentCohortStories() {
    return (
        <div className="relative flex flex-col items-center mt-20 md:mt-[150px] justify-center mb-5 md:md-0 md:px-44">
           <div className='md:mx-[8%] rounded-3xl flex flex-col items-center justify-center'>
                  <p className='text-3xl md:text-6xl px-10 mb-5 md:mb-20 font-bold font-poppins'><span className='text-black'> Recent </span> <span className='text-[#FA1011]'>Cohort Stories...</span></p>
           </div>
           <div className='flex flex-col-reverse md:flex-row gap-2 md:gap-10 mt-5'>
                <div className='p-6 md:p-0 md:px-10 mb-4 md:w-2/3'>
                    <p className='text-black font-poppins text-[18px] mb-6 font-bold uppercase'>Olamide Ogunleye</p>
                    <h2 className='text-black text-2xl md:text-4xl font-poppins font-bold mb-4 '>How Web3Bridge Africa
                        transformed my life.
                    </h2>
                    <p className='text-black mb-3 font-poppins text-[18px]'>In the not-so-distant future, the world was on the brink of a technological revolution unlike any other. Quantum computing had finally reached a level of maturity that could potentially change everything we knew about computing and problem-solving.
                    </p>
                    <button className='rounded-3xl border border-[#FA1011] text-[#FA1011] px-4 md:px-[45px] py-2 md:py-[9px] gap-2 md:gap-10 items-start mt-4 md:mt-10 font-poppins text-sm md:text-[18px]'>
                    Continue Reading...
                    </button>
                </div>

                <div className='flex flex-col  gap-10 md:gap-10 px-5 md:px-0'>
                    
                    <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-100%">
                        <img src="/Images/IMG11.png" alt="Team Member" className="w-full h-auto md:h-full" />
                    </div>
                    <div className='flex flex-row gap-2 md:gap-5 mb-5 justify-between px-5'>
                        <Image src="/Images/icons/akar-icons_twitter-fill.png" alt="My Image" width={20} height={20} />
                        <Image src="/Images/icons/fa6-brands_facebook-square.png" alt="My Image" width={20} height={20} />
                        <Image src="/Images/icons/dashicons_whatsapp.png" alt="My Image" width={20} height={20} />
                        <Image src="/Images/icons/bxl_telegram.png" alt="My Image" width={20} height={20} />
                        <Image src="/Images/icons/akar-icons_instagram-fill.png" alt="My Image" width={20} height={20} />
                        <Image src="/Images/icons/akar-icons_youtube-fill.png" alt="My Image" width={20} height={20} />
                    </div>
                </div>
           </div>   
           <div className=' md:mt-5'>
                <button className='rounded-3xl border-2 border-[#FA1011] text-[#FA1011] px-4 md:px-[45px] py-2 md:py-[9px] gap-2 md:gap-10 items-start mt-4 md:mt-10 font-poppins font-bold text-sm md:text-[18px]'>
                View other Cohort Stories...
                </button>
            </div> 
        </div>
    )
}
