export default function LayoutAuth ({children}:{children:React.ReactNode}){
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <p>Business Dashboard</p>
            <h1 className="text-3xl my-2">Welcome yo my Dashboard</h1>
            <h2 className="text-2xl mb-3">NoeliaDashboard</h2>
            {children}
        </div>
    )
}