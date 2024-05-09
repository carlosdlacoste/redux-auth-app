"use client"
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/authSlice";

const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogIn = async (event) => {
        event.preventDefault()
        console.log('paso 1')
        const response = await dispatch(login(email, password))
        console.log(response)
        if(response.type === login.fulfilled.type) {
            console.log('paso 3')
            router.push('/')
        }

    }

    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email || ''} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <span href="#" className="font-semibold cursor-pointer text-gray-800 hover:text-gray-400">Forgot password?</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password || ''} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button onClick={(event) => handleLogIn(event)} className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account yet? {" "}
                        <Link href="/signup">
                            <span className="font-semibold leading-6 text-gray-800 hover:text-gray-400 cursor-pointer">Sign up</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;