import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';

export function TwitterIcon({ color, fontsize }) {
  return <BiLogoTwitter className={color} fontSize={fontsize} />;
}

export function FacebookIcon({ color, fontsize }) {
  return <BiLogoFacebookSquare className={color} fontSize={fontsize} />;
}

export function LinkedInIcon({ color, fontsize }) {
  return <BiLogoLinkedinSquare className={color} fontSize={fontsize} />;
}

export function TelegramIcon({ color, fontsize }) {
  return <BiLogoTelegram className={color} fontSize={fontsize} />;
}

export function YoutubeIcon({ color, fontsize }) {
  return <BiLogoYoutube className={color} fontSize={fontsize} />;
}

export function InstagramIcon({ color, fontsize }) {
  return <BiLogoInstagram className={color} fontSize={fontsize} />;
}
