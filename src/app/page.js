"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "@/redux/userSlice";
import {Profile} from "./profile/[id]/page";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {

  const dispatch = useDispatch()
  // const users = useSelector(state => state.users)
  const token = useSelector(state => state.auth.token)
  const user = useSelector(state => state.auth.userLoggedIn)
  const router = useRouter()
  useEffect(() =>{
    if(token) router.push(`/profile/${user?.id}`)
  }, [])

  return (
      <>
        {!token &&
          <>
            <h1 className="text-2xl text-center text-slate-600 font-bold p-6">Welcome to the state-of-the-art Redux Auth System!</h1>
              <p className="text-center text-xl">
                Redux-Auth-System is your secure and reliable solution for user management.
                Register or log in to access all our functionalities and enjoy a personalized experience.
                You can find the registration and login forms in the “Sign Up” and “Log In” sections respectively
                in the NavBar at the top of your screen &#x261D;.
              </p>
            <div className="flex flex-col h-screen justify-center items-center px-6 py-12">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>
                      At least 10 characters (and up to 100 characters)
                  </li>
                  <li>
                      At least one lowercase character
                  </li>
                  <li>
                      Inclusion of at least one special character, e.g., ! @ # ?
                  </li>
              </ul>
            </div>
          </>
        }

      </>
  );
}
