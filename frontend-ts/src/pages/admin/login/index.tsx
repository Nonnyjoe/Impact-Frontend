import useUser from '@/lib/useUser';
import { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import w3bLogo from '@/assets/Images/Logo.png';

const Login = () => {
  const { login } = useUser({ redirectTo: '/admin', redirectIfFound: true });
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    login({ email }).then((r) => r);
  };

  return (
    <div className="grid place-content-center min-h-screen gap-4">
      <Image alt={'Web3Bridge Logo'} src={w3bLogo} className="absolute left-8 top-8" />
      <h1 className="text-2xl text-center">Login</h1>
      <div>
        <p>Email</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-w3b-red rounded-md py-1.5 px-2 focus:outline-none"
        />
      </div>

      <Button text={'LOGIN'} action={handleLogin} className="rounded-md font-normal " />
    </div>
  );
};

export default Login;
