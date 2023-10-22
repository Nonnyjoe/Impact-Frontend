import Link from 'next/link';
import Image from 'next/image';

export function Socials() {
  return (
    <div>
      <div className="flex flex-row gap-2 md:gap-5 mb-5">
        <Image
          src="/Images/icons/akar-icons_twitter-fill.png"
          alt="My Image"
          width={20}
          height={20}
        />
        <Image
          src="/Images/icons/fa6-brands_facebook-square.png"
          alt="My Image"
          width={20}
          height={20}
        />
        <Image src="/Images/icons/dashicons_whatsapp.png" alt="My Image" width={20} height={20} />
        <Image src="/Images/icons/bxl_telegram.png" alt="My Image" width={20} height={20} />
        <Image
          src="/Images/icons/akar-icons_instagram-fill.png"
          alt="My Image"
          width={20}
          height={20}
        />
        <Image
          src="/Images/icons/akar-icons_youtube-fill.png"
          alt="My Image"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="mb-5 font-poppins text-sm md:text-base ">
          1/3 Adebola Gbadebo Drv. (Adebola House) Off Abadek Avenue, off Akin Ogunlewe Rd, Igbogbo,
          Ikorodu, Lagos.
        </p>
        <Link className="font-poppins text-sm md:text-base " href="/create">
          support@web3bridge.com
        </Link>
      </div>
    </div>
  );
}
