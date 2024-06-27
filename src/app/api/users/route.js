import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function GET(request) {
    const secretKey = request.headers.get('x-secret-key')
    if(secretKey !== process.env.MY_SECRET_KEY) return NextResponse.json({"message": "Access denied"})
    try {
        const users = await prisma.user.findMany()
        if (users.length !== 0) return NextResponse.json(users, {status: 200})
        return NextResponse.json({"message": "There are no users!"}, {status: 404})
        
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export async function POST(request) {
    try {
        const data = await request.json()
        if(data.fullName == null) return NextResponse.json({"message": "full name was not found"}, {status: 404})
        if(data.email == null) return NextResponse.json({"message": "Email was not found"}, {status: 404})
        if(data.password == null) return NextResponse.json({"message": "Password was not found"}, {status: 404})
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