import useUser from '@/lib/useUser';
import { CohortData } from '@/pages/admin/cohorts';
import { FC, useState } from 'react';
import toast, { Toast } from 'react-hot-toast';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Dna } from 'react-loader-spinner';

export type ReqStatus = 'pending' | 'approved' | 'rejected';
export type TTableRow = {
  length?: any;
  // [x: string]: any;
  email: string;
  name: string;
  cohort: string;
  date: string;
  action: string;
  status: ReqStatus;
  id: string;
};
export const TableRow: FC<{
  data: TTableRow | CohortData;
  className?: string;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}> = ({ data, className, loading, setLoading }) => {
  const { postApi } = useUser();
  const toastConfig: Partial<Pick<Toast, 'id' | 'position'>> = {
    position: 'top-right',
    id: 'update-status',
  };
  const dataLength = Object.keys(data).length;
  const widths = dataLength > 5 ? [2, 2, 1, 1, 1, 1] : [1, 1, 1, 1, 1, 1];

  const getColor = (status: string | boolean) => {
    switch (status) {
      case 'approved':
        return 'bg-w3b-light-green text-w3b-green';
      case true:
        return 'bg-w3b-light-green text-w3b-green';
      case false:
        return 'bg-w3b-light-red text-w3b-red';
      case 'rejected':
        return 'bg-w3b-light-red text-w3b-red';
      default:
        return 'bg-w3b-light-blue text-w3b-blue';
    }
  };

  const handleRead = (data: TTableRow | CohortData) => {
    if (data?.length) return;
    console.log(data.id);
  };

  const handleUpdate = async (status: ReqStatus, id: string) => {
    try {
      if (data?.length) return;
      setLoading?.(true);
      const res = await postApi(`user/${id}`, { requestStatus: status });

      if (res.ok) {
        setLoading?.(false);
        toast.success('Status updated successfully', toastConfig);
      } else {
        throw new Error('error');
      }
    } catch (error) {
      setLoading?.(false);
      toast.error('Error updating status', toastConfig);
    }
  };

  const renderCell = (key: string, value: string, id: string) => {
    switch (key) {
      case 'status':
        return (
          <div
            className={`w-full h-full font-bold p-[5%] ${getColor(
              value
            )} rounded-[0.5vw] capitalize`}
          >
            {value}
          </div>
        );
      case 'action':
        return (
          <button
            className="w-full flex justify-center gap-[20%] items-center text-rlg disabled:opacity-70"
            disabled={loading}
          >
            {' '}
            {loading ? (
              <Dna
                visible={true}
                height="auto"
                width="2.4vw"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            ) : (
              <>
                <AiOutlineCheck
                  className="text-w3b-green hover:bg-w3b-light-green p-[5%] rounded-[25%]"
                  onClick={() => handleUpdate('approved', id)}
                />
                <RxCross2
                  className="text-w3b-red hover:bg-w3b-light-red p-[5%]  rounded-[25%]"
                  onClick={() => handleUpdate('rejected', id)}
                />
              </>
            )}
          </button>
        );
      case 'isActive':
        return (
          <div
            className={`w-full h-full font-bold p-[2%] ${getColor(value)} rounded-[1vw] capitalize`}
          >
            {value ? 'Active' : 'Inactive'}
          </div>
        );
      default:
        return <p className="truncate">{value}</p>;
    }
  };

  return (
    <div
      className={`grid grid-cols-${
        dataLength > 5 ? 8 : dataLength
      } gap-x-[2%] items-center ${className}`}
    >
      {Object.entries(data)
        .filter(([key]) => key !== 'id')
        .map(([key, value], index) => (
          <div
            key={index}
            className={`col-span-${widths[index]} text-center`}
            onClick={() => handleRead(data)}
          >
            {renderCell(key, value, data.id)}
          </div>
        ))}
    </div>
  );
};
