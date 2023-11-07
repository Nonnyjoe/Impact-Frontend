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

type MetaData = {
  userCount: number;
  remainingData: number;
  currentPage: number;
  currentlyFetched: number;
  numberOfPagesLeft: number;
  numberOfPages: number;
};

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based, so we add 1.
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const getServerSideProps = (async ({ query: { page = 0, cohortId } }) => {
  const res = await fetch(
    buildApiUrl(`user?requestStatus=pending&page=${page}${cohortId ? `&cohortId=${cohortId}` : ''}`)
  );
  const { data } = (await res.json()) as { data: { meta: MetaData; users: LoginData[] } };
  console.log(data.meta);

  if (!data)
    return {
      props: {
        tableData: [],
        meta: {
          userCount: 0,
          remainingData: 0,
          currentPage: 0,
          currentlyFetched: 0,
          numberOfPagesLeft: 0,
          numberOfPages: 0,
        },
      },
    };

  const tableData: TTableRow[] = data.users.map((d) => ({
    email: d.email!,
    name: `${d.firstname!} ${d.lastname!}`,
    cohort: d.cohortId!,
    date: formatDate(new Date(d.createdAt!)),
    status: d.requestStatus! as ReqStatus,
    action: 'Action',
    id: d.id!,
  }));

  return {
    props: { tableData, meta: data.meta },
  };
}) satisfies GetServerSideProps<{ tableData: TTableRow[] }>;

const Admin = ({ tableData, meta }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isApproving, setIsApproving] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    window.history.pushState({}, '', '/admin');
  }, [router.query.page]);

  const handleNext = () => {
    if (meta?.numberOfPagesLeft > 0) {
      router.replace({ query: { ...router.query, page: meta.currentPage } }).then((r) => r);
    }
  };

  const handlePrevious = () => {
    if (meta?.currentPage > 1) {
      router.replace({ query: { ...router.query, page: meta.currentPage - 2 } }).then((r) => r);
    }
  };

  const handleFilter = (cohortId: string) => router.replace({ query: { cohortId } }).then((r) => r);

  const tableHead = ['Email', 'Name', 'Cohort', 'Date', 'Status', 'Action'] as unknown as TTableRow;
  return (
    <DashboardLayout>
      <>
        <div className={'flex flex-col h-full'}>
          <AdminHeader name={user.username!} />
          <div className={'flex justify-between mt-[4vh] mb-[2vh]'}>
            <p className={'text-rlg font-semibold'}>Pending Reviews</p>
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
            <div className={'text-rmin flex justify-end items-center gap-[2%]'}>
              <p>
                {meta?.currentPage} / {meta.numberOfPages}
              </p>
              <button
                onClick={handlePrevious}
                disabled={meta?.currentPage === 1}
                className="px-[1%] bg-w3b-light-green disabled:bg-[#0000] "
              >
                previous
              </button>
              <button
                onClick={handleNext}
                disabled={meta?.numberOfPagesLeft === 0}
                className="px-[1%] bg-w3b-light-green disabled:bg-[#0000] "
              >
                next
              </button>
            </div>
          </div>
        </div>

        {/* <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </>
    </DashboardLayout>
  );
};

export default Admin;
