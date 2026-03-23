
import { NextResponse, type NextRequest } from 'next/server'
export function proxy(req: NextRequest) {
    
    const { pathname } = req.nextUrl;

    // Allow login routes
    if (pathname.startsWith("/login")) {
        return NextResponse.next();
    }
    // Redirect all other routes
    // return NextResponse.redirect(new URL("/login", req.url))

}

export const config = {
    // matcher: ['/about/aboutcollege/:path*','/study/:path*','/1/:path*','/text/:path*'],

}