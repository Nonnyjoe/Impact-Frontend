import Link from 'next/link';

export function Web3bridge() {
  return (
    <div className="grid gap-2 md:gap-3">
      <p className="text-w3b-red text-sm md:text-base  font-bold font-poppins">Web3bridge</p>
      <Link
        className="font-poppins text-sm md:text-base "
        href="https://www.web3bridge.com/about-us"
      >
        About Us
      </Link>
      <Link className="font-poppins text-sm md:text-base " href=" https://www.web3bridge.com/team">
        Careers
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="mailto:support@web3bridge.com">
        Donations
      </Link>
      <Link className="font-poppins text-sm md:text-base " href=" https://www.web3bridge.com/">
        Terms & Privacy
      </Link>
    </div>
  );
}
