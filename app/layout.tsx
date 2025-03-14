import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "@/styles/globals.css";
import QueryProvider from "../providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { LayoutProps } from "@/types/layoutTypes";

{/**Style for react slick (carousel) */}
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],

  display: "swap"
})


export const metadata: Metadata = {
  title: "FlashNotes",
};

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">

      <body
        className={`${roboto.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
