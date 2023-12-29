import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:['((?!^/checkout/).*)'],
  
})
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}