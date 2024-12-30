import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
// import ClientProvider from "@/src/components/ClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nft Swipe",
  description: "Nft Swipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={`${geistSans.variable} ${geistMono.variable}`}>
    //     {/* Wrap children with ClientProvider */}
    //     <ClientProvider>{children}</ClientProvider>
    //   </body>
    // </html>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Directly render children for now */}
        {children}
      </body>
    </html>
  );
}
