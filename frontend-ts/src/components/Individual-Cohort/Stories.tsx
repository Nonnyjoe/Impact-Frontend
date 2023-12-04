export default function Stories({ name }: any) {
  return (
    <div className=" z-10 flex flex-col lg:flex-row w-full lg:items-center justify-between font-mono text-sm lg:flex gap-20">
      <div className=" lg:w-[100%] md:mt-20 p-2 lg:px-[80px] mx-2 lg:mx-[8%] text-center items-center justify-center">
        <p className="text-3xl md:text-6xl font-poppins font-bold mb-5 mt-5">
          {' '}
          <span className="text-black"></span> <span className="text-w3b-red">{name}</span>
        </p>
        <p className=" text-sm md:text-base text-black lg:text-[18px] text-center font-poppins md:mx-[10rem]">
          From Cohort I to X: Hear the strories of our Alumni from various cohorts and what their
          experience at Web3Bridge was like...
        </p>
      </div>
    </div>
  );
}
