'use server';

import { NextResponse } from 'next/server';

export const upload = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    return response.json();
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};