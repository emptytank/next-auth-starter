import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainNavigation from "@/app/components/layout/main-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth Starter",
  description: "Next Auth Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        {children}
        </body>
    </html>
  );
}
