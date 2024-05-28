"use client"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromStorage } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

const NavBar = () =>{
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const router = useRouter()
    const handleLogOut = () =>{
        dispatch(removeUserFromStorage())
        router.push("/")
    }
    return(
        <>
            <nav className="bg-gray-950">
                <div className="mx-auto max-w-7xl p-2 sm:px-8 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <h2 className="text-white text-2xl">Auth System</h2>
                        </Link>
                        <div className="space-x-4">
                            {!token ?
                            <>
                                <Link href="/login">
                                    <button className="bg-green-700 hover:bg-slate-300 py-2 px-4 rounded-md border-2 border-slate-50 text-sm">Log In</button>
                                </Link>
                                <Link href="/signup">
                                    <button className="bg-yellow-600 hover:bg-slate-300 py-2 px-4 rounded-md border-2 border-slate-50 text-sm">Sign up</button>
                                </Link>
                            </>
                            :
                            <>
                                    <button className="bg-red-700 hover:bg-slate-300 py-2 px-4 rounded-md border-2 border-slate-50 text-sm" onClick={handleLogOut}>Log Out</button>
                            </>

                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;