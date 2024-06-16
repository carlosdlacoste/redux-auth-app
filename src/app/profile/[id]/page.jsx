"use client"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserByID } from "@/redux/userSlice"

const Profile = ({params}) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.users.userByID)

    useEffect(() => {
        dispatch(getUserByID(params))
    }, [])

    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="w-48 h-48 mb-3">
                    <img className="object-cover object-top h-full w-full rounded-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto perfil de prueba" />
                </div>
                <div>
                    <h3>Bienvenido! {user.fullName}</h3>
                </div>
                <div>
                    <p>ID: {user.id}</p>
                    <p>Full Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </>
    )
}
export default Profile