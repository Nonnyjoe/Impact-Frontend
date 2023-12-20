import { useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useLocalStorage } from 'usehooks-ts';
import { buildApiPostConfig, buildApiUrl } from '@/lib/data/appConfig';
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
  firstname: string;
  lastname: string;
  email: string;
  isActive: boolean;
  country: string;
  cohortId: string;
  isBlocked: boolean;
  requestStatus: string;
  createdAt: string;
  updatedAt: string;
  story: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  phoneNumber: string;
  gender: string;
  about: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  __v: number;
};

export type User = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  token?: string;
  user?: LoginData;
};

export default function useUser({
  redirectTo = '/admin/login',
  redirectIfFound = false,
  access = 'Admin',
} = {}) {
  const [user, setUser] = useLocalStorage<User>('userData', {
    isLoggedIn: false,
    isAdmin: false,
  });

  const logout = useCallback(() => {
    setUser({
      isLoggedIn: false,
      isAdmin: false,
    });
    Router.push(redirectTo).then((r) => r);
  }, [setUser, redirectTo]);

  const login = async ({ email = '' }) => {
    const res = await fetch(buildApiUrl('auth/otp'), buildApiPostConfig({ email }));

    const data = await res.json();
    return data;
  };

  const updateOtp = async (email: string, otp: string) => {
    try {
      const res2 = await fetch(buildApiUrl('auth/login'), buildApiPostConfig({ email, otp }));

      const { data: data1 } = await res2.json();

      const { token, user: loginData } = data1;

      if (access === 'Admin' && !loginData.role.admin) {
        throw new Error('User is not an admin');
      }

      if (access === 'Alumni' && !loginData.role.user) {
        throw new Error('User is not a student');
      }

      setUser({
        isLoggedIn: true,
        isAdmin: loginData.role.admin,
        token,
        user: { ...loginData },
      });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getCohort = async () => {
    try {
      const res = await fetch(buildApiUrl('cohort'));
      const { data } = await res.json();
      if (data) {
        return data;
      }
      toast.error('Unable to fetch cohorts');
      return [];
    } catch (error) {
      toast.error('Unable to fetch cohorts');
      return [];
    }
  };

  async function refetchUser() {
    try {
      const id = user?.user?.id;
      const res = await fetch(buildApiUrl(`user/${id}`));
      const { data } = await res.json();

      setUser({
        ...user,
        user: data,
      });
      return data;
    } catch (error) {
      console.error(error);
      return user.user;
    }
  }

  async function postApi(path: string, body: any, method = 'put') {
    const res = await fetch(buildApiUrl(path), {
      body: JSON.stringify(body),
      method,
      headers: {
        Authorization: `Bearer ${user?.token}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return res.json();
  }
  async function postFormData(path: string, body: FormData) {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${user?.token}`);
    const res = await fetch(buildApiUrl(path), {
      body,
      method: 'post',
      headers,
    });

    return res.json();
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

  useEffect(() => {
    if (!user || !user.isLoggedIn) return;
    if (access === 'Admin' && !user.user?.role.admin) {
      logout();
    }
    if (access === 'Alumni' && !user.user?.role.user) {
      logout();
    }
  }, [user, access, logout]);

  return {
    user: { ...user.user },
    logout,
    login,
    updateOtp,
    postApi,
    postFormData,
    refetchUser,
    getCohort,
  };
}
