import Image from 'next/image';
import vector from '@/assets/Images/Vector.png';
import Socials from './components/socials';
import Copyright from './components/copyright';
import LayoutWrapper from '../LayoutWrapper';

export default function Footer() {
  return (
    <div className="bg-white">
      <LayoutWrapper>
        <div className="relative">
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-10 relative text-black justify-between gap-10 z-20">
            <div className="col-span-2 md:col-span-3 md:w-2/3 lg:w-auto lg:col-span-2">
              <Socials />
            </div>
            <Web3bridge />
            <Products />
            <Resource />
            <Contact /> <div></div>
          </div>{' '} */}
          <div className="absolute md:top-[-75%] right-0 z-0">
            <Image src={vector} alt="My Image" width={300} height={300} />
          </div>
        </div>
      </LayoutWrapper>
      <div className="border-t border-w3b-red mt-8 py-8 md:py-12">
        {/* <LayoutWrapper> */}
        <div className="flex flex-row w-full px-40 py-10 space-x-20">
          <Socials />
          <Copyright />
        </div>
        {/* </LayoutWrapper> */}
      </div>
    </div>
  );
}
