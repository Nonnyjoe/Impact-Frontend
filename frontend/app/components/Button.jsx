export const Button = ({ text, action }) => (
  <button
    className="rounded-3xl border-2 text-sm md:text-lg lg:text-xl font-bold border-w3b-red text-w3b-red px-3 w-36 md:w-52 py-0.5 lg:py-1 font-poppins"
    onClick={action}
  >
    {text}
  </button>
);
