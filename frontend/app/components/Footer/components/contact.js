import Link from 'next/link';

export function Contact() {
    return (
        <div className='flex flex-col  gap-1 md:gap-5'>
            <p className='text-[#FA1011] font-poppins text-sm md:text-base  font-bold'>Contact</p>
            <Link href="/" className='font-poppins text-sm md:text-base '>support@web3bridge.com</Link>
            <Link href="/create" className='font-poppins text-sm md:text-base '>ayodeji@web3bridge.com</Link>           
        </div>
    )
}