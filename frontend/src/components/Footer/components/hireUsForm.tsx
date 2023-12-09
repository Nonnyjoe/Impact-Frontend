import Image from 'next/image';
import letterSend1 from '@/assets/Images/letter-send-1.png';

function HireUsForm() {
  return (
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
        <div>
          <button type="submit" className="px-3 py-4 w-full rounded-xl bg-w3b-black text-white">
            Send us a message
          </button>
        </div>
      </form>

      <Image
        src={letterSend1}
        alt="My Image"
        className="hidden lg:block absolute right-[90%] top-8 w-2/3"
      />
    </div>
  );
}

export default HireUsForm;
