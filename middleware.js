import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: req => !req.url.includes('/checkout')
});

 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 