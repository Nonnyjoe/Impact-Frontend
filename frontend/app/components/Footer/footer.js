import Image from 'next/image';
import { Contact } from './components/contact';
import { Products } from './components/products';
import { Resource } from './components/resource';
import { Socials } from './components/socials';
import { Web3bridge } from './components/web3bridge';
import { Copyright } from './components/copyright';
import LayoutWrapper from '../LayoutWrapper';

export function Footer() {
  return (
    <div className="bg-white">
      <LayoutWrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 relative text-black justify-between gap-10">
          <div className="col-span-2 md:col-span-3 md:w-2/3 lg:w-auto lg:col-span-1">
            <Socials />
          </div>

          <Web3bridge />

          <Products />

          <Resource />

          <Contact />

          <div className="absolute md:top-[-75%] right-0">
            <Image src="/Images/Vector.png" alt="My Image" width={400} height={600} />
          </div>
        </div>
      </LayoutWrapper>
      <div className="border-t border-w3b-red mt-20 md:mt-[150px] pt-10 md:pt-20">
        <LayoutWrapper>
          <Copyright />
        </LayoutWrapper>
      </div>
    </div>
  );
}
