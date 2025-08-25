import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log('🔍 Middleware triggered for pathname:', pathname);

  // If accessing root /, keep it as is (will use default locale 'vi')
  if (pathname === '/') {
    console.log('✅ Keeping / as is (default locale: vi)');
    return NextResponse.next();
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

  // For any other path without locale, redirect to / (default locale: vi)
  console.log('🔄 Redirecting other paths to / (default locale: vi)');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
