import Image from 'next/image';
import Link from 'next/link';

export function AsShowcased() {
  return (
    <div className="">
      <div className="md:mx-[8%] rounded-3xl flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl px-10 mb-5 md:mb-10 font-bold font-poppins">
          <span className="text-black"> As showcased on</span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 place-items-center gap-10 mt-5">
        <Link href={'/'}>
          <Image src="/Images/Standard.png" alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'https://technext24.com/?s=web3bridge'}>
          <Image src="/Images/Technext-Logo-2022-01.png" alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'https://techcabal.com/?s=web3bridge'}>
          <Image src="/Images/techcabal-10.png" alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'/'}>
          <Image src="/Images/sun_logo.png" alt="My Image" width={80} height={30} />
        </Link>

        <Link href={'https://blockbuild.africa/?s=web3bridge'}>
          <Image src="/Images/Webp.png" alt="My Image" width={150} height={30} />
        </Link>

        <Link href={'/'}>
          <Image
            src="/Images/61aea8e1fc3ed8447ec6a382_Panvala-Identity.png"
            alt="My Image"
            width={150}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
