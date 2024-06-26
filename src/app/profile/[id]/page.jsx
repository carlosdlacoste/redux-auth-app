"use client"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserByID } from "@/redux/userSlice"
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation"

const Profile = ({params}) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.users.userByID)
    const token = useSelector(state => state.auth.token)
    const router = useRouter()
    // const unAuthorizedAlert = Swal.fire({
    //     title: "Error: Unauthorized",
    //     text: "You have no permissions to see this page. Please, sign in or sign up!",
    //     icon: "error"
    // }).then((result) => {
    //     router.push('/')
    // });

    useEffect(() => {
        const userIsAuthenticated = async () => {
            if(!token){
                Swal.fire({
                    title: "Error: Unauthorized",
                    html: "You have no permissions to see this page.<br>Please, sign in or sign up!",
                    icon: "error",
                    background: "rgb(17 24 39)",
                    color: "white",
                    confirmButtonColor: "rgb(185 28 28)"
                })
                router.push('/')
            }
            else dispatch(getUserByID(params))
        }
        userIsAuthenticated()
    }, [])


    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
                {
                    token &&
                    <>
                        <div className="mb-7 pb-2">
                            <h3 className="text-2xl font-bold color-change">Bienvenido {user && user.fullName ? user.fullName.split(' ')[0] : "..."}!</h3>
                        </div>
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center">
                                <img className="w-48 h-48 my-3 rounded-full shadow-lg hover:scale-150" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto perfil de prueba" />
                                {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5> */}
                                <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 hover:scale-150">
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
                                                <i className="fa-solid fa-id-card" /> : {user ? user.id : "..."}
                                            </th>
                                        </tr>
                                        <tr className="bg-gray-700 border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="text-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-gray-900" colSpan="100%">
                                                <i className="fa-solid fa-signature" /> : {user ? user.fullName : "..."}
                                            </th>
                                        </tr>
                                        <tr className="bg-gray-700 dark:bg-gray-800">
                                            <th scope="row" className="text-center px-6 py-4 font-medium text-white whitespace-nowrap dark:text-gray-900" colSpan="100%">
                                                <i className="fa-solid fa-envelope" /> : {user ? user.email : "..."}
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
export default Profile