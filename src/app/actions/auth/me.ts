'use server';

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const getMe = async () => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    const response = await fetch('http://localhost:8000/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken?.value}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};