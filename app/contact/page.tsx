"use client";

import FadeIn from "react-fade-in";

export default function App() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center h-[10rem] ">
        <h1 className="text-5xl font-bold">Contact & Meeting Information</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl my-10">Meeting Times</h1>
        <p className="text-lg text-center sm:w-[40%] w-[50%]">
          ARC meets every thursday at 12400 Mellow Meadow Dr, Austin, TX
          (Westwood High School) in room D2301 (Mr. Sauers room).
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl my-10">Contact & Joining</h1>
        <p className="text-lg text-center sm:w-[40%] w-[50%]">
          Call or Email to join:
        </p>
        <p className="text-lg text-center sm:w-[40%] w-[50%]">
          <a href="tel:+1-512-508-0058">512-508-0058</a> or{" "}
          <a
            className="text-blue-500"
            href="mailto:analyzerealizecatalyze@gmail.com"
          >
            analyzerealizecatalyze@gmail.com
          </a>
        </p>
      </div>
    </FadeIn>
  );
}
