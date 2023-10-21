import Link from 'next/link';

export function Web3bridge() {
    return (
        <div className='flex flex-col gap-2 md:gap-5'>
            <p className='text-[#FA1011] text-sm md:text-base  font-bold font-poppins'>Web3bridge</p>
            <Link className='font-poppins text-sm md:text-base ' href="/">About Us</Link>
            <Link className='font-poppins text-sm md:text-base ' href="/create">Careers</Link>
            <Link className='font-poppins text-sm md:text-base ' href="/issue-cert">Donations</Link>
            <Link className='font-poppins text-sm md:text-base ' href="/verify">Terms & Privacy</Link>           
        </div>
    )
}