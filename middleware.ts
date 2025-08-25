import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log('🔍 Middleware triggered for pathname:', pathname);

  // If accessing root /, redirect to /vi
  if (pathname === '/') {
    console.log('🔄 Redirecting / to /vi');
    return NextResponse.redirect(new URL('/vi', request.url));
  }

  // If accessing /vi, keep it as is
  if (pathname.startsWith('/vi')) {
    console.log('✅ Keeping /vi as is');
    return NextResponse.next();
  }

  // If accessing /en, keep it as is
  if (pathname.startsWith('/en')) {
    console.log('✅ Keeping /en as is');
    return NextResponse.next();
  }

  // For any other path without locale, redirect to /vi
  console.log('🔄 Redirecting other paths to /vi');
  return NextResponse.redirect(new URL('/vi', request.url));
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
