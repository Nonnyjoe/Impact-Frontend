import HireUsForm from '../Footer/components/hireUsForm';

const LetsWorkTog = () => (
  <div className="bg-[#151515] flex flex-col md:flex-row gap-y-8 justify-between py-10 lg:py-20 px-8 lg:px-16 rounded-xl lg:w-[90%] mx-auto">
    <div className="md:w-[50%] lg:w-[35%] text-white">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold font-poppins mb-5">
        Let&apos;s Work Together
      </h1>
      <div className="h-0.5 bg-[#FA1011] mb-5 w-[60%]"></div>
      <p className="text-lg md:text-2xl">Got questions? Even better.</p>
    </div>
    <HireUsForm />
  </div>
);

export default LetsWorkTog;
