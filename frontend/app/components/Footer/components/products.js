import Link from 'next/link';

export function Products() {
    return (
        <div className='flex flex-col gap-2 md:gap-5'> 
            <p className='text-[#FA1011] text-sm md:text-base  font-bold font-poppins'>Products</p>
            <Link className='font-poppins text-sm md:text-base ' href="/">SafeKeep</Link>
            <Link className='font-poppins text-sm md:text-base ' href="/create">Chained Thrift</Link>
            <Link className='font-poppins text-sm md:text-base ' href="/issue-cert">Mutual Funds</Link>
            <Link className='font-poppins text-sm md:text-base ' href="/verify">Got a Suggestion?</Link>           
        </div>
    )
}