const NavBar = () =>{
    return(
        <>
            <nav className="bg-gray-950">
                <div className="mx-auto max-w-7xl p-2 sm:px-8 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-2xl">Auth System</h2>
                        <div className="space-x-4">
                            <button className="bg-green-700 hover:bg-slate-300 py-2 px-4 rounded-md border-2 border-slate-50 text-sm">Log In</button>
                            <button className="bg-yellow-600 hover:bg-slate-300 py-2 px-4 rounded-md border-2 border-slate-50 text-sm">Sign up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;