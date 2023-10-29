import React from 'react';

export const LetsWorkTog = () => {
  return (
    <div className="bg-[#151515] flex flex-col md:flex-row gap-y-8 mt-14 mb-20 justify-between max-w-4xl w-[95%] mx-auto p-10 rounded-xl">
      <div className="md:w-[50%]">
        <h1 className="text-5xl font-bold font-poppins mb-3">
          Let's Work <br />
          Together
        </h1>
        <div className="h-0.5 bg-[#FA1011] mb-2 w-[35%]"></div>
        <p className="text-md">Got questions? Even better.</p>
      </div>
      <div className="bg-[#FA1011] p-5 pt-10 rounded-xl md:w-[50%]">
        <form className="grid gap-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="px-3 py-4 w-full rounded-xl text-black"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="px-3 py-4 w-full rounded-xl text-black"
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Project description"
              className="px-3 py-4 w-full rounded-xl h-32 text-black"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};
