import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/db/supabase/middleware";
import { NextResponse } from "next/server";
import { getUser } from "@/lib/actions/authAction";

export async function middleware(request: NextRequest) {
  const user = await getUser();
  const url = request.nextUrl.clone();

  const denyIfLoggedIn = ["/auth"];

  if (denyIfLoggedIn.includes(url.pathname)) {
    if (user) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
