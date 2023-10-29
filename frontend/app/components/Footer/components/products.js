import Link from 'next/link';

export function Products() {
  return (
    <div className="grid gap-2 md:gap-3">
      <p className="text-w3b-red text-sm md:text-base  font-bold font-poppins">Products</p>
      <Link className="font-poppins text-sm md:text-base " href="https://www.web3bridge.com/dapps">
        SafeKeep
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="https://www.web3bridge.com/dapps">
        Chained Thrift
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="https://www.web3bridge.com/dapps">
        Mutual Funds
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="mailto:support@web3bridge.com">
        Got a Suggestion?
      </Link>
    </div>
  );
}
