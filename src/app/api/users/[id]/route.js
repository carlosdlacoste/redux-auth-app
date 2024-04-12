import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";


export async function GET(request, {params}){
    try {
        
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        if(user !== null) return NextResponse.json(user, {status: 200})
        return NextResponse.json({"message": "Error! That user doesn't exist"}, {status: 404})
    } catch (error) {
        return NextResponse.json(error.message)
    }
}


export async function DELETE(request, {params}) {
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


