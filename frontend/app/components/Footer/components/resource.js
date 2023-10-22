import Link from 'next/link';

export function Resource() {
  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <p className="text-[#FA1011] text-sm md:text-base  font-bold font-poppins">Resources</p>
      <Link className="font-poppins text-sm md:text-base " href="/">
        Cohort Stories
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="/create">
        Media Resources
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="/issue-cert">
        FAQs
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="/verify">
        Plain Education
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="/verify">
        Blog
      </Link>
      <Link className="font-poppins text-sm md:text-base " href="/verify">
        Help Center
      </Link>
    </div>
  );
}
