import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/nextjs"
import { Menu, Search } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center px-2 gap-x-4 w-full md:px-6 bg-background border-b h-20">
                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger className="flex items-center">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <SidebarRoutes/>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="relative w-[300px]">
                    <Input placeholder="Search..." className="rounded-lg" />
                    <Search strokeWidth={1} className="absolute top-2 right-2" />
                </div>
                <div className="flex gap-x-2 items-center">
                    <p>toggletheme</p>
                    <UserButton />
                </div>
            </div>

        </>
    )
}