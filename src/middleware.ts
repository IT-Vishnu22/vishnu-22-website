import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // Extract the query parameters from the request URL
    if (request.nextUrl.pathname == "/") {
      const queryParams = request.nextUrl.search;
      // Construct the new URL with the query parameters
      const newUrl = new URL(`/app/home${queryParams}`, request.nextUrl.origin);

      // Redirect to the new URL
      return NextResponse.redirect(newUrl);
  }

    if (
        request.nextUrl.pathname.startsWith("/app/game/popgear")
        // request.nextUrl.pathname.startsWith("/app/leaderboard")
        //request.nextUrl.pathname.startsWith("/app/game")
    ) {
        return NextResponse.rewrite(new URL("/app/home", request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/app/game/:path*",
        "/app/leaderboard/:path*",
        // "/announcement/vishnu",
        //"/app/game/popgear/:path*",
    ],
};
