import useUser from '@/lib/useUser';
import React from 'react';

const Alumni = () => {
  const { user } = useUser({ redirectTo: '/update-alumni/login' });
  return <div>Alumni</div>;
};

export default Alumni;
