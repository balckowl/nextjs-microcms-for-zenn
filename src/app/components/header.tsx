import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ModeToggle } from "@/components/mode-toggle";

type MenuItemType = {
    title: string,
    href: string
}

export default function Header() {

    const menuList: MenuItemType[] = [
        { title: "Skills", href: "#Skills" },
        { title: "Works", href: "#Works" },
        { title: "contact", href: "#Contact" },
    ]

    return (
        <header className="h-[80px] border-b">
            <div className="container flex justify-between items-center h-full">
                <h1>ポートフォリオ</h1>
                <ul className="md:flex items-center md:gap-4 hidden">
                    {menuList.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))}
                    <li>
                        <ModeToggle varient="ghost" />
                    </li>
                </ul>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost">
                                <FontAwesomeIcon icon={faBars} className="w-[25px] h-[25px]" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <ul className="space-y-4">
                                {menuList.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                ))}
                                <li className="border-t pt-[10px]">
                                    <ModeToggle varient="ghost" />
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
