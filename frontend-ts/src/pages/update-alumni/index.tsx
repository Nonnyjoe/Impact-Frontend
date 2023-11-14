import useUser from '@/lib/useUser';
import React, {useEffect} from 'react';

const Alumni = () => {
  const {user, refetchUser} = useUser({redirectTo: '/update-alumni/login', access: 'Alumni'});

  useEffect(() => {
    if (!user) return;
    refetchUser();
  }, []);

  return <div>Alumni</div>;
};

export default Alumni;
