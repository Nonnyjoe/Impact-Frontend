import Link from 'next/link';
import {
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  YoutubeIcon,
} from '../../Icons/Icons';

export function Socials() {
  return (
    <div>
      <div className="flex flex-row gap-2 md:gap-3 mb-5">
        <Link href={'https://x.com/Web3Bridge'}>
          <TwitterIcon color="text-w3b-red" fontsize="2rem" />
        </Link>

        <Link href={'https://www.instagram.com/web3bridge/'}>
          <InstagramIcon color="text-w3b-red" fontsize="2rem" />
        </Link>

        <Link href={'https://www.linkedin.com/company/web3bridge/'}>
          <LinkedInIcon color="text-w3b-red" fontsize="2rem" />
        </Link>

        <Link href={'https://t.co/j2zcYJkgar'}>
          <TelegramIcon color="text-w3b-red" fontsize="2rem" />
        </Link>

        <Link href={'https://www.youtube.com/channel/UCrXJHMI98Y3LI9ljrmEeY3g'}>
          <YoutubeIcon color="text-w3b-red" fontsize="2rem" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <p className="mb-5 font-poppins text-sm md:text-base ">
          1/3 Adebola Gbadebo Drv. (Adebola House), Off Abadek Avenue, off Akin Ogunlewe Rd,
          Igbogbo, Ikorodu, Lagos.
        </p>
        <a
          className="font-poppins text-sm md:text-base cursor-pointer"
          href="mailto:support@web3bridge.com"
        >
          Help Desk
        </a>
      </div>
    </div>
  );
}
