import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log('🔍 Middleware triggered for pathname:', pathname);

  // If accessing /vi, redirect to /
  if (pathname === '/vi' || pathname === '/vi/') {
    console.log('🔄 Redirecting /vi to /');
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If accessing /en, keep it as is
  if (pathname.startsWith('/en')) {
    console.log('✅ Keeping /en as is');
    return NextResponse.next();
  }

  // If accessing root /, keep it as is
  if (pathname === '/') {
    console.log('✅ Keeping / as is');
    return NextResponse.next();
  }

  // For any other path without locale, redirect to root
  console.log('🔄 Redirecting other paths to /');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
