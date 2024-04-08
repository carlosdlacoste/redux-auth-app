import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET() {
    try {
        
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export async function POST(request) {
    try {
        const {fullName, email, password} = await request.json()
        const newUser = await prisma.user.create({
            data: {
                fullName,
                email,
                password
            }
        })
        return NextResponse.json(newUser)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}