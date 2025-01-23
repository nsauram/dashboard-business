import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar"

export default function LayoutDashoard({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex w-full h-full ">
                <div className="hidden md:block w-80 h-full xl:fixed">
                    <Sidebar/>
                </div>
                <div className="w-full xl:ml-80">
                    <Navbar />
                    <div className="p-8 bg-[#fafbfc] dark:bg-secondary">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}