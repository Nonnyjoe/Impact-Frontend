import DashboardLayout from '@/components/Admin/DashboardLayout';
import useUser, { LoginData } from '@/lib/useUser';
import AdminHeader from '@/components/Admin/AdminHeader';
import TableRow, { ReqStatus, TTableRow } from '@/components/Admin/TableRow';
import { buildApiUrl } from '@/lib/data/appConfig';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Filter from '@/components/Admin/Filter';

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

const Admin = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const [tableData, setTableData] = useState<TTableRow[]>([]);
  const [filter, setFilter] = useState('');
  const [meta, setMeta] = useState<MetaData>({
    userCount: 0,
    remainingData: 0,
    currentPage: 0,
    currentlyFetched: 0,
    numberOfPagesLeft: 0,
    numberOfPages: 0,
  });
  const { user, getCohort } = useUser({ access: 'Admin' });
  const [cohorts, setCohorts] = useState<string[]>([]);
  const router = useRouter();
  const { page, cohortId } = router.query;

  const filteredData = useMemo(() => {
    if (!filter) return tableData;
    return tableData.filter((d) => d.cohort?.toLowerCase() === filter.toLowerCase());
  }, [filter, tableData]);

  useEffect(() => {
    getCohort().then((data) => {
      setCohorts(data);
    });
  }, []);

  // useEffect(() => {
  //   window.history.pushState({}, '', '/admin');
  // }, [page]);
  async function fetchData() {
    try {
      const res = await fetch(
        buildApiUrl(`user?&page=${page}${cohortId ? `&cohortId=${cohortId}` : ''}`)
      );
      const { data } = (await res.json()) as { data: { meta: MetaData; users: LoginData[] } };
      console.log(data.meta);

      if (!data)
        return {
          tabData: [],
          meta: {
            userCount: 0,
            remainingData: 0,
            currentPage: 0,
            currentlyFetched: 0,
            numberOfPagesLeft: 0,
            numberOfPages: 0,
          },
        };

      const tabData: TTableRow[] = data.users.map((d) => ({
        email: d.email!,
        name: `${d.firstname!} ${d.lastname!}`,
        cohort: d.cohortId!,
        date: formatDate(new Date(d.createdAt!)),
        status: d.requestStatus! as ReqStatus,
        action: 'Action',
        id: d.id!,
      }));

      return { tabData, meta: data.meta };
    } catch (error) {
      return {
        tabData: [],
        meta: {
          userCount: 0,
          remainingData: 0,
          currentPage: 0,
          currentlyFetched: 0,
          numberOfPagesLeft: 0,
          numberOfPages: 0,
        },
      };
    }
  }
  const refetchData = () => {
    fetchData().then((data) => {
      setTableData(data.tabData);
      setMeta(data.meta);
    });
  };

  useEffect(() => {
    refetchData();
  }, [cohortId, page]);

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

  const handleFilter = (_cohortId: string) => setFilter(_cohortId);

  const tableHead = {
    Email: 'Email',
    Name: 'Name',
    Cohort: 'Cohort',
    Date: 'Date',
    Status: 'Status',
    Action: 'Action',
    id: 'id',
  } as unknown as TTableRow;
  return (
    <DashboardLayout>
      <>
        <div className={'flex flex-col h-full'}>
          <AdminHeader name={user.username!} />
          <div className={'flex justify-between mt-[4vh] mb-[2vh]'}>
            <p className={'text-rlg font-semibold'}>Pending Reviews</p>
            <Filter handleFilter={handleFilter} cohorts={cohorts} />
          </div>

          <div className={'p-[2%] relative flex-1 flex flex-col gap-y-[4%]'}>
            <TableRow data={tableHead} className={'font-bold text-rsm'} />
            <div
              className={
                'flex flex-col gap-y-[3%] text-rmin max-h-[55vh] flex-1 overflow-auto no-scrollbar'
              }
            >
              {filteredData.map((row) => (
                <TableRow data={row} key={row.id} className={'h-max'} refetchData={refetchData} />
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
