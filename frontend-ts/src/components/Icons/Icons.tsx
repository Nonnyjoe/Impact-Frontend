import {
  BiLogoTwitter,
  BiLogoWhatsappSquare,
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLogoYoutube,
  BiLogoInstagram,
} from 'react-icons/bi';

interface IconProps {
  color?: string;
  fontsize?: string;
}

export function TwitterIcon({ color = 'text-w3b-red', fontsize }: IconProps) {
  return <BiLogoTwitter class={color} fontSize={fontsize} />;
}

export function FacebookIcon({ color = 'text-w3b-red', fontsize }: IconProps) {
  return <BiLogoFacebookSquare class={color} fontSize={fontsize} />;
}

export function WhatsappIcon({ color = 'text-w3b-red', fontsize }: IconProps) {
  return <BiLogoWhatsappSquare class={color} fontSize={fontsize} />;
}

export function LinkedInIcon({ color = 'text-w3b-red', fontsize }: IconProps) {
  return <BiLogoLinkedinSquare class={color} fontSize={fontsize} />;
}

export function TelegramIcon({ color = 'text-w3b-red', fontsize }: IconProps) {
  return <BiLogoTelegram class={color} fontSize={fontsize} />;
}

export function YoutubeIcon({ color = 'text-w3b-red', fontsize }: IconProps) {
  return <BiLogoYoutube class={color} fontSize={fontsize} />;
}

export function InstagramIcon({ color, fontsize }: IconProps) {
  return <BiLogoInstagram class={color} fontSize={fontsize} />;
}
