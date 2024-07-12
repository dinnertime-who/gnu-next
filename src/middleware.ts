import { auth } from '@/auth';

export const middleware = auth(async (_req, _ctx) => {});

// 미들웨어를 호출하지 않을 path
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
