import prisma from "@/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    const data  = await prisma.user.findMany();

    // return new NextResponse(data, {status : 200});
    return new NextResponse(JSON.stringify(data, {status : 200}))
}

export const POST = async () => {
    const data = await prisma.user.create(
        {
            data : {
                name : "ami",
                email : "ami@gmail.com",
                image : "p1.jpeg"
            }
        }


    );
    return new NextResponse(JSON.stringify(data, {status : 200}));
}