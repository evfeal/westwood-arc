"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useLayoutEffect } from "react";
import arcLogo from "@/public/arc_logo.png";
const NavbarDesktop = dynamic(() => import("@/components/custom/NavDesktop"), {
    ssr: true,
});
const NavbarMobile = dynamic(() => import("@/components/custom/NavMobile"), {
    ssr: true,
});

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="grid grid-cols-1 px-4 py-6 bg-opacity-0">
            <Link
                className="flex flex-row row-start-1 row-end-1 col-start-1 col-end-1 text-2xl items-center font-bold text-gray-100"
                href="#"
            >
                <Image
                    src={arcLogo}
                    alt="Cool Logo for ARC"
                    priority
                    className="w-auto h-auto"
                />
                <h1 className="text-black dark:text-white invisible mx-3 lg:visible">
                    Westwood ARC
                </h1>
                <span className="sr-only">ARC Logo</span>
            </Link>
            {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
        </header>
    );
}
