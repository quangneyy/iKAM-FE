import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  console.log('🔍 Middleware triggered for pathname:', pathname);

  // Keep root as-is (default locale: vi rendered at /)
  if (pathname === '/') {
    const res = NextResponse.next();
    res.headers.set('x-middleware', 'ran');
    return res;
  }

  // If path starts with /vi, strip the /vi prefix and redirect to the clean path
  if (pathname === '/vi' || pathname.startsWith('/vi/')) {
    const strippedPath = pathname.replace(/^\/vi(\/)?/, '/');
    const url = new URL(strippedPath, origin);
    console.log('🔄 Stripping /vi prefix →', url.toString());
    return NextResponse.redirect(url);
  }

  // Keep /en as-is
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const res = NextResponse.next();
    res.headers.set('x-middleware', 'ran');
    return res;
  }

  // For any other path without explicit locale, keep as vi
  const res = NextResponse.next();
  res.headers.set('x-middleware', 'ran');
  return res;
}

export const config = {
  matcher: [
    // Run on everything except Next.js internals and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};
