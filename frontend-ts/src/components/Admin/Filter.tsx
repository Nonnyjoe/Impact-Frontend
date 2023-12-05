import { FC, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';

interface FilterProps {
  // eslint-disable-next-line no-unused-vars
  handleFilter: (cohortId: string) => void;
  cohorts: any[];
}

const Filter: FC<FilterProps> = ({ handleFilter, cohorts }) => {
  const [cohortId, setCohortId] = useState('');

  return (
    <div className={'flex gap-[10%] items-center'}>
      <BiFilterAlt className="text-w3b-red" />
      <select
        value={cohortId}
        onChange={(e) => {
          setCohortId(e.target.value);
          handleFilter(e.target.value);
        }}
        className="text-rsm flex justify-center items-center border-[0.1vw] border-w3b-red h-[80%] w-[12vw] rounded-[1vw] bg-white px-[5%]"
      >
        <option value="" className="bg-[#bbb]">
          All Cohorts
        </option>
        {cohorts.map((cohort) => (
          <option key={cohort.id} value={cohort.name}>
            {cohort.name}
          </option>
        ))}
        Cohort
      </select>
    </div>
  );
};

export default Filter;
