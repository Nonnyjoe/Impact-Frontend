import useUser from '@/lib/useUser';
import React, {FC, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {TailSpin} from 'react-loader-spinner';
import Image from 'next/image';
import w3bLogo from '@/assets/Images/Logo.png';
import OtpModal from "@/components/OtpModal";

interface ILoginMain {
  redirectTo: `/${string}`;
  loginHeader: string;
}
export const config = {
  id: 'login',
};
const LoginMain: FC<ILoginMain> = ({ redirectTo, loginHeader }) => {
  const { login, updateOtp } = useUser({ redirectTo, redirectIfFound: true, access: loginHeader });

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { status, message } = await login({ email });

      if (!status) throw new Error(message);

      setLoading(false);
      setShowOtpModal(true);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message ?? 'Something went wrong', config);
    }
  };

  useEffect(() => {
    if (loading) {
      toast.loading('Logging in...', config);
    }
  }, [loading]);

  useEffect(() => () => {
      toast.dismiss();
    }, []);

  return (
    <div className="min-h-screen grid place-content-center relative">
      <div className="grid p-8 gap-4 text-center w-screen max-w-xl">
        <Image alt={'Web3Bridge Logo'} src={w3bLogo} className="absolute left-16 top-16 w-56" />
        <h1 className="text-xl font-bold">{loginHeader} Login</h1>
        <div className="form-item pt-3">
          <label htmlFor="email">
            <span className="text-xl">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-w3b-red text-white rounded-lg py-2 px-8 hover:bg-[#7a1515] disabled:bg-w3b-light-red font-bold  disabled:text-w3b-red"
        >
          {loading ? (
            <div className="flex gap-8 items-center justify-center ">
              <TailSpin
                height="auto"
                width="20px"
                color="#ff0000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="circles-with-bar-loading"
              />
              <p className="opacity-40">Logging in...</p>
            </div>
          ) : (
            <>LOGIN</>
          )}
        </button>
      </div>
      {showOtpModal ? (
        <OtpModal email={email} updateOtp={updateOtp} closeModal={setShowOtpModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginMain;

