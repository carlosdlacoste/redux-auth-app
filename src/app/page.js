"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "@/redux/userSlice";



export default function Home() {
  
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() =>{
    dispatch(getUsers())
  }, [])

  console.log(users)

  return (
      <>
        <h1 className="text-2xl text-slate-600 uppercase">Hola Mundo Magnifico</h1>
      </>
  );
}
