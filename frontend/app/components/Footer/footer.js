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
        <div className="flex flex-col md:flex-row gap-10 relative text-black px-6 mt-20 md:mt-[120px] md:px-[100px] mb-20">
          <div className="flex flex-row gap-10 md:w-2/5">
            <div className="w-1/2 md:w-2/3">
              <Socials />
            </div>
            <div className="w-1/2 md:w-1/3">
              <Web3bridge />
            </div>
          </div>

          <div className="flex flex-row gap-10 md:w-2/5">
            <div className="w-1/2">
              <Products />
            </div>
            <div className="w-1/2">
              <Resource />
            </div>
          </div>
          <div className="flex flex-row gap-10 md:w-1/5">
            <div className="w-1">
              <Contact />
            </div>
          </div>

          <div className="absolute md:top-[-75%] right-0">
            <Image src="/Images/Vector.png" alt="My Image" width={400} height={600} />
          </div>
        </div>
      </LayoutWrapper>
      <div className="border-t border-[#FA1011] mt-20 md:mt-[150px] pt-10 md:pt-20">
        <LayoutWrapper>
          <Copyright />
        </LayoutWrapper>
      </div>
    </div>
  );
}
