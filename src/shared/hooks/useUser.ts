'use client';

import { useState, useEffect } from 'react';
import type { IUser } from '@/entities/user';
import { getMe } from '@/app/actions/auth/me';

type TResult = {
    user: IUser | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
};

export const useUser = (): TResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const data = await getMe();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while fetching user data');

      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    isLoading,
    error,
    refetch: fetchUser,
  };
};