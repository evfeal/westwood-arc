"use client";

import FadeIn from "react-fade-in";
import { NewsGrid } from "@/components/custom/NewsGrid";

export default function App() {
    return (
        <FadeIn>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl">News</h1>
                <NewsGrid />
            </div>
        </FadeIn>
    );
}
