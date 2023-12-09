import { BiSearch } from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';

interface IAHeader {
  name: string;
}
const AdminHeader = ({ name }: IAHeader) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-[5%] items-center border-[0.1vw] border-w3b-red rounded-[10vw] px-[2%] py-[0.5%]">
      <BiSearch className="text-w3b-red" />
      <input type="text" placeholder="Search" className="outline-0 w-[30vw]  text-rsm" />
    </div>
    <div className="flex gap-[5%] justify-end items-center w-[35%]">
      <div className="bg-w3b-light-red p-[2%] rounded-full">
        <RxAvatar className="text-black text-rmd" />
      </div>
      <p className="font-bold" suppressHydrationWarning>
        {name}
      </p>
    </div>
  </div>
);

export default AdminHeader;