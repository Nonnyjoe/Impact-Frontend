import Image from 'next/image';

export const JoinCommunity = () => {
  return (
    <div className="mt-8 w-full max-w-4xl mx-auto">
      <div className="bg-[#FA1011] flex flex-col sm:flex-row">
        <div className="gap-y-5 text-center md:text-left px-8 py-6 sm:w-[50%] flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold">
            Join our Community
          </h3>
          <p className="font-poppins">Stay in touch with us by following all our socials.</p>
          <div className="flex items-center justify-center gap-x-4">
            <div>
              <Image
                src="/Images/icons/akar-icons_twitter-fill-white.png"
                width={80}
                height={80}
                alt="Team Member"
                className="w-[70%] mx-auto"
              />
            </div>
            <div>
              <Image
                src="/Images/icons/bxl_telegram-white.png"
                width={80}
                height={80}
                alt="Team Member"
                className="w-[70%] mx-auto"
              />
            </div>
            <div>
              <Image
                src="/Images/icons/akar-icons_instagram-fill-white.png"
                width={80}
                height={80}
                alt="Team Member"
                className="w-[70%] mx-auto"
              />
            </div>
            <div>
              <Image
                src="/Images/icons/akar-icons_youtube-fill-white.png"
                width={80}
                height={80}
                alt="Team Member"
                className="w-[70%] mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:w-[50%] sm:block">
          <Image
            src="/Images/brick.png"
            width={180}
            height={180}
            alt="Team Member"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
