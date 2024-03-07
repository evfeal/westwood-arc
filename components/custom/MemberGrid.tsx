import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image, { StaticImageData } from "next/image";
import evan_alvarez from "@/public/evan_alvarez.jpg";

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
        title: "Zackery Huang",
        description: "President",
        header: <Header name="Zackery Huang" />,
        className: "md:col-span-1",
    },
    {
        title: "Sanjana Iyer",
        description: "Vice President",
        header: <Header name="Sanjana Iyer" />,
        className: "md:col-span-1",
    },
    {
        title: "Evan Alvarez",
        description: "Chief Technical Officer",
        header: <Header img={evan_alvarez} name="Evan Alvarez" />,
        className: "md:col-span-1",
    },
    {
        title: "Kevin Xu",
        description: "[ Role In ARC ]",
        header: <Header name="Kevin Xu" />,
        className: "md:col-span-1",
    },
    {
        title: "Evan Wu",
        description: "[ Role In ARC ]",
        header: <Header name="Evan Wu" />,
        className: "md:col-span-1",
    },
    {
        title: "Browning Lind",
        description: "[ Role In ARC ]",
        header: <Header name="Browning Lind" />,
        className: "md:col-span-1",
    },
];
