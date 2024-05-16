import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
  '/(.*)',
]);
const isWebhook = createRouteMatcher([
  '/api/webhook_clerk',
  '/api/generate_token'
]);

const middleware= (req: NextRequest)=>{
  const requestHeaders = new Headers(req.headers)
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
  const path = req.url.split('/')
  response.headers.set('x-path', path[path.length-1])
  return response

}

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)&&!isWebhook(req)) auth().protect();

  return middleware(req)
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};