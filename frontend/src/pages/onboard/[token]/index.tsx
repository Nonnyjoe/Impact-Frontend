/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import w3bLogo from '@/assets/Images/Logo.png';
import { TailSpin } from 'react-loader-spinner';
import { buildApiPostConfig, buildApiUrl } from '@/lib/data/appConfig';
import Router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import CustomToast from '@/components/CustomToast';
import useUser, { LoginData, User } from '@/lib/useUser';
import { useLocalStorage } from 'usehooks-ts';

const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useLocalStorage<User>('userData', {
    isLoggedIn: false,
    isAdmin: false,
  });
  const router = useRouter();

  const [info, setInfo] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    dob: '',
    username: '',
    email: '',
    cohortId: '',
  });

  useEffect(() => {
    if (router.query) {
      setInfo({
        ...info,
        email: (router.query.email as string) ?? '',
        cohortId: (router.query.cohortId as string) ?? '',
      });
    }
  }, [router]);

  const handleProfileUpdate = async () => {
    const token = router.query.token as string;
    // router.push('/update-alumni');

    try {
      const headers = new Headers();
      toast.loading('Updating profile');

      headers.append('Authorization', `Bearer ${token}`);

      const res = await fetch(buildApiUrl(`user/me`), {
        headers,
      });
      if (res.ok) {
        const { data }: { data: LoginData } = await res.json();
        console.log({ data, res });
        toast.dismiss();
        toast.loading('Redirecting');
        setUser({ isLoggedIn: true, isAdmin: data.role.admin, token, user: { ...data } });
        Router.replace('/update-alumni');
        toast.dismiss();
      }
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error('Error updating profile');
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        buildApiUrl(`auth/onboard/${router.query.token}`),
        buildApiPostConfig(info)
      );

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        toast.custom((t) => (
          <CustomToast t={{ ...t, duration: 15000 }}>
            <div className="text-center w-max px-[2vw] grid gap-[2vh] ">
              <p className="text-[6vw]">🎉</p>
              <p>Onboarding Successfully</p>
              <p className="text-rsm w-2/3 mx-auto">
                While waiting for admin approval, you can update your profile
              </p>
              <button
                className="border border-w3b-red text-w3b-red w-max mx-auto px-[3vw] py-[0.5vh] rounded-[1.5vh] text-[0.9vw]"
                onClick={handleProfileUpdate}
              >
                Update Profile
              </button>
            </div>
          </CustomToast>
        ));
      } else {
        toast.error(data.message);
        throw new Error(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-content-center">
      <div className="grid p-8 gap-4 text-center w-screen max-w-xl">
        <Image alt={'Web3Bridge Logo'} src={w3bLogo} className="absolute left-16 top-16 w-56" />
        <h1 className="text-xl font-bold">Onboarding</h1>

        <div className="text-center">
          <p>{info.email}</p>
          <p>{info.cohortId}</p>
        </div>

        <div className="form-group">
          {Object.entries(info).map(([key, value]) => {
            if (key === 'cohortId') return null;
            if (key === 'email') return null;
            return (
              <div key={key} className="form-item">
                <label htmlFor={key}>{key}</label>
                {key === 'gender' ? (
                  <select
                    name={key}
                    value={value}
                    onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
                    className="input"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                ) : key === 'dob' ? (
                  <input
                    type="date"
                    name={key}
                    value={value}
                    onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
                    className="input"
                  />
                ) : (
                  <input
                    type={key === 'email' ? 'email' : 'text'}
                    name={key}
                    value={value}
                    onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
                    className="input"
                    disabled={key === 'email'}
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleSubmit}
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

export default CreateUser;
