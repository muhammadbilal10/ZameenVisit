import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "./server-actions/auth";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

const protectedRoutes = [
  "/dashboard",
  "/account",
  "/add-listing",
  "property-list",
];

export async function middleware(request: NextRequest) {
  return;
}
