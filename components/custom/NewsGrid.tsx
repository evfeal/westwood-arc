import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image, { StaticImageData } from "next/image";

import zackery_huang from "@/public/zackery_huang.jpg";

export function NewsGrid() {
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
  name: string;
}

const Header = (props: HeaderProps) => (
  <div className="flex flex-1 w-full h-full relative min-h-[6rem] rounded-xl border border-transparent bg-neutral-100 ">
    <Image
      src={props.img}
      className="rounded-sm object-cover"
      sizes="(min-width: 808px) 50vw, 100vw"
      alt={`Image of ${props.name}`}
    />
  </div>
);

const items = [
  {
    title: "News Entry #1",
    description: "Just a placeholder for an article that will be here soon...",
    header: <Header img={zackery_huang} name="News Entry #1" />,
    className: "md:col-span-1",
  },
];
