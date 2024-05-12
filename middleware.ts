import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/(.*)',
]);
const isWebhook = createRouteMatcher([
  '/api/webhook_clerk',
  '/api/generate_token'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)&&!isWebhook(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};