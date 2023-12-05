import More from '@/components/Home/More';
import Image from 'next/image';
import Vector3 from '@/assets/Images/Vector-3.png';
import Vid from '@/assets/Images/VID.png';

export default function Hero() {
  return (
    <div className="">
      <div className=" flex flex-col-reverse flex-1 lg:flex-row items-center justify-between font-mono text-sm gap-16 md:gap-20">
        <div className="w-full relative lg:static grid gap-4 lg:gap-8 place-items-center lg:place-items-start">
          <p className="text-3xl lg:text-6xl text-black font-bold font-poppins">
            Our <span className="text-w3b-red">Mission.</span>
          </p>
          <p className="text-sm md:text-base lg:text-lg text-black font-poppins lg:text-left text-center">
            We are on the journey to discover Web3 passion, create an African Web3 community, train
            in a collaborative and supportive environment, and in turn develop Africa’s Web3
            economy.
          </p>

          <More />

          <div className="absolute -top-full lg:top-96 left-0">
            <Image src={Vector3} alt="My Image" width={150} height={50} />
          </div>
        </div>

        <div className="lg:w-full z-20 relative h-auto rounded-bl-3xl lg:-mr-6 w-screen -mx-12">
          <Image src={Vid} alt="My Image" width={1000} height={750} />
        </div>
      </div>
    </div>
  );
}
