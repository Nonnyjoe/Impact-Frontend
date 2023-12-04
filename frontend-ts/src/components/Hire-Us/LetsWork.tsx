import Image from 'next/image';
import letterSend1 from '@/assets/Images/letter-send-1.png';

const LetsWorkTog = () => (
    <div className="bg-[#151515] flex flex-col md:flex-row gap-y-8 justify-between py-10 lg:py-20 px-8 lg:px-16 rounded-xl lg:w-[90%] mx-auto">
      <div className="md:w-[50%] lg:w-[35%] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold font-poppins mb-5">
          Let`&apos;`s Work Together
        </h1>
        <div className="h-0.5 bg-[#FA1011] mb-5 w-[60%]"></div>
        <p className="text-lg md:text-2xl">Got questions? Even better.</p>
      </div>
      <div className="bg-[#FA1011] pt-16 pb-10 px-9 rounded-xl md:w-[45%] relative">
        <form className="grid gap-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="px-3 py-4 w-full rounded-xl text-black"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="px-3 py-4 w-full rounded-xl text-black"
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Project description"
              className="px-3 py-4 w-full rounded-xl h-40 text-black"
            ></textarea>
          </div>
        </form>

        <Image
          src={letterSend1}
          alt="My Image"
          className="hidden lg:block absolute right-[90%] top-8 w-2/3"
        />
      </div>
    </div>
  );

export default LetsWorkTog;