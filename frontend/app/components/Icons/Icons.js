import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';

export function TwitterIcon({ color }) {
  return <BiLogoTwitter class={color} />;
}

export function FacebookIcon({ color }) {
  return <BiLogoFacebookSquare class={color} />;
}

export function LinkedInIcon({ color }) {
  return <BiLogoLinkedinSquare class={color} />;
}

export function TelegramIcon({ color }) {
  return <BiLogoTelegram class={color} />;
}

export function YoutubeIcon({ color }) {
  return <BiLogoYoutube class={color} />;
}
