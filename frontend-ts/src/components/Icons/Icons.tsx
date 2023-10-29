import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';

interface IconProps {
  color: string;
  fontsize: string;
}

export function TwitterIcon({ color, fontsize }: IconProps) {
  return <BiLogoTwitter class={color} fontSize={fontsize} />;
}

export function FacebookIcon({ color, fontsize }: IconProps) {
  return <BiLogoFacebookSquare class={color} fontSize={fontsize} />;
}

export function LinkedInIcon({ color, fontsize }: IconProps) {
  return <BiLogoLinkedinSquare class={color} fontSize={fontsize} />;
}

export function TelegramIcon({ color, fontsize }: IconProps) {
  return <BiLogoTelegram class={color} fontSize={fontsize} />;
}

export function YoutubeIcon({ color, fontsize }: IconProps) {
  return <BiLogoYoutube class={color} fontSize={fontsize} />;
}

export function InstagramIcon({ color, fontsize }: IconProps) {
  return <BiLogoInstagram class={color} fontSize={fontsize} />;
}
