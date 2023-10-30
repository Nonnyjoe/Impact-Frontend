import { FC } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

export type ReqStatus = 'pending' | 'approved' | 'rejected';
export type TTableRow = {
  name: string;
  cohort: string;
  story: string;
  date: string;
  action: string;
  status: ReqStatus;
};
export const TableRow: FC<{ data: TTableRow | string[]; className?: string }> = ({
  data,
  className,
}) => {
  const widths = ['w-[16%]', 'w-[9%]', 'w-[44%]', 'w-[9%]', 'w-[9%]', 'w-[13%]'];
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

  const renderCell = (key: string, value: string) => {
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
            <AiOutlineCheck className="text-w3b-green hover:bg-w3b-light-green p-[5%] rounded-[25%]" />
            <RxCross2 className="text-w3b-red hover:bg-w3b-light-red p-[5%]  rounded-[25%]" />
          </div>
        );
      default:
        return <p className="overflow-clip">{value}</p>;
    }
  };

  return (
    <div className={`flex gap-x-[3%] items-center ${className}`}>
      {Object.entries(data).map(([key, value], index) => (
        <div key={index} className={`${widths[index]} text-center`}>
          {renderCell(key, value)}
        </div>
      ))}
    </div>
  );
};
