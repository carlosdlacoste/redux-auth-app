"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addNewUser } from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () =>{

    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const router = useRouter()

    const handleAddUser = async (event) =>{
        event.preventDefault()
        const response = await dispatch(addNewUser(user))
        if(response.type === addNewUser.fulfilled.type) {
            router.push('/login')
        }
    }

    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input id="fullName" name="full-name" type="text" onChange={(event) => setUser({...user, fullName: event.target.value})} value={user.fullName || ''} autoComplete="full-name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" onChange={(event) => setUser({...user, email: event.target.value})} value={user.email || ''} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" onChange={(event) => setUser({...user, password: event.target.value})} value={user.password || ''} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button onClick={(event) => handleAddUser(event)} className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account? {" "}
                        <span href="#" className="font-semibold leading-6 text-gray-800 hover:text-gray-400 cursor-pointer">Sign in</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp