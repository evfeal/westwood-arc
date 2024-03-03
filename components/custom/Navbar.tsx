import Link from "next/link";
import Image from "next/image";
import arcLogo from "@/public/arc_logo.png";
import NavbarDesktop from "@/components/custom/NavDesktop";
import NavbarMobile from "@/components/custom/NavMobile";

export default function Navbar() {
  {
    return (
      <header className="grid grid-cols-1 px-4 py-6 bg-opacity-0">
        <Link
          className="flex flex-row row-start-1 row-end-1 col-start-1 col-end-1 text-2xl items-center font-bold text-gray-100"
          href="#"
        >
          <Image
            src={arcLogo}
            alt="Cool Logo for ARC"
            priority
            className="w-auto h-auto"
          />
          <h1 className="text-black dark:text-white invisible mx-3 lg:visible">
            Westwood ARC
          </h1>
          <span className="sr-only">ARC Logo</span>
        </Link>
        <NavbarDesktop />
        <NavbarMobile />
      </header>
    );
  }
}
