import { FC } from 'react';

interface IButton {
  text: string;
  action: () => void;
  className?: string;
}

const Button: FC<IButton> = ({ text, action, className }) => (
  <button
    className={`rounded-3xl border-2 text-sm md:text-lg lg:text-xl font-bold border-w3b-red text-w3b-red px-6 min-w-[144px] md:min-w-[208px] py-0.5 lg:py-1 font-poppins ${className}`}
    onClick={action}
  >
    {text}
  </button>
);
export default Button;
