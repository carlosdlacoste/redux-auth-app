"use client"
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/authSlice";
import { setUserWithStorage } from "@/redux/authSlice";

const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [passwordIsEmpty, setPasswordIsEmpty] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogIn = async (event) => {
        event.preventDefault()
        const response = await dispatch(login({email, password}))
        if(response.type === login.fulfilled.type) {
            await dispatch(setUserWithStorage())
            router.push('/')
        }
    }

    const handlePassword = (event) => {
        event.preventDefault()
        if(password === '' || password === null || password === undefined || event.target.value === ''){

            setPasswordIsEmpty(true)
        }
        else{
            setPasswordIsEmpty(false)
        }
        setPassword(event.target.value)
    }

    const clearPassword = (event) => {
        event.preventDefault()
        setPassword("")
        setPasswordIsEmpty(!passwordIsEmpty)
    }

    const handleVisibilityPassword = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)
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
                            <div className="mt-2 relative">
                                <input id="password" name="password" onChange={handlePassword} value={password || ''} type={showPassword ? "text": "password"} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    {
                                        !showPassword ?
                                        <>
                                            <i className="fa-regular fa-eye-slash cursor-pointer" onClick={(event) => handleVisibilityPassword(event)}/>
                                        </>
                                        :
                                        <>
                                            <i className="fa-regular fa-eye cursor-pointer" onClick={(event) => handleVisibilityPassword(event)}/>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-y-3">
                            {
                                !passwordIsEmpty && <button onClick={clearPassword} className="flex justify-center w-full bg-gray-300 text-red-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-gray-500 hover:border-2 border-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Clear Password</button>
                            }
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