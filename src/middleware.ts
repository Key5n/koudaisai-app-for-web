import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === process.env.NEXT_PUBLIC_USER &&
      pwd === process.env.NEXT_PUBLIC_PASS
    ) {
      return NextResponse.next();
    }
  }

  return NextResponse.rewrite(new URL("/api/auth", req.url));
}
