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
                    <div className="flex flex-col items-center">
                        <img className="w-48 h-48 my-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto perfil de prueba" />
                        {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5> */}
                        <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="text-center px-6 py-3" colSpan="100%">
                                        Profile details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-700 border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="text-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-gray-900" colSpan="100%">
                                        <i className="fa-solid fa-id-card" /> : {user.id}
                                    </th>
                                </tr>
                                <tr className="bg-gray-700 border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="text-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-gray-900" colSpan="100%">
                                        <i className="fa-solid fa-signature" /> : {user.fullName}
                                    </th>
                                </tr>
                                <tr className="bg-gray-700 dark:bg-gray-800">
                                    <th scope="row" className="text-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-gray-900" colSpan="100%">
                                        <i className="fa-solid fa-envelope" /> : {user.email}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile