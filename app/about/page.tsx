"use client";

import FadeIn from "react-fade-in";
import { MemberGrid } from "@/components/custom/MemberGrid";

export default function App() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center h-[10rem] ">
        <h1 className="text-5xl">About Us</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl my-10">What is ARC?</h1>
        <p className="text-lg text-center w-[40%]">
          At ARC, our goal is to promote and develop a strong student-driven
          research community. We create an academic environment that encourages
          problem solving, critical thinking, and independence. We do this by
          removing many of the obstacles in a research project that may hinder
          progress, such as funding, procrastination, and time commitments.
          Furthermore, we simulate a realistic research institute by setting
          required deadlines, write-ups, and reports. Through this environment,
          we're able to foster research projects that allow students to pursue
          their passions at a high academic level all while benefiting the
          community through a long-term project.
        </p>

        <p className="text-lg text-center w-[40%] my-[2rem]">
          ARC has been present at Westwood since 2022. Founded by Zackery Huang,
          ARC provides academic guidance, funding, and support to help you
          shine. Our leadership team is here to aid your curiosity and unlock
          your potential.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Members</h1>
        <MemberGrid />
      </div>
    </FadeIn>
  );
}
