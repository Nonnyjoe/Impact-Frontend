import useUser from '@/lib/useUser';
import SideBar from '@/components/Admin/SideBar';
import { FC, JSX } from 'react';

const DashboardLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  const { logout } = useUser();
  return (
    <div className="grid grid-cols-6 w-full h-screen text-rmd">
      <SideBar logout={logout} />
      <div className="px-[3%] pt-[5vh] col-span-5">{children}</div>
    </div>
  );
};
export default DashboardLayout;
