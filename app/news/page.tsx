"use client";

import FadeIn from "react-fade-in";
import { NewsGrid } from "@/components/custom/NewsGrid";

export default function App() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center h-[10rem] ">
        <h1 className="text-5xl font-bold">News</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-[22rem]">
        <NewsGrid />
      </div>
    </FadeIn>
  );
}
