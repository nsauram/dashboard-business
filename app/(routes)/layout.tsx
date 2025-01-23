import Navbar from "@/components/Navbar/Navbar"

export default function LayoutDashoard({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex w-full h-full">
                <div className="hidden xl:block w-80 h-full xl:fixed">
                    <div>
                        <h2 className="text-2xl mb-4">Dashboard</h2>
                    </div>
                    sidbar
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