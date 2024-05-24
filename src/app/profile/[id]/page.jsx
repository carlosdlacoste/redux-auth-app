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
            <div>
                <h3>Bienvenido! {user.fullName}</h3>
            </div>
            <div>
                <p>ID: {user.id}</p>
                <p>Full Name: {user.fullName}</p>
                <p>Email: {user.email}</p>
            </div>
        </>
    )
}
export default Profile