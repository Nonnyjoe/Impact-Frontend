import Image from 'next/image'



export function AsShowcased() {

    return (
        <div className="relative flex flex-col items-center mt-20 md:mt-0 justify-center mb-5 md:md-0 md:h-screen">
           <div className='md:mx-[8%] rounded-3xl flex flex-col items-center justify-center'>
                  <p className='text-3xl md:text-4xl px-10 mb-5 md:mb-10 font-bold font-poppins'><span className='text-black'> As showcased on</span></p>
           </div>
           <div className='flex flex-col md:flex-row gap-10 mt-5'>
                <div className='flex flex-row  gap-10 md:gap-10'>
                <Image src="/Images/Standard.png" alt="My Image" width={150} height={30} />
                <Image src="/Images/Technext-Logo-2022-01.png" alt="My Image" width={160} height={30} />
                </div>
                <div className='flex flex-row  gap-10 md:gap-10'>
                <Image src="/Images/techcabal-10.png" alt="My Image" width={180} height={20} />
                <Image src="/Images/sun_logo.png" alt="My Image" width={90} height={30} />
                </div>
                <div className='flex flex-row gap-10 md:gap-10'>
                <Image src="/Images/Webp.png" alt="My Image" width={150} height={30} />
                <Image src="/Images/61aea8e1fc3ed8447ec6a382_Panvala-Identity.png" alt="My Image" width={150} height={20} />
                </div>
           </div>    
        </div>
    )
}