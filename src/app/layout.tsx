import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Jost, Mulish } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Consultify - ERP Talent Solutions",
  description: "Empowering Enterprises. Elevating Talent. Enabling Tomorrow.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${jost.variable} ${mulish.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
