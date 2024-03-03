import { Github } from "lucide-react";

export default function() {
    return (
        <footer className="shadow flex">
            <div className="container flex flex-wrap items-center px-4 justify-center py-8 mx-auto lg:justify-between">
                <div className="flex flex-wrap justify-center">
                    Created by Evan Alvarez
                    <a
                        className="mx-[0.5rem]"
                        href="https://github.com/evfeal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github />
                    </a>
                </div>
            </div>
            <div className="pb-2">
                <p className="text-center"></p>
            </div>
        </footer>
    );
}
