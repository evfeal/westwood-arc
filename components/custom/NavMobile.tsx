import Link from "next/link";
import { routes } from "@/utils/routes";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

export default function NavbarMobile() {
    return (
        <>
            <div className="visible sm:invisible flex flex-row row-start-1 row-end-1 col-start-1 col-end-1 text-2xl items-center justify-end font-bold">
                <Sheet>
                    <SheetTrigger aria-label="Menu Button">
                        <SheetContent>
                            <SheetHeader className="gap-4 py-24">
                                {routes.map((route) => {
                                    return (
                                        <SheetTitle className="flex flex-col">
                                            <Link href={route.href} className="text-3xl">
                                                {route.title}
                                            </Link>
                                        </SheetTitle>
                                    );
                                })}
                            </SheetHeader>
                        </SheetContent>
                        <Menu size={32} />
                    </SheetTrigger>
                </Sheet>
            </div>
        </>
    );
}
