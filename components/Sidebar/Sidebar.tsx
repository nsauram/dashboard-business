import Logo from "../Logo/Logo";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";

export default function Sidebar (){
    return(
        <>
        <div className="h-screen">
            <div className="flex flex-col h-full ">
                <Logo/>
                <SidebarRoutes/>
            </div>
        </div>
        </>
    )
}