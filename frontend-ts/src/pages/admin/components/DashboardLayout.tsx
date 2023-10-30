import useUser from '@/lib/useUser';
import SideBar from '@/pages/admin/components/SideBar';
import { FC, JSX } from 'react';

const DashboardLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  const { logout } = useUser();
  return (
    <div className="grid grid-cols-5 w-full h-screen text-rmd">
      <SideBar logout={logout} />
      <div className="px-[5%] py-[5vh] col-span-4">{children}</div>
    </div>
  );
};
export default DashboardLayout;
