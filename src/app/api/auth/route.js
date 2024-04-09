import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";

export async function POST(request) {
    try {
        const {email, password} = await request.json()
        const userRegistered = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        const secret = process.env.JWT_SECRET
        const token = jwt.sign({email: userRegistered.email}, secret, {expiresIn: "20m"})
        return NextResponse.json({"token": token, "user": userRegistered})
    } catch (error) {
        return NextResponse.json(error.message)
    }
}