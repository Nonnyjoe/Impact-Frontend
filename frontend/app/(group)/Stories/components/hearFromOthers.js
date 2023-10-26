'use client';
import LayoutWrapper from '@/app/components/LayoutWrapper';
import { StoryHighlights } from '@/app/components/StoryHighlights';
import Image from 'next/image';
import { NewsLetter } from './newsLetter';

export function HearFromOthers() {
  return (
    <LayoutWrapper>
      <div className="mt-20 flex justify-between gap-24 px-10">
        <div className="">
          <h2 className="text-3xl md:text-6xl font-poppins font-bold mb-5   ">
            {' '}
            <span className="text-black">Our </span>{' '}
            <span className="text-w3b-red"> Cohorts Stories</span>
          </h2>

          <p className="text-black font-poppins text-lg ">
            From Cohort I to X: Hear the stories of our Alumni from various cohorts and <br /> what
            their experience at Web3Bridge was like...
          </p>

          <section className="-ml-10 mt-24">
            <article>
              <StoryHighlights
                story={{
                  author: 'Olamide Ogunleye',
                  title: 'How Web3Bridge Africa transformed my life.',
                  content:
                    'In the not-so-distant future, the world was on the brink of a technological revolution unlike any other. Quantum computing had finally reached a level of maturity that could potentially change everything we knew about computing and problem-solving',
                }}
              />
            </article>

            <article className="mt-20">
              <StoryHighlights
                story={{
                  author: 'Olamide Ogunleye',
                  title: 'How Web3Bridge Africa transformed my life.',
                  content:
                    'In the not-so-distant future, the world was on the brink of a technological revolution unlike any other. Quantum computing had finally reached a level of maturity that could potentially change everything we knew about computing and problem-solving',
                }}
              />
            </article>

            <article className="mt-20">
              <StoryHighlights
                story={{
                  author: 'Olamide Ogunleye',
                  title: 'How Web3Bridge Africa transformed my life.',
                  content:
                    'In the not-so-distant future, the world was on the brink of a technological revolution unlike any other. Quantum computing had finally reached a level of maturity that could potentially change everything we knew about computing and problem-solving',
                }}
              />
            </article>
          </section>
        </div>

        {/*  */}

        <div>
          <section className="bg-w3b-red rounded-lg p-4 w-[325px] h-[250px] ">
            <h3 className="font-poppins font-bold text-2xl">
              Get latest cohort <br /> stories delivered <br /> to your inbox
            </h3>

            <NewsLetter />

            <p className=" mt-4 text-xs">
              By signing up you agree to receive newsletter <br /> from Web3Bridge.
            </p>
          </section>

          <section className="bg-w3b-black  h-[1100px]  w-[325px] rounded-lg p-4 mt-10 ">
            <h3 className="font-poppins font-bold text-2xl ml-2">
              Join <span className="text-w3b-red">cohort XI(11)</span> <br /> waitlist now...
            </h3>

            <article>
              <Image
                src="/Images/web3LagosConf.png"
                alt="web3LagosConference"
                width={275}
                height={250}
                className="ml-2 mt-10"
              />

              <button className="rounded-3xl border   px-2 md:px-[20px] py-2 md:py-[9px] gap-2 md:gap-10 items-start mt-4 md:mt-10 font-poppins text-sm md:text-[18px]">
                Click to Register
              </button>
            </article>
            <article className="mt-10 ml-2">
              <h3 className="font-poppins font-bold text-2xl mb-4">Our Latest X Post</h3>

              <Image src="/Images/twitterFeed.png" alt="twitterFeed" width={275} height={250} />
            </article>
          </section>
        </div>
      </div>

      <section className="flex">
        <h3 className="text-black text-2xl md:text-4xl font-poppins font-bold mb-4 items-center justify-center mx-auto mt-10">
          Hear from Others
        </h3>

        <article></article>
      </section>
    </LayoutWrapper>
  );
}
