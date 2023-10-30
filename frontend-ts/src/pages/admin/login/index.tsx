import useUser from '@/lib/useUser';
import { useState } from 'react';
import Button from '@/components/Button';

const Login = () => {
  const { login } = useUser({ redirectTo: '/admin', redirectIfFound: true });
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    login({ email }).then((r) => r);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-w3b-red rounded-md p-2"
      />
      <Button text={'login'} action={handleLogin} />
    </div>
  );
};

export default Login;
