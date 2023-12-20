import DashboardLayout from '@/components/Admin/DashboardLayout';
import useUser from '@/lib/useUser';
import AdminHeader from '@/components/Admin/AdminHeader';
import { useEffect, useMemo, useState } from 'react';
import Modal from '@/components/Admin/RequestModal';
import AddCohort from '@/components/Admin/addCohort';
import TableRow, { TTableRow } from '@/components/Admin/TableRow';

export type CohortData = {
  name: string;
  // alias: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
  id: string;
  students: number;
  length?: any;
};

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based, so we add 1.
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cohorts, setCohorts] = useState<CohortData[]>([]);
  const { user, postApi, getCohort } = useUser({ access: 'Admin' });

  const tableData = useMemo<CohortData[]>(
    () =>
      cohorts.map((d) => ({
        name: d.name,
        startDate: formatDate(new Date(d.startDate)),
        endDate: formatDate(new Date(d.endDate)),
        students: d.students,
        isActive: d.isActive,
        id: d.id,
        options: '',
      })),
    [cohorts]
  );

  const refreshData = async () => {
    getCohort().then((data) => {
      setCohorts(data);
    });
  };

  useEffect(() => {
    refreshData();
  }, []);

  const tableHead = {
    Name: 'Name',
    'Start Date': 'Start Date',
    'End Date': 'End Date',
    Students: 'Students',
    Status: 'Status',
    Action: 'Action',
    id: 'id',
  } as unknown as TTableRow;
  return (
    <DashboardLayout>
      <>
        <div className={'flex flex-col h-full'}>
          <AdminHeader name={user.username!} />
          <div className={'flex justify-between items-center mt-[4vh] mb-[2vh]'}>
            <p className={'text-rlg font-semibold'}>Cohort</p>
            <button
              className={
                'text-rsm font-bold bg-w3b-red text-white py-[0.5%] p-[3%] rounded-[0.8vw] hover:bg-w3b-red/40 hover:text-black'
              }
              onClick={() => setIsOpen(true)}
            >
              Add Cohort
            </button>
          </div>

          <div className={'p-[2%] relative flex-1 flex flex-col gap-y-[4%]'}>
            <TableRow data={tableHead} className={'font-bold text-rsm'} type="cohort" />
            <div
              className={
                'flex flex-col gap-y-[3%] text-rmin max-h-[55vh] flex-1 overflow-auto no-scrollbar'
              }
            >
              {tableData.map((row) => (
                <TableRow data={row} key={row.name} className={'h-max'} type="cohort" />
              ))}
            </div>
          </div>
        </div>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Add Cohort'}>
          <AddCohort
            postApi={postApi}
            done={() => {
              setIsOpen(false);
              refreshData();
            }}
          />
        </Modal>
      </>
    </DashboardLayout>
  );
};

export default Admin;
