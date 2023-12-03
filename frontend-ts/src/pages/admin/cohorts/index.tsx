import DashboardLayout from '@/pages/admin/components/DashboardLayout';
import useUser, { LoginData } from '@/lib/useUser';
import { AdminHeader } from '@/pages/admin/components/AdminHeader';
import { ReqStatus, TableRow, TTableRow } from '@/pages/admin/components/TableRow';
import { buildApiUrl } from '@/pages/data/appConfig';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Filter from '@/pages/admin/components/Filter';
import Modal from '@/pages/admin/components/RequestModal';
import { TailSpin } from 'react-loader-spinner';
import toast from 'react-hot-toast';

export type CohortData = {
  name: string;
  // alias: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
  id: string;
  length?: any;
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
      name: d.name,
      startDate: formatDate(new Date(d.startDate)),
      endDate: formatDate(new Date(d.endDate)),
      isActive: d.isActive,
      id: d.id,
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
  const [isOpen, setIsOpen] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const { user, postApi } = useUser({ access: 'Admin' });
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const tableHead = ['Name', 'Start Date', 'End Date', 'Status', 'Action'] as unknown as TTableRow;
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

const AddCohort = ({
  postApi,
  done = () => {},
}: {
  postApi: (path: string, body: any, method?: string) => Promise<any>;
  done?: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    numberOfStudents: 0,
  });
  const handleAddCohort = async () => {
    setLoading(true);
    try {
      const res = await postApi(`cohort`, formData, 'post');
      if (res.status) {
        toast.success('Cohort added successfully');
        setLoading(false);
        setFormData({
          name: '',
          startDate: '',
          endDate: '',
          numberOfStudents: 0,
        });
        done();
      } else {
        toast.error('Error adding cohort: ' + res.message);
        setLoading(false);
      }
    } catch (error) {
      console.error({ error });
      toast.error('Error adding cohort');
    }
  };
  return (
    <div className="grid gap-4">
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="input"
          id="name"
          placeholder="Enter cohort name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          className="input"
          id="startDate"
          placeholder="Enter cohort start date"
          value={formData.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          className="input"
          id="endDate"
          value={formData.endDate}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          placeholder="Enter cohort end date"
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="name">Number of Students</label>
        <input
          type="number"
          className="input"
          id="name"
          placeholder="Enter number of students"
          value={formData.numberOfStudents}
          onChange={(e) => setFormData({ ...formData, numberOfStudents: parseInt(e.target.value) })}
          required
        />
      </div>

      <button
        onClick={handleAddCohort}
        className="bg-w3b-red text-white rounded-lg py-2 px-8 hover:bg-[#7a1515] disabled:bg-w3b-light-red font-bold disabled:text-w3b-red"
        disabled={loading}
      >
        {loading ? (
          <div className="flex gap-8 items-center justify-center">
            <TailSpin
              height="auto"
              width="20px"
              color="#ff0000"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />
            <p className="opacity-40">Adding...</p>
          </div>
        ) : (
          <>Add</>
        )}
      </button>
    </div>
  );
};

export default Admin;
