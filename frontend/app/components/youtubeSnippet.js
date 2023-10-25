import Image from 'next/image';
import LayoutWrapper from './LayoutWrapper';

export function YoutubeSnippet() {
  return (
    <div className="relative flex flex-col mt-10 md:mt-[50px] bg-black border h-auto">
      <LayoutWrapper>
        <div className="pb-1 md:pb-10 rounded-3xl flex flex-col text-center">
          <p className="text-2xl md:text-4xl mt-8 md:mt-16 font-bold">
            <span className="text-white font-poppins "> Our Latest from YouTube </span>
          </p>
        </div>
        <div className="mt-5 items-center justify-center flex mb-[4rem] md:mb-[100px] ">
          <Image
            src="/Images/YouTubeEmbed.png"
            width={1000}
            height={1000}
            alt="Team Member"
            className="w-[90vw] md:w-[50vw] object-contain"
          />
        </div>
      </LayoutWrapper>
    </div>
  );
}
