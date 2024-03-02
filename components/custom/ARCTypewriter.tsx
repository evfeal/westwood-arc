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

    const word1 = [
        {
            text: "Analyze.",
            className: "text-[4rem] py-[0.3rem]",
        },
    ];
    const word2 = [
        {
            text: "Realize.",
            className: "text-[4rem] py-[0.3rem]",
        },
    ];
    const word3 = [
        {
            text: "Catalyze.",
            className: "text-[4rem] py-[0.3rem]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem] ">
            <TypewriterEffect words={word1} cursorClassName="bg-opacity-0" />
            {showingSecond && (
                <TypewriterEffect words={word2} cursorClassName="bg-opacity-0" />
            )}
            {showingThird && (
                <TypewriterEffect words={word3} cursorClassName="bg-opacity-0" />
            )}
        </div>
    );
}
