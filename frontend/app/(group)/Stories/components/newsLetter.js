import Image from 'next/image';
import { useState } from 'react';

export function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="bg-white h-[40px] flex flex-row rounded-lg mt-8 items-center justify-between px-4">
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address..."
          className="outline-none bg-transparent text-black "
        />

        <button type="submit">
          <Image
            src="/Images/newsLetter.png"
            alt="subscribe to newsletter"
            width={100}
            height={100}
            className=""
          />
        </button>
      </div>
    </form>
  );
}
