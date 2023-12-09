import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '@/components/Icons/Icons';
import React from 'react';

const Stories = () => (
    <div className="flex justify-center items-center flex-col gap-8 md:gap-12 mx-10 mb-10">
      <div className="flex justify-center items-center flex-col mt-20 gap-6 md:gap-8">
        <p className="text-center text-w3b-black font-poppins text-4xl md:text-6xl leading-110 -tracking-3 w-90">
          How Web3Bridge Africa transformed my life.
        </p>
        <p className="text-w3b-black font-poppins text-1xl md:text-2xl font-medium leading-6 uppercase">
          Olamide Ogunleye
        </p>
        <p className="text-w3b-black font-helvetica text-base font-normal leading-8 tracking-tight">
          4 min read
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-6 md:gap-10">
        <p className="text-w3b-black font-poppins text-sm md:text-lg font-normal leading-4 md:leading-10">
          In the not-so-distant future, the world was on the brink of a technological revolution
          unlike any other. Quantum computing had finally reached a level of maturity that could
          potentially change everything we knew about computing and problem-solving.
          <br /> <br />
          Our story revolves around Sarah, a brilliant computer scientist working for a cutting-edge
          tech company called QuantumTech. She had spent years developing quantum algorithms and
          building quantum computers that were far more powerful than anything the world had seen
          before. <br /> <br /> One fateful day, Sarah received a mysterious email from an anonymous
          sender. The email contained a complex mathematical problem that seemed impossible to solve
          with classical computers. But Sarah knew that her quantum computing expertise could make
          the impossible, possible. <br /> <br />
          As she delved deeper into the problem, Sarah realized that it was not just any
          mathematical puzzle; it was the blueprint for a quantum encryption system that could
          revolutionize cybersecurity. If she could crack it, it would render all existing
          encryption methods obsolete. With unwavering determination, Sarah and her team worked
          tirelessly, refining their quantum algorithms and fine-tuning their quantum computers.
          <br /> <br /> They faced numerous challenges and setbacks along the way, but Sarah's
          belief in the power of quantum computing never wavered. Months passed, and Sarah finally
          cracked the code. She had successfully developed a quantum encryption system that was
          virtually unbreakable. <br /> <br />
          The implications were staggering: secure communications, impervious data protection, and a
          new era in cybersecurity. Word of Sarah's breakthrough quickly spread throughout the tech
          world. Governments, corporations, and organizations around the globe clamored to adopt
          QuantumTech's quantum encryption system. Sarah became a tech icon, hailed as the pioneer
          of a new era in digital security. But the story didn't end there.
          <br /> <br /> As quantum computing continued to advance, Sarah and her team embarked on
          even more ambitious projects, tackling global challenges in fields like climate modeling,
          drug discovery, and artificial intelligence.
          <br /> <br /> Quantum computing was no longer just a leap; it was a boundless journey into
          the unknown. "The Quantum Leap" serves as a testament to human ingenuity and the
          relentless pursuit of knowledge. <br /> <br />
          In a world where technology evolves at an unprecedented pace, it reminds us that every
          breakthrough brings us one step closer to unlocking the limitless possibilities of the
          future.
        </p>
        <div className="text-center">
          <p className="text text-wb-black font-poppins text-1xl md:text-2xl font-medium leading-6 uppercase">
            Olamide Ogunleye
          </p>
          <p className="text text-w3b-red font-poppins text-base">DevRel, Stackmove</p>{' '}
        </div>
        <div className="flex justify-center items-center gap-6 md:gap-8">
          <TwitterIcon fontsize="30px" />
          <FacebookIcon fontsize="30px" />
          <WhatsappIcon fontsize="30px" />
          <TelegramIcon fontsize="30px" />
          <InstagramIcon fontsize="30px" />
          <YoutubeIcon fontsize="30px" />
        </div>
      </div>
    </div>
  );

export default Stories;
