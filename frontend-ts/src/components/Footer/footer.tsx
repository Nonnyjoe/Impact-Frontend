import Image from 'next/image';
import Contact from './components/contact';
import Products from './components/products';
import Resource from './components/resource';
import Socials from './components/socials';
import Web3bridge from './components/web3bridge';
import Copyright from './components/copyright';
import LayoutWrapper from '../LayoutWrapper';
import vector from '@/assets/Images/Vector.png';

export default function Footer() {
  return (
    <div className="bg-white">
      <LayoutWrapper>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-10 relative text-black justify-between gap-10 z-20">
            <div className="col-span-2 md:col-span-3 md:w-2/3 lg:w-auto lg:col-span-2">
              <Socials />
            </div>
            <Web3bridge />
            <Products />
            <Resource />
            <Contact />{' '}
          </div>{' '}
          <div className="absolute md:top-[-75%] right-0 z-0">
            <Image src={vector} alt="My Image" width={400} height={600} />
          </div>
        </div>
      </LayoutWrapper>
      <div className="border-t border-w3b-red mt-8 py-8 md:py-12">
        <LayoutWrapper>
          <Copyright />
        </LayoutWrapper>
      </div>
    </div>
  );
}
