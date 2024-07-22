import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // Extract the query parameters from the request URL
    if (request.nextUrl.pathname.startsWith("/")) {
        const queryParams = request.nextUrl.search;

        // Construct the new URL with the query parameters
        const newUrl = new URL(`/app/home${queryParams}`, request.url);

        // Redirect to the new URL
        return NextResponse.redirect(newUrl);
    }

    if (
        request.nextUrl.pathname.startsWith("/app/game") ||
        request.nextUrl.pathname.startsWith("/app/leaderboard")
        // || request.nextUrl.pathname.startsWith("/announcement/vishnu")
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
    ],
};
