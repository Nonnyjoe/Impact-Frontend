import useUser from '@/lib/useUser';
import { FC } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

export type ReqStatus = 'pending' | 'approved' | 'rejected';
export type TTableRow = {
  [x: string]: any;
  name: string;
  cohort: string;
  story: string;
  date: string;
  action: string;
  status: ReqStatus;
  id: string;
};
export const TableRow: FC<{ data: TTableRow; className?: string }> = ({ data, className }) => {
  const { postApi } = useUser();
  const widths = ['1', '1', '4', '1', '1', '1'];
  const getColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-w3b-light-green text-w3b-green';
      case 'rejected':
        return 'bg-w3b-light-red text-w3b-red';
      default:
        return 'bg-w3b-light-blue text-w3b-blue';
    }
  };

  const handleRead = (data: TTableRow) => {
    if (data?.length) return;
    console.log(data.id);
  };

  const handleUpdate = async (status: ReqStatus, id: string) => {
    if (data?.length) return;
    const res = await postApi(`user/${id}`, { requestStatus: status });
    console.log(res);
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
          <div className="flex justify-center gap-[20%] items-center text-rlg">
            <AiOutlineCheck
              className="text-w3b-green hover:bg-w3b-light-green p-[5%] rounded-[25%]"
              onClick={() => handleUpdate('approved', id)}
            />
            <RxCross2
              className="text-w3b-red hover:bg-w3b-light-red p-[5%]  rounded-[25%]"
              onClick={() => handleUpdate('rejected', id)}
            />
          </div>
        );
      default:
        return <p className="truncate">{value}</p>;
    }
  };

  return (
    <div className={`grid grid-cols-9 gap-x-[2%] items-center ${className}`}>
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
