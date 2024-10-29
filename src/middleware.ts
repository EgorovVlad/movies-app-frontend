import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const publicPaths = ['/login'];
const protectedPaths = ['/movies'];
 
export default async function AuthMiddleware(request: NextRequest) {
  const devDomain = 'http://localhost:3000';
  const route = request.url.replace(devDomain, '');

  const isProtected = protectedPaths.some((path) => route.startsWith(path));
  const isPublic = publicPaths.some((path) => route.startsWith(path));
  const accessToken = request.cookies.get('access_token');
  const header = new Headers();

  if (!isProtected && !isPublic) {
    return NextResponse.next()
  }

  if (!accessToken && isProtected) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    const response = await fetch('http://localhost:8000/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken?.value || '',
      }
    });

    if (response.status === 401) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (response.status === 200 && isProtected) {
      header.set('redirect', '/movies');
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.error();
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|.*\svg|.*\png|.*\jpg|.*\jpeg|.*\gif|.*\webp|_next/image|favicon.ico).*)',],
}
