import Image from 'next/image';
import React, {useState} from 'react';
import w3bLogo from '@/assets/Images/Logo.png';
import {buildApiPostConfig, buildApiUrl} from '@/pages/data/appConfig';
import {TailSpin} from 'react-loader-spinner';
import toast from "react-hot-toast";

const Onboard = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const openInNewTab = (url: string | URL | undefined) => {
    const newWindow = window.open(`${url}?email=${email}`, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const onboard = async () => {
    try {
      setLoading(true);
      const res = await fetch(buildApiUrl('auth/onboard'), buildApiPostConfig({email}));

      if (res.ok) {
        const response = await res.json();

        if (response.message.toLowerCase().startsWith('email already onboarded')) throw new Error(response.message)
        const linkArr = response.data.link.split('/');
        const link = linkArr[linkArr.length - 1];



        openInNewTab(encodeURI(`${window.location.href}/${link}`));
      } else {
        throw new Error('Error');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      toast.error(error.message)
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="grid min-w-full w-[50vh] mx-auto gap-[4vh] text-[1.5vw] text-center">
        <Image
          alt={'Web3Bridge Logo'}
          src={w3bLogo}
          className="absolute left-[10vw] top-[10vh] w-[20vw]"
        />
        <h1 className="text-[2vw]">Onboarding</h1>

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
          onClick={onboard}
          className="border border-w3b-red rounded-[0.8vw] py-[2%] px-[4%] disabled:border-w3b-red/50 hover:bg-w3b-light-red"
          disabled={loading}
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

export default Onboard;
