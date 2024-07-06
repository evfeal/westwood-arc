"use client";

import FadeIn from "react-fade-in/lib/FadeIn";

export default function NotFound() {
  return (
    <>
      <FadeIn>
        <div className="flex flex-col items-center justify-center h-[45rem]">
          <h1 className="text-8xl">404</h1>
          <h1 className="text-6xl">Page Not Found</h1>
        </div>
      </FadeIn>
    </>
  );
}
