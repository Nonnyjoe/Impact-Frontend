import LayoutWrapper from '@/app/components/LayoutWrapper';
import Image from 'next/image';

export const ProductsWorked = () => {
  return (
    <div className="mb-20">
      <div className="text-black mb-12 mt-5">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-poppins font-bold text-center">
          Products we have <br />
          worked with!
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-3 lg:grid-cols-5 items-center gap-y-7 gap-x-4 px-2">
          <div>
            <Image
              src="/Images/productsWorked/base.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/hydro.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/starkware.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/ETHOS.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/aplhaday.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/iqWiki.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/blockOps.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/onboard.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/quillAudits.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[40%] mx-auto"
            />
          </div>
          <div>
            <Image
              src="/Images/productsWorked/polytope.png"
              width={80}
              height={80}
              alt="Team Member"
              className="w-[100%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
