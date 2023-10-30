import React, { FC } from 'react';
import Image from 'next/image';
import w3blogo from '@/assets/Images/Logo.png';
import {
  BiAnalyse,
  BiLogOut,
  BiSolidAlarm,
  BiSolidAnalyse,
  BiSolidCog,
  BiSolidDashboard,
} from 'react-icons/bi';
import Link from 'next/link';

type Props = {
  logout: () => void;
};

const SideBar: FC<Props> = ({ logout }) => (
  <div className="col-span-1 grid grid-rows-6  bg-w3b-light-red px-[12%] py-[5vh]">
    <Image src={w3blogo} alt={'Web3Bridge Logo'} className={'row-span-1 w-full'} />
    <div className="flex flex-col justify-between row-span-5">
      <div className="grid gap-[20%]">
        {[
          ['Dashboard', BiSolidDashboard],
          ['Analytics', BiSolidAnalyse],
          ['Notifications', BiSolidAlarm],
          ['Settings', BiSolidCog],
        ].map(([word, Icon]) => (
          <Link
            key={word}
            href={`/admin/${
              word.toLowerCase() === 'dashboard' ? '' : encodeURI(word.toLowerCase())
            }`}
            className={
              'rounded-[1vw] w-full p-[7%] pl-[15%] bg-w3b-red text-white flex items-center gap-[10%] text-rsm'
            }
          >
            <Icon className="text-black text-rmd" />
            {word}
          </Link>
        ))}
      </div>
      <button
        onClick={logout}
        className={
          'rounded-[1vw] w-full p-[5%] border-[0.1vw] border-w3b-red bg-white flex gap-[12%] items-center justify-center'
        }
      >
        <BiLogOut className="text-w3b-red" />
        <p>Log out</p>
      </button>
    </div>
  </div>
);

export default SideBar;
