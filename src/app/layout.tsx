import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/layout/Footer";
import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { getSession } from "@/server-actions/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  console.log(`session: ${JSON.stringify(session)}`);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="relative">
          <Navbar />
          <div className="mt-[65px]">{children}</div>
          <Footer />
        </div> */}
        <Toaster />
        <AuthWrapper value={session}>{children}</AuthWrapper>
      </body>
    </html>
  );
}
