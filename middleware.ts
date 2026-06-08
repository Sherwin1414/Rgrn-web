import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.SESSION_SECRET;

const publicRoutes = [
  '/',
  '/about',
  '/services',
  '/packages',
  '/pricing',
  '/faq',
  '/contact',
  '/login',
  '/signup',
  '/api/contact',
];

const dashboardRoutes = ['/dashboard', '/arrangements', '/payments', '/documents', '/profile', '/notifications'];
const adminRoutes = ['/admin'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if route is public
  if (publicRoutes.some((route) => path === route || path.startsWith(route + '/'))) {
    return NextResponse.next();
  }

  // Check session for protected routes
  const sessionCookie = request.cookies.get('session')?.value;

  if (!sessionCookie) {
    // Redirect to login if no session
    if (dashboardRoutes.some((route) => path.startsWith(route))) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (adminRoutes.some((route) => path.startsWith(route))) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  // Verify and decode session
  try {
    if (!secretKey) {
      throw new Error('SESSION_SECRET not set');
    }

    const encodedKey = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(sessionCookie, encodedKey);
    const role = payload.role as string;

    // Admin route protection
    if (adminRoutes.some((route) => path.startsWith(route))) {
      if (!['admin', 'super_admin'].includes(role)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }

    // Dashboard route protection for authenticated users
    if (dashboardRoutes.some((route) => path.startsWith(route))) {
      if (!['customer', 'staff', 'admin', 'super_admin'].includes(role)) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    // Add user info to request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.userId as string);
    requestHeaders.set('x-user-role', role);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error('Middleware error:', error);
    // Invalid token, redirect to login
    if (dashboardRoutes.some((route) => path.startsWith(route)) || adminRoutes.some((route) => path.startsWith(route))) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
