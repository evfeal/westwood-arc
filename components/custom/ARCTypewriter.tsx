"use client";

import { useEffect, useState } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import FadeIn from "react-fade-in";

const quotes = [
  [
    {
      quote:
        "The important thing is not to stop questioning. Curiosity has its own reason for existing",
      author: "Albert Einstein",
    },
  ],
  [
    {
      quote:
        "Research is formalized curiosity, It is poking and prying with a purpose",
      author: "Zora Neale Hurston",
    },
  ],
  [
    {
      quote: "No research without action, no action without research",
      author: "Kurt Lewin",
    },
  ],
];

const randomElement = quotes[Math.floor(Math.random() * quotes.length)];

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
      }, 1075);
    }
  }, [showingSecond, showingThird, showingQuote]);

  const words = [
    [
      {
        text: "Analyze.",
        className: "text-[4rem] ",
      },
    ],
    [
      {
        text: "Realize.",
        className: "text-[4rem] ",
      },
    ],
    [
      {
        text: "Catalyze.",
        className: "text-[4rem] ",
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
          <h1 className="text-4xl m-[2rem]">{randomElement[0].quote}</h1>
          <h1 className="text-2xl text-end mx-[1.5rem]">
            - {randomElement[0].author}
          </h1>
        </FadeIn>
      )}
    </>
  );
}
