import Image from 'next/image';
import Link from 'next/link';
import standardIcon from '@/assets/Images/Standard.png';
import technextLogo from '@/assets/Images/Technext-Logo-2022-01.png';
import techcabalLogo from '@/assets/Images/techcabal-10.png';
import sunLogo from '@/assets/Images/sun_logo.png';
import Webp from '@/assets/Images/Webp.png';
import palava from '@/assets/Images/61aea8e1fc3ed8447ec6a382_Panvala-Identity.png';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function AsShowcased() {
  return (
    <LayoutWrapper>
      <div className="rounded-3xl flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl px-10 mb-5 font-bold font-poppins">
          <span className="text-black"> As showcased on</span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 place-items-center gap-10 mt-5">
        <Link href={'/'}>
          <Image src={standardIcon} alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'https://technext24.com/?s=web3bridge'}>
          <Image src={technextLogo} alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'https://techcabal.com/?s=web3bridge'}>
          <Image src={techcabalLogo} alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'/'}>
          <Image src={sunLogo} alt="My Image" width={80} height={30} />
        </Link>

        <Link href={'https://blockbuild.africa/?s=web3bridge'}>
          <Image src={Webp} alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'/'}>
          <Image src={palava} alt="My Image" width={150} height={20} />
        </Link>
      </div>
    </LayoutWrapper>
  );
}
