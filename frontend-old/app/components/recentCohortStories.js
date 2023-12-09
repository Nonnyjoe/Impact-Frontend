'use client';
import { Button } from './Button';
import { StoryHighlights } from './StoryHighlights';

export function RecentCohortStories() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-3xl md:text-6xl px-10 mb-5 md:mb-20 font-bold font-poppins">
          <span className="text-black"> Recent </span>{' '}
          <span className="text-w3b-red">Cohort Stories...</span>
        </p>
      </div>

      <StoryHighlights
        story={{
          title: 'How Web3Bridge Africa transformed my life.',
          author: 'Olamide Ogunleye',
          content:
            'In the not-so-distant future, the world was on the brink of a technological revolution unlike any other. Quantum computing had finally reached a level of maturity that could potentially change everything we knew about computing and problem-solving.',
        }}
      />
      <Button text="View other Cohort Stories" action={() => ''} className="block mx-auto mt-10" />
    </div>
  );
}
