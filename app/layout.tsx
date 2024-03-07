import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/custom/Navbar";
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
            <body className={`${opensans.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
