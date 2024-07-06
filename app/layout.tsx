import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/custom/Navbar";
import "./globals.css";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Westwood ARC",
  description: "The official website of Westwood ARC!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body
        className={`${roboto.className} bg-white bg-grid-small-black/[0.2]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
