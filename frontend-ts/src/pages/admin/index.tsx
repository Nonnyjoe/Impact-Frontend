import DashboardLayout from '@/pages/admin/components/DashboardLayout';
import useUser, { LoginData } from '@/lib/useUser';
import { AdminHeader } from '@/pages/admin/components/AdminHeader';
import { BiFilterAlt } from 'react-icons/bi';
import { ReqStatus, TableRow, TTableRow } from '@/pages/admin/components/TableRow';
import { buildApiUrl } from '@/pages/data/appConfig';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based, so we add 1.
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const getServerSideProps = (async () => {
  const res = await fetch(buildApiUrl('user'));
  const { data } = (await res.json()) as { data: LoginData[] };

  const tableData: TTableRow[] = data.map((d) => ({
    name: d.username!,
    cohort: d.cohortId!,
    story: d.story ?? '',
    date: formatDate(new Date(d.createdAt!)),
    action: 'Action',
    status: d.requestStatus! as ReqStatus,
  }));

  return {
    props: { tableData },
  };
}) satisfies GetServerSideProps<{ tableData: TTableRow[] }>;

const Admin = ({ tableData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user } = useUser();

  const tableHead = ['Name', 'Cohort', 'Review', 'Date', 'Action', 'Status'];
  return (
    <DashboardLayout>
      <div className={'flex flex-col h-full'}>
        <AdminHeader name={user.username!} />
        <div className={'flex justify-between mt-[6vh] mb-[2vh]'}>
          <p className={'text-rlg font-semibold'}>Reviews</p>
          <div className={'flex gap-[10%] items-center'}>
            <BiFilterAlt className="text-w3b-red" />
            <div className="text-rsm flex  justify-center items-center border-[0.1vw] border-w3b-red h-[80%] w-[12vw] rounded-[1vw]">
              Cohort
            </div>
          </div>
        </div>

        <div className={'p-[2%] relative flex-1 flex flex-col gap-y-[4vh]'}>
          <TableRow data={tableHead} className={'font-bold text-rsm'} />
          <div
            className={
              'flex flex-col gap-y-[3vh] text-rmin max-h-[50vh] flex-1 overflow-auto no-scrollbar'
            }
          >
            {tableData.map((row) => (
              <TableRow data={row} key={row.name} className={'h-max'} />
            ))}
          </div>
          <div className={'text-rmin flex justify-end items-center gap-[4%]'}>
            <p>1/10</p>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
