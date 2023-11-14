import useUser from '@/lib/useUser';
import React, {FC, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {TailSpin} from 'react-loader-spinner';
import Image from 'next/image';
import w3bLogo from '@/assets/Images/Logo.png';

interface ILoginMain {
  redirectTo: `/${string}`;
  loginHeader: string;
}

const LoginMain: FC<ILoginMain> = ({redirectTo, loginHeader}) => {
  const {login} = useUser({redirectTo, redirectIfFound: true, access: loginHeader});

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const config = {
    id: 'login',
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      await login({email});
      setLoading(false);
      toast.success('Logged in successfully', config);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error('Error logging in', config);
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
    <div className="min-h-screen grid place-content-center">
      <div className="grid min-w-full w-[50vh] mx-auto gap-[4vh] text-[1.5vw] text-center">
        <Image
          alt={'Web3Bridge Logo'}
          src={w3bLogo}
          className="absolute left-[10vw] top-[10vh] w-[20vw]"
        />
        <h1 className="text-[2vw]">{loginHeader} Login</h1>
        <div>
          <p className="my-[2%]">Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-w3b-red rounded-[0.8vw] py-[2%] px-[4%] w-full focus:outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="border border-w3b-red rounded-[0.8vw] py-[2%] px-[4%] disabled:border-w3b-red/50 hover:bg-w3b-light-red"
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
              <p className="opacity-40">Logging in...</p>
            </div>
          ) : (
            'LOGIN'
          )}
        </button>
      </div>
    </div>
  );
};

export default LoginMain;
