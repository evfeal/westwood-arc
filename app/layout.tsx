import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/custom/Navbar";
import MyCoolFooter from "@/components/custom/MyCoolFooter";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${opensans.className}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 flex flex-col">
            <div className="flex-1">{children}</div> <MyCoolFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
