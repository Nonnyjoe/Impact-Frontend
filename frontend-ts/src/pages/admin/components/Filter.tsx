import { FC, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';

interface FilterProps {
  // eslint-disable-next-line no-unused-vars
  handleFilter: (cohortId: string) => Promise<boolean>;
}

const Filter: FC<FilterProps> = ({ handleFilter }) => {
  const [cohortId, setCohortId] = useState('');
  const cohort = [
    'Cohort I',
    'Cohort II',
    'Cohort III',
    'Cohort IV',
    'Cohort V',
    'Cohort VI',
    'Cohort VII',
    'Cohort VIII',
    'Cohort IX',
    'Cohort X',
  ];

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
          cohort
        </option>
        {cohort.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
        Cohort
      </select>
    </div>
  );
};

export default Filter;
