'use server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const accessToken = data.access_token;
    const cookieStore = await cookies();
    cookieStore.set('access_token', accessToken);

    return response.ok;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};