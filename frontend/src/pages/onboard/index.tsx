import Image from 'next/image';
import React, { useState } from 'react';
import w3bLogo from '@/assets/Images/Logo.png';
import { buildApiPostConfig, buildApiUrl } from '@/lib/data/appConfig';
import { TailSpin } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import CustomToast from '@/components/CustomToast';
import { IoIosMailOpen } from 'react-icons/io';

const Onboard = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // const openInNewTab = (url: string | URL | undefined) => {
  //   const newWindow = window.open(`${url}?email=${email}`, '_blank', 'noopener,noreferrer');
  //   if (newWindow) newWindow.opener = null;
  // };

  const onboard = async () => {
    try {
      setLoading(true);
      const res = await fetch(buildApiUrl('auth/onboard'), buildApiPostConfig({ email }));
      const response = await res.json();
      if (res.ok) {
        if (response.message.toLowerCase().startsWith('email already onboarded'))
          throw new Error(response.message);
        const linkArr = response.data.link.split('/');
        const link = linkArr[linkArr.length - 1];
        console.log(link);

        toast.custom((t) => (
          <CustomToast t={t}>
            <div className="text-center w-max px-[2vw] grid gap-[2vh] ">
              <IoIosMailOpen className="text-[6vw] text-w3b-red mx-auto" />
              <p>A verification link has been sent to your email</p>
              <p className="text-rsm w-2/3 mx-auto">
                Please check your email and click on the link to continue onboarding
              </p>
            </div>
          </CustomToast>
        ));

        // openInNewTab(encodeURI(`${window.location.href}/${link}`));
      } else {
        throw new Error(response.message);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-content-center">
      <div className="grid p-8 gap-4 text-center w-screen max-w-xl">
        <Image alt={'Web3Bridge Logo'} src={w3bLogo} className="absolute left-16 top-16 w-56" />
        <h1 className="text-xl font-bold">Onboarding</h1>

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
          onClick={onboard}
          className="bg-w3b-red text-white rounded-lg py-2 px-8 hover:bg-[#7a1515] disabled:bg-w3b-light-red font-bold disabled:text-w3b-red"
          disabled={loading}
        >
          {loading ? (
            <div className="flex gap-8 items-center justify-center">
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
            'LOGIN'
          )}
        </button>
      </div>
    </div>
  );
};

export default Onboard;
