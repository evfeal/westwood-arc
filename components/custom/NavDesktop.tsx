import Link from "next/link";
import { routes } from "@/utils/routes";

export default function NavbarDesktop() {
    return (
        <nav className="invisible sm:visible flex flex-row m-auto space-x-10 row-start-1 row-end-1 col-start-1 col-end-1">
            {routes.map((route) => {
                return (
                    <Link
                        className="text-black dark:text-white text-xl hover:underline"
                        href={route.href}
                    >
                        {route.title}
                    </Link>
                );
            })}
        </nav>
    );
}
