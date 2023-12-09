import React, { FC } from 'react';
import Image from 'next/image';
import w3blogo from '@/assets/Images/Logo.png';
import { BiAlarm, BiAnalyse, BiCog } from 'react-icons/bi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineLogout } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { IconType } from 'react-icons/lib';

type Props = {
  logout: () => void;
};

const SideBar: FC<Props> = ({ logout }) => {
  const currPath = usePathname();

  return (
    <div className="col-span-1 grid grid-rows-6  bg-w3b-light-red px-[12%] py-[5vh]">
      <Image src={w3blogo} alt={'Web3Bridge Logo'} className={'row-span-1 w-full'} />
      <div className="flex flex-col justify-between row-span-5">
        <div className="grid gap-[20%]">
          {(
            [
              ['Dashboard', RxDashboard],
              ['Cohorts', BiAnalyse],
              ['Notifications', BiAlarm],
              ['Settings', BiCog],
            ] as [string, IconType][]
          ).map(([word, Icon]) => {
            const path = `/admin${
              word.toLowerCase() === 'dashboard' ? '' : `/${encodeURI(word.toLowerCase())}`
            }`;

            return (
              <Link
                key={word}
                href={path}
                className={`rounded-[0.8vw] w-full py-[5%] pl-[15%]  flex items-center gap-[7%] text-rsm hover:bg-w3b-red/20  ${
                  currPath === path ? 'bg-w3b-red text-white font-bold ' : ''
                }`}
              >
                <Icon className={`${currPath === path ? 'text-white' : ''} text-rmd`} />
                {word}
              </Link>
            );
          })}
        </div>
        <button
          onClick={logout}
          className={
            'rounded-[1vw] w-[70%] mx-auto py-[3%] px-[5%] border-[0.1vw] border-w3b-red bg-white flex gap-[9%] items-center justify-center text-rsm'
          }
        >
          <AiOutlineLogout className="text-w3b-red" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
