import { useEffect } from 'react';
import Router from 'next/router';
import { useLocalStorage } from 'usehooks-ts';
import { buildApiPostConfig, buildApiUrl } from '@/pages/data/appConfig';
import toast from 'react-hot-toast';

export type LoginData = {
  role: {
    super: boolean;
    admin: boolean;
    user: boolean;
    student: boolean;
  };
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  country: string;
  cohortId: string;
  isBlocked: boolean;
  requestStatus: string;
  createdAt: string;
  updatedAt: string;
  story: string;
  storyHeadder: string;
  __v: number;
};

export type User = {
  isLoggedIn: boolean;
  token?: string;
  user?: LoginData;
};

export default function useUser({ redirectTo = 'admin/login', redirectIfFound = false } = {}) {
  const [user, setUser] = useLocalStorage<User>('userData', {
    isLoggedIn: false,
  });

  const logout = () => {
    setUser({
      isLoggedIn: false,
    });
    Router.push(redirectTo).then((r) => r);
  };

  const login = async ({ email = '' }) => {
    const res = await fetch(buildApiUrl('auth/otp'), buildApiPostConfig({ email }));

    const {
      data: { otp },
    } = await res.json();

    if (!otp) {
      throw new Error("OTP doesn't exist");
    }

    const res2 = await fetch(
      buildApiUrl('auth/login'),
      buildApiPostConfig({ email, otp: Number(otp) })
    );

    const { data: data1 } = await res2.json();

    const { token, user: loginData } = data1;

    setUser({
      isLoggedIn: true,
      token,
      user: { ...loginData },
    });
  };

  async function postApi(path: string, body: any) {
    const res = await fetch(buildApiUrl(path), {
      body: JSON.stringify(body),
      method: 'put',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${user?.token}`,
      },
    });
    return res;
  }

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo).then((r) => r);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user: { ...user.user }, logout, login, postApi };
}
