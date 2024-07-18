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
            <h1 className="text-2xl text-center text-slate-600 font-bold p-6">Bienvenido al moderno sistema de autenticación Redux-Auth-System!</h1>
            <div className="flex h-screen justify-center items-center px-6 py-12">
              <p className="text-center text-xl">
                Redux-Auth-System es tu solución segura y confiable para la gestión de usuarios.
                Regístrate o inicia sesión para acceder a todas nuestras funcionalidades
                y disfrutar de una experiencia personalizada. Puedes encontrar los formularios de
                registro y inicio de sesión en la sección de "Sign Up" y "Log In" respectivamente
                en el NavBar que observas en la parte superior de tu pantalla &#x261D;.
              </p>
            </div>
          </>
        }

      </>
  );
}
