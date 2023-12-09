'use client';

import Image from 'next/image';
import { FC } from 'react';
import img11 from '@/assets/Images/IMG11.png';
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '@/components/Icons/Icons';

interface IStory {
  title: string;
  author: string;
  content: string;
}

const StoryHighlights: FC<{ story: IStory }> = ({ story }) => (
  <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-10 mt-5 max-w-4xl mx-auto">
    <div className="p-6 md:p-0 md:px-10 mb-4 md:w-2/3">
      <p className="text-black font-poppins text-[18px] mb-6 font-bold uppercase">{story.author}</p>
      <h2 className="text-black text-2xl md:text-4xl font-poppins font-bold mb-4 ">
        {story.title}
      </h2>
      <p className="text-black mb-3 font-poppins text-[18px]">{story.content}</p>
      <button className="rounded-3xl border border-w3b-red text-w3b-red px-4 md:px-[45px] py-2 md:py-[9px] gap-2 md:gap-10 items-start mt-4 md:mt-10 font-poppins text-sm md:text-[18px]">
        Continue Reading...
      </button>
    </div>

    <div className="flex flex-col  gap-10 md:gap-10 px-5 md:px-0">
      <div className="rounded-3xl shadow-xl ring-gray-300 md:flex-grow mt-4 md:mt-0 md:w-100%">
        <Image src={img11} alt="Team Member" className="w-full h-auto md:h-full" />
      </div>
      <div className="flex flex-row gap-2 md:gap-5 mb-5 justify-between px-5">
        <TwitterIcon />
        <FacebookIcon />
        <WhatsappIcon />
        <TelegramIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
    </div>
  </div>
);

export default StoryHighlights;
