"use client";

import { useEffect, useState } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function MainPageTypewriter() {
    const [showingSecond, setShowingSecond] = useState(false);
    const [showingThird, setShowingThird] = useState(false);

    useEffect(() => {
        if (!showingSecond) {
            setTimeout(() => {
                setShowingSecond(true);
            }, 1100);
        } else if (!showingThird) {
            setTimeout(() => {
                setShowingThird(true);
            }, 1100);
        }
    }, [showingSecond, showingThird]);

    const words = [
        [
            {
                text: "Analyze.",
                className: "text-[4rem] py-[0.3rem]",
            },
        ],
        [
            {
                text: "Realize.",
                className: "text-[4rem] py-[0.3rem]",
            },
        ],
        [
            {
                text: "Catalyze.",
                className: "text-[4rem] py-[0.3rem]",
            },
        ],
    ];
    return (
        <>
            <TypewriterEffect words={words[0]} cursorClassName="bg-opacity-0" />
            {showingSecond && (
                <TypewriterEffect words={words[1]} cursorClassName="bg-opacity-0" />
            )}
            {showingThird && (
                <TypewriterEffect words={words[2]} cursorClassName="bg-opacity-0" />
            )}
        </>
    );
}
