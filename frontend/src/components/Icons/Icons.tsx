import {
  BiLogoTwitter,
  BiLogoWhatsappSquare,
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoGithub,
} from 'react-icons/bi';

interface IconProps {
  color?: string;
  fontsize?: string;
}

export function TwitterIcon({ color = 'text-blue-400', fontsize = '20px' }: IconProps) {
  return <BiLogoTwitter className={color} fontSize={fontsize} />;
}

export function FacebookIcon({ color = 'text-w3b-blue', fontsize = '20px' }: IconProps) {
  return <BiLogoFacebookSquare className={color} fontSize={fontsize} />;
}

export function WhatsappIcon({ color = 'text-w3b-green', fontsize = '20px' }: IconProps) {
  return <BiLogoWhatsappSquare className={color} fontSize={fontsize} />;
}

export function LinkedInIcon({ color = 'text-blue-600', fontsize = '20px' }: IconProps) {
  return <BiLogoLinkedinSquare className={color} fontSize={fontsize} />;
}

export function TelegramIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoTelegram className={color} fontSize={fontsize} />;
}

export function YoutubeIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoYoutube className={color} fontSize={fontsize} />;
}

export function InstagramIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoInstagram className={color} fontSize={fontsize} />;
}
export function GithubIcon({ color = 'text-w3b-black', fontsize = '20px' }: IconProps) {
  return <BiLogoGithub className={color} fontSize={fontsize} />;
}
