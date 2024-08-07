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
            <div className="flex flex-col justify-center items-center px-6 py-10">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Discover our functionalities:</h2>
              <ul className="max-w-md space-y-8 text-gray-500 list-inside dark:text-gray-400">
                  <li>
                    <div className="flex items-center space-x-4">
                      <div className="flex">
                        <div className="mr-2">•</div>
                        <span>In login page you can clear the whole password if you made a mistake while you were typing it.</span>
                      </div>
                      <Image src="/images/clear_password.png" alt="Clear password" width={200} height={200}/>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <div className="flex">
                        <div className="mr-2">•</div>
                        <span>You can use visibility icon inside password's input to see what you are typing.</span>
                      </div>
                      <Image src="/images/visibility_password.png" alt="Visibility password" width={200} height={200}/>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <div className="flex">
                        <div className="mr-2">•</div>
                        <span>You can see a validation after you send your credentials in the login form. If credentials are correct, you will see a welcome message. In any other case, you will see an error message.</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Image src="/images/succesful_login.png" alt="Succesful Login" width={200} height={200}/>
                        <Image src="/images/invalid_credentials.png" alt="Invalid Credentials" width={200} height={200}/>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <div className="flex">
                        <div className="mr-2">•</div>
                        <span>When you are authenticated, you can see your profile info. In any other case, you will see an error alert due to you have no permission to see private views.</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Image src="/images/profile_view.png" alt="Succesful Login" width={200} height={200}/>
                        <Image src="/images/permission_error.png" alt="Invalid Credentials" width={200} height={200}/>
                      </div>
                    </div>
                  </li>
              </ul>
            </div>
          </>
        }

      </>
  );
}
