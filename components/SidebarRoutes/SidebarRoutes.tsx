'use client'

import { Separator } from "@/components/ui/separator"
import { dataGeneralSidebar, dataToolsSidebar, dataSupportSidebar } from "./SidebarRoutes.data"
import SidebarItems from "../SidebarItem/SidebarItem"
import { Button } from "../ui/button"

export default function SidebarRoutes() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div >
                    <div className="p-2 md:p-6">
                        <p className="uppercase font-semibold text-slate-500 mb-2">General</p>
                        {dataGeneralSidebar.map((item) => (
                            <div>
                                <SidebarItems key={item.label} item={item} />
                            </div>
                        ))}
                    </div>
                    <Separator />
                    <div className="p-2 md:p-6">
                        <p className="uppercase font-semibold text-slate-500 mb-2">Tools</p>
                        {dataToolsSidebar.map((item) => (
                            <div>
                                <SidebarItems key={item.label} item={item} />
                            </div>
                        ))}
                    </div>
                    <Separator />
                    <div className="p-2 md:p-6">
                        <p className="uppercase font-semibold text-slate-500 mb-2">Support</p>
                        {dataSupportSidebar.map((item) => (
                            <div>
                                <SidebarItems key={item.label} item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-2 md:p-6">
                    <div className="text-center p-6">
                        <Button variant='outline' className='w-full'>
                            Upgrade Plan
                        </Button>
                    </div>
                    <Separator />
                    <footer className="mt-3 p-3 text-center">
                        2025. All Rights
                    </footer>
                </div>
            </div >
        </>
    )
}