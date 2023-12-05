import Image from 'next/image';
import PW1 from '@/assets/Images/productsWorked/base.png';
import PW2 from '@/assets/Images/productsWorked/hydro.png';
import PW3 from '@/assets/Images/productsWorked/starkware.png';
import PW4 from '@/assets/Images/productsWorked/ETHOS.png';
import PW5 from '@/assets/Images/productsWorked/aplhaday.png';
import PW6 from '@/assets/Images/productsWorked/iqWiki.png';
import PW7 from '@/assets/Images/productsWorked/blockOps.png';
import PW8 from '@/assets/Images/productsWorked/onboard.png';
import PW9 from '@/assets/Images/productsWorked/quillAudits.png';
import PW10 from '@/assets/Images/productsWorked/polytope.png';

 const ProductsWorked = () => (
    <div>
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
              src={PW1}
              // base
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW2}
              // hydro
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW3}
              // starkware
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW4}
              // ethos
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW5}
              // aphalday
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW6}
              // iqwiki
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW7}
              // blockops
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW8}
              // onboard
              width={80}
              height={80}
              alt="Team Member"
              className="w-[70%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW9}
              // quill
              width={80}
              height={80}
              alt="Team Member"
              className="w-[40%] mx-auto"
            />
          </div>
          <div>
            <Image
              src={PW10}
              // polytope
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

export default ProductsWorked;