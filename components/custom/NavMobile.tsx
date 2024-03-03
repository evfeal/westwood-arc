"use client";

import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { routes } from "@/utils/routes";

export default function NavbarMobile() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!isOpen);

    useClickAway(useRef(null), () => setOpen(false));

    return (
        <>
            <div className="visible sm:invisible flex flex-row row-start-1 row-end-1 col-start-1 col-end-1 text-2xl items-center justify-end font-bold">
                <button onClick={toggleMenu}>Hamberder</button>
                {isOpen && (
                    <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 border-b border-b-white/20">
                        <ul className="grid gap-2">
                            {routes.map((route) => {
                                return (
                                    <li
                                        key={route.title}
                                        className="w-full p-[0.08rem] rounded-xl text-white"
                                    >
                                        <Link
                                            onClick={() => setOpen((prev) => !prev)}
                                            className={
                                                "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                                            }
                                            href={route.href}
                                        >
                                            <span className="flex gap-1 text-lg">{route.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
