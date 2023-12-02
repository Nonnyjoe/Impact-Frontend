import DashboardLayout from '@/pages/admin/components/DashboardLayout';
import useUser, { LoginData } from '@/lib/useUser';
import { AdminHeader } from '@/pages/admin/components/AdminHeader';
import { ReqStatus, TableRow, TTableRow } from '@/pages/admin/components/TableRow';
import { buildApiUrl } from '@/pages/data/appConfig';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Filter from '@/pages/admin/components/Filter';
import RequestModal from '@/pages/admin/components/RequestModal';

type CohortData = {
  name: string;
  alias: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
  id: string;
};

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based, so we add 1.
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const getServerSideProps = (async ({ query: { page = 0, cohortId } }) => {
  try {
    const res = await fetch(buildApiUrl(`cohort`));
    const { data } = (await res.json()) as { data: CohortData[] };

    if (!data)
      return {
        props: {
          tableData: [],
        },
      };

    const tableData: CohortData[] = data.map((d) => ({
      id: d.id,
      name: d.name,
      alias: d.alias,
      startDate: formatDate(new Date(d.startDate)),
      endDate: formatDate(new Date(d.endDate)),
      isActive: d.isActive,
    }));

    return {
      props: { tableData },
    };
  } catch (error) {
    return {
      props: {
        tableData: [],
      },
    };
  }
}) satisfies GetServerSideProps<{ tableData: CohortData[] }>;

const Admin = ({ tableData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isApproving, setIsApproving] = useState(false);
  const { user } = useUser({ access: 'Admin' });
  const router = useRouter();

  useEffect(() => {
    window.history.pushState({}, '', '/admin');
  }, [router.query.page]);

  const handleFilter = (cohortId: string) => router.replace({ query: { cohortId } }).then((r) => r);

  console.log(tableData);

  const tableHead = ['Name', 'Alias', 'Start Date', 'End Date'] as unknown as TTableRow;
  return (
    <DashboardLayout>
      <>
        <div className={'flex flex-col h-full'}>
          <AdminHeader name={user.username!} />
          <div className={'flex justify-between mt-[4vh] mb-[2vh]'}>
            <p className={'text-rlg font-semibold'}>Cohort</p>
            <Filter handleFilter={handleFilter} />
          </div>

          <div className={'p-[2%] relative flex-1 flex flex-col gap-y-[4%]'}>
            <TableRow data={tableHead} className={'font-bold text-rsm'} />
            <div
              className={
                'flex flex-col gap-y-[3%] text-rmin max-h-[55vh] flex-1 overflow-auto no-scrollbar'
              }
            >
              {tableData.map((row) => (
                <TableRow
                  data={row}
                  key={row.name}
                  className={'h-max'}
                  loading={isApproving}
                  setLoading={setIsApproving}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </>
    </DashboardLayout>
  );
};

export default Admin;
