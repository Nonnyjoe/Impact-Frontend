import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';

export function TwitterIcon({ color, fontsize }) {
  return <BiLogoTwitter class={color} fontSize={fontsize} />;
}

export function FacebookIcon({ color, fontsize }) {
  return <BiLogoFacebookSquare class={color} fontSize={fontsize} />;
}

export function LinkedInIcon({ color, fontsize }) {
  return <BiLogoLinkedinSquare class={color} fontSize={fontsize} />;
}

export function TelegramIcon({ color, fontsize }) {
  return <BiLogoTelegram class={color} fontSize={fontsize} />;
}

export function YoutubeIcon({ color, fontsize }) {
  return <BiLogoYoutube class={color} fontSize={fontsize} />;
}

export function InstagramIcon({ color, fontsize }) {
  return <BiLogoInstagram class={color} fontSize={fontsize} />;
}
