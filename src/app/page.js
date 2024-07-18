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
            <div className="flex h-screen justify-center items-center">
              <h1 className="text-2xl text-slate-600">Bienvenido al moderno sistema de autenticación Redux-Auth-System!</h1>
            </div>
          </>
        }

      </>
  );
}
