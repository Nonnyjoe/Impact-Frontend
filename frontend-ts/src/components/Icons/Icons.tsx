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

export function TwitterIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoTwitter class={color} fontSize={fontsize} />;
}

export function FacebookIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoFacebookSquare class={color} fontSize={fontsize} />;
}

export function WhatsappIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoWhatsappSquare class={color} fontSize={fontsize} />;
}

export function LinkedInIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoLinkedinSquare class={color} fontSize={fontsize} />;
}

export function TelegramIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoTelegram class={color} fontSize={fontsize} />;
}

export function YoutubeIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoYoutube class={color} fontSize={fontsize} />;
}

export function InstagramIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoInstagram class={color} fontSize={fontsize} />;
}
export function GithubIcon({ color = 'text-w3b-red', fontsize = '20px' }: IconProps) {
  return <BiLogoGithub class={color} fontSize={fontsize} />;
}
