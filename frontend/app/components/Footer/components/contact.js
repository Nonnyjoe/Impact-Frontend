import Link from 'next/link';

export function Contact() {
  return (
    <div className="flex flex-col  gap-1 md:gap-5">
      <p className="text-w3b-red font-poppins text-sm md:text-base  font-bold">Contact</p>
      <a
        className="font-poppins text-sm md:text-base cursor-pointer"
        href="mailto:support@web3bridge.com"
      >
        support@web3bridge.com
      </a>
      <a
        className="font-poppins text-sm md:text-base cursor-pointer "
        href="mailto:ayodeji@web3bridge.com"
      >
        ayodeji@web3bridge.com
      </a>
    </div>
  );
}
