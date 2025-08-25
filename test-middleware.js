// Test script để kiểm tra middleware
const { NextRequest } = require('next/server');

// Mock middleware function
function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  console.log('Middleware triggered for pathname:', pathname);

  // If accessing /vi, redirect to /
  if (pathname === '/vi' || pathname === '/vi/') {
    console.log('Redirecting /vi to /');
    return { redirect: '/' };
  }

  // If accessing /en, keep it as is
  if (pathname.startsWith('/en')) {
    console.log('Keeping /en as is');
    return { next: true };
  }

  // If accessing root /, keep it as is
  if (pathname === '/') {
    console.log('Keeping / as is');
    return { next: true };
  }

  // For any other path without locale, redirect to root
  console.log('Redirecting other paths to /');
  return { redirect: '/' };
}

// Test cases
const testCases = [
  '/',
  '/vi',
  '/vi/',
  '/en',
  '/en/about',
  '/about',
  '/test'
];

console.log('Testing middleware...\n');

testCases.forEach(path => {
  const mockRequest = {
    nextUrl: { pathname: path }
  };
  
  const result = middleware(mockRequest);
  console.log(`Path: ${path} -> ${JSON.stringify(result)}`);
});
