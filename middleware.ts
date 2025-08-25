import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log('🔍 Middleware triggered for pathname:', pathname);

  // If accessing root /, redirect to /vi (default locale)
  if (pathname === '/') {
    console.log('🔄 Redirecting / to /vi (default locale)');
    return NextResponse.redirect(new URL('/vi', request.url));
  }

  // If accessing /vi, redirect to / (but keep locale as 'vi')
  if (pathname.startsWith('/vi')) {
    console.log('🔄 Redirecting /vi to / (keeping locale: vi)');
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If accessing /en, keep it as is
  if (pathname.startsWith('/en')) {
    console.log('✅ Keeping /en as is');
    return NextResponse.next();
  }

  // For any other path without locale, redirect to /vi (default locale)
  console.log('🔄 Redirecting other paths to /vi (default locale)');
  return NextResponse.redirect(new URL('/vi', request.url));
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
