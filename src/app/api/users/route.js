import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";
import bcrypt from "bcrypt";

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
        const data = await request.json()
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const newUser = await prisma.user.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                password: hashedPassword
            }
        })
        return NextResponse.json(newUser)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}