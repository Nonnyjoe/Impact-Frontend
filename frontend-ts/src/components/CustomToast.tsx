import React from 'react';
import toast, { Toast } from 'react-hot-toast';

const CustomToast: React.FC<{ t: Toast; children: React.ReactNode }> = ({ t, children }) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } w-max bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 mt-[5vh] pt-[4vh] pb-[2vh]`}
    >
      <div className="">{children}</div>
      <div className="w-max mx-auto p-[2%]">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-[3vw] py-[0.5vh] font-bold text-white bg-w3b-red/80 rounded-[1.5vh] hover:bg-w3b-red/50 text-rsm"
        >
          Close
        </button>
      </div>
    </div>
  );

export default CustomToast;
