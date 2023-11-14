import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import w3bLogo from '@/assets/Images/Logo.png';
import {TailSpin} from 'react-loader-spinner';
import {ValueOf} from 'next/dist/shared/lib/constants';
import {buildApiPostConfig, buildApiUrl} from '@/pages/data/appConfig';
import {useParams} from 'next/navigation';
import {useRouter} from 'next/router';

const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [info, setInfo] = useState({
    "firstname": "",
    "lastname": "",
    "gender": "",
    "dob": "",
    "username": "",
    "email": "",
    "cohortId": ""
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (router.query) {
      setInfo({
        ...info,
        "email": router.query.email as string ?? "",
      });
    }
  }, [router]);


  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch(buildApiUrl(`auth/onboard/${router.query.token}`), buildApiPostConfig(info));
      if (res.ok) {
        console.log(await res.json());
      } else {
        throw new Error('Error');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-content-center">
      <div className="grid min-w-full w-[60vh] mx-auto gap-[4vh] text-[1.5vw]">
        <Image
          alt={'Web3Bridge Logo'}
          src={w3bLogo}
          className="absolute left-[8vw] top-[8vh] w-[20vw]"
        />
        <h1 className="text-[2vw] text-center">Onboarding</h1>


        <div className='grid grid-cols-2 gap-[5%] h-max'>
          {Object.entries(info).map(([key, value]) => (
            <div key={key}>
              <p className="my-[2%] text-rsm">{key}</p>
              <input
                type={key == 'email' ? "email" : "text"}
                name={key}
                value={value}
                onChange={(e) => setInfo({...info, [key]: e.target.value})}
                className="border border-w3b-red rounded-[0.4vw] py-[2%] px-[5%] w-full focus:outline-none text-rsm"
                disabled={key == 'email'}
              />

            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="border border-w3b-red rounded-[0.4vw] py-[0.5%] px-[2%] disabled:border-w3b-red/50 hover:bg-w3b-light-red mt-[10%]"
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

export default CreateUser;
