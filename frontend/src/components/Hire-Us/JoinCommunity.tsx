import { InstagramIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '@/components/Icons/Icons';
import Image from 'next/image';
import brick from '@/assets/Images/brick.png';

const JoinCommunity = () => (
    <div className="bg-[#FA1011] flex flex-col sm:flex-row shadow-glow  rounded-3xl">
      <div className="gap-y-5 text-center md:text-left px-8 py-6 sm:w-[50%] flex flex-col justify-center  rounded-2xl">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold">
          Join our Community
        </h3>
        <p className="font-poppins">Stay in touch with us by following all our socials.</p>
        <div className="flex items-center justify-center gap-x-4">
          <TwitterIcon color="text-white" />
          {/* className="w-[70%] mx-auto" */}
          <TelegramIcon color="text-white" />
          <InstagramIcon color="text-white" />
          <YoutubeIcon color="text-white" />
        </div>
      </div>
      <div className="hidden sm:w-[50%] sm:block">
        <Image src={brick} width={500} alt="Team Member" className="w-full  rounded-r-2xl" />
      </div>
    </div>
  );


export default JoinCommunity;