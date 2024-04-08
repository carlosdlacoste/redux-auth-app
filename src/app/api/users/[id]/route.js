import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";


export async function GET(request, {params}){
    try {
        
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}


export async function DELETE(request, {params}) {
    await prisma.user.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json({"message": `User ${params.id} has been eliminated`})
}


