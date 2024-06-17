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
                {/* <div className="mb-5">
                    <h3>Bienvenido {user.fullName}!</h3>
                </div>
                <div className="w-48 h-48 mb-3">
                    <img className="object-cover object-top h-full w-full rounded-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto perfil de prueba" />
                </div>
                <div className="text-center">
                    <p><i className="fa-solid fa-id-card" /> : {user.id}</p>
                    <p><i className="fa-solid fa-signature" /> : {user.fullName}</p>
                    <p><i className="fa-solid fa-envelope" /> : {user.email}</p>
                </div> */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto perfil de prueba" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile