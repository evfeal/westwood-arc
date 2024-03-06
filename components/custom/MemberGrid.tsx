import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image, { StaticImageData } from "next/image";

export function MemberGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto my-[3rem] md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

interface HeaderProps {
  img: StaticImageData;
}

const Header = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Zackery Huang",
    description: "President",
    header: <Header />,
    className: "md:col-span-1",
  },
  {
    title: "Sanjana Iyer",
    description: "Vice President",
    header: <Header />,
    className: "md:col-span-1",
  },
  {
    title: "Evan Alvarez",
    description: "Chief Technical Officer",
    header: <Header />,
    className: "md:col-span-1",
  },
  {
    title: "Kevin Xu",
    description: "[ Role In ARC ]",
    header: <Header />,
    className: "md:col-span-1",
  },
  {
    title: "Evan Wu",
    description: "[ Role In ARC ]",
    header: <Header />,
    className: "md:col-span-1",
  },
  {
    title: "Browning Lind",
    description: "[ Role In ARC ]",
    header: <Header />,
    className: "md:col-span-1",
  },
];
