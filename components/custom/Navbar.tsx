import Link from "next/link";
import Image from "next/image";
import arcLogo from "@/public/arc_logo.png";

export default function Navbar() {
    return (
        <header className="grid grid-cols-1 px-4 py-6 bg-opacity-0">
            <Link
                className="flex flex-row row-start-1 row-end-1 col-start-1 col-end-1 text-2xl items-center font-bold text-gray-100"
                href="#"
            >
                <Image
                    src={arcLogo}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
                <h1 className="text-black">Westwood ARC</h1>
                <span className="sr-only">ARC Logo</span>
            </Link>
            <nav className="flex flex-row m-auto space-x-10 row-start-1 row-end-1 col-start-1 col-end-1">
                <Link className="text-black text-xl hover:underline" href="/">
                    Home
                </Link>
                <Link className="text-black text-xl hover:underline" href="/about">
                    About
                </Link>
                <Link className="text-black text-xl hover:underline" href="/program">
                    Program
                </Link>
                <Link
                    className="text-black text-xl hover:underline"
                    href="/testimonials"
                >
                    Testimonials
                </Link>
            </nav>
        </header>
    );
}
