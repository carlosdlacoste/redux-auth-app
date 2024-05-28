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
  // useEffect(() =>{
  //   dispatch(getUsers())
  // }, [])
  console.log(user)

  return (
      <>
      <h1 className="text-2xl text-slate-600 uppercase">Hola Mundo Magnifico</h1>
      <button onClick={() => router.push(`/profile/${user?.id}`)}>View Profile</button>
        {/* {token ?
        <>
        <Link href={`/profile/${params.id}`}>
          <Profile/>
        </Link>
        </>
        :
        <>
          <h1 className="text-2xl text-slate-600 uppercase">Hola Mundo Magnifico</h1>
        </>
        } */}

      </>
  );
}
