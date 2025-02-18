import NextAuth from "next-auth";
import authConfig from "./auth.config";
import routes from "./routes";

const { auth } = NextAuth(authConfig);
export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const url = "http://localhost:3000";

  const { nextUrl } = req;

  const isPrivateRoute = routes.privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.includes("/auth");
  const isApiRoute = nextUrl.pathname.includes("/api");

  if (isApiRoute) {
    return;
  }

  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(`${url}/dashboard`);
  }
  if (isAuthRoute && !isLoggedIn) {
    return;
  }

  if (!isLoggedIn && isPrivateRoute) {
    return Response.redirect(`${url}/auth/login`);
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
