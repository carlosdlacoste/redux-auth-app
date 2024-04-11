import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const {email, password} = await request.json()
        if(email == null || password == null) return NextResponse.json({"message": "Email or password is missing"}, {status: 401})
        const userRegistered = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if(userRegistered == null) return NextResponse.json({"message": "User not found"}, {status: 404})
        const correctPassword = await bcrypt.compare(password, userRegistered.password)
        if(correctPassword){
                const secret = process.env.JWT_SECRET
                const token = jwt.sign({email: userRegistered.email}, secret, {expiresIn: "20m"})
                return NextResponse.json({"token": token, "user": userRegistered})
        }
        return NextResponse.json({"message": "password doesn't match"}, {status: 401})
    } catch (error) {
        return NextResponse.json(error.message)
    }
}