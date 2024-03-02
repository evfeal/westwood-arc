import ARCTypewriter from "@/components/custom/ARCTypewriter";

export default function App() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[40rem] ">
                <ARCTypewriter />
            </div>
            <div className="flex flex-col items-center justify-center h-[40rem] ">
                <div className="flex flex-col">
                    <h1 className="text-4xl m-[2rem]">
                        "Research is formalized curiosity, It is poking and prying with a
                        purpose"
                    </h1>
                    <h1 className="text-2xl text-end">- Zora Neale Hurston</h1>
                </div>
                <div className="text-xl w-[50%] m-[2rem] text-center">
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
                </div>
            </div>
        </>
    );
}
