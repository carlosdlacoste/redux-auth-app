import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";
import jwt from 'jsonwebtoken'


export async function GET(request, {params}){
    const authorization = request.headers.get('authorization')
    if(!authorization) return NextResponse.json({"message": "The auth token was not provided"}, {status: 401})
    const token = authorization.split(' ')[1]
    if (!token) return NextResponse.json({"message": "Token is missing or format is incorrect"}, {status: 401});
    try {
        const userVerified = jwt.verify(token, process.env.JWT_SECRET)
        if(!userVerified) return NextResponse.json({"message": "Error! You are not authorized"}, {status: 404})
        const user = await prisma.user.findUnique({
            where: {
                id: Number(userVerified.id)
            }
        })
        if(user !== null && Number(params.id) === Number(userVerified.id)) return NextResponse.json(user, {status: 200})
        return NextResponse.json({"message": "Error! That user doesn't exist"}, {status: 404})
    } catch (error) {
        return NextResponse.json(error.message)
    }
}


export async function DELETE(request, {params}) {
    const secretKey = request.headers.get('x-secret-key')
    if(secretKey !== process.env.MY_SECRET_KEY) return NextResponse.json({"message": "You have no permission to this action"})
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        if(user !== null){

            const userDeleted = await prisma.user.delete({
                where: {
                    id: Number(params.id)
                }
            })
            if(userDeleted !== null) return NextResponse.json({"message": `User with id ${params.id} has been eliminated`, user: userDeleted})
        }
        return NextResponse.json({"message": "User not found"})
    } catch (error) {
        return NextResponse.json(error.message)
    }

}


