import useUser from '@/lib/useUser';
import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';
import Image from 'next/image';
import w3bLogo from '@/assets/Images/Logo.png';
import OTPInput from 'react-otp-input';

interface ILoginMain {
  redirectTo: `/${string}`;
  loginHeader: string;
}
const config = {
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
    } catch (error) {
      setLoading(false);
      toast.error(error.message ?? 'Something went wrong', config);
    }
  };

  useEffect(() => {
    if (loading) {
      toast.loading('Logging in...', config);
    }
  }, [loading]);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
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

const OtpModal = ({
  email,
  updateOtp,
  closeModal,
}: {
  email: string;
  updateOtp: (email: string, otp: string) => Promise<boolean>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOtp = async () => {
    setLoading(true);
    if (otp.length < 6) {
      setLoading(false);
      setError('Wrong Otp');
      return;
    }
    try {
      const res = await updateOtp(email, otp);
      if (!res) throw new Error();
      setLoading(false);
      toast.success('Logged in successfully', config);
    } catch (error) {
      console.error(error);
      setError('Wrong Otp');
      setLoading(false);
    }
  };

  return (
    <div className="bg-black/20 absolute z-10 left-0 top-0 w-full h-full ">
      <div
        className="bg-white p-6 w-max rounded-lg grid gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-bold text-lg">Enter OTP</h2>
        <p>Please enter the OTP sent to {email}</p>
        <div className="w-max px-4">
          <OTPInput
            value={otp}
            onChange={(e) => {
              setOtp(e);
              setError('');
            }}
            numInputs={6}
            renderSeparator={<i className="px-[1%]" />}
            renderInput={(props: any) => <input {...props} />}
            inputStyle={`border rounded-full min-w-[50px] min-h-[50px] my-6 ${
              error ? 'border-w3b-red' : 'border-[#A5A7AC]'
            }`}
          />
        </div>

        {error && <p className="text-sm text-w3b-red font-bold -mt-4">{error}</p>}
        <button
          onClick={handleOtp}
          disabled={loading}
          className="border border-[#A5A7AC] rounded-xl py-2 px-4 disabled:border-w3b-red/50 hover:bg-w3b-light-red"
        >
          {loading ? (
            <div className="flex gap-[5%] items-center justify-center ">
              <TailSpin
                height="auto"
                width="2vw"
                color="#ff0000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="circles-with-bar-loading"
              />
              <p className="opacity-40">Verifying Otp...</p>
            </div>
          ) : (
            'Verify'
          )}
        </button>

        <button
          onClick={() => {
            closeModal(false);
          }}
          className="text-white bg-w3b-red  rounded-xl py-2 px-4  hover:bg-w3b-light-red hover:text-black"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
