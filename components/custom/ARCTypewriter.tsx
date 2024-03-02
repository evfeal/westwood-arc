"use client";

import { useEffect, useState } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import FadeIn from "react-fade-in";

export default function MainPageTypewriter() {
  const [showingSecond, setShowingSecond] = useState(false);
  const [showingThird, setShowingThird] = useState(false);
  const [showingQuote, setShowingQuote] = useState(false);

  useEffect(() => {
    if (!showingSecond) {
      setTimeout(() => {
        setShowingSecond(true);
      }, 1000);
    } else if (!showingThird) {
      setTimeout(() => {
        setShowingThird(true);
      }, 1000);
    } else if (!showingQuote) {
      setTimeout(() => {
        setShowingQuote(true);
      }, 1500);
    }
  }, [showingSecond, showingThird, showingQuote]);

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
      {showingQuote && (
        <FadeIn className="flex flex-col my-[2rem]">
          <h1 className="text-4xl m-[2rem]">
            "Research is formalized curiosity, It is poking and prying with a
            purpose"
          </h1>
          <h1 className="text-2xl text-end">- Zora Neale Hurston</h1>
        </FadeIn>
      )}
    </>
  );
}
