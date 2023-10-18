import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await prisma.post.create({
        data : {
            "slug" : "judul-3",
            "title" : "Ini Judul 3",
            "desc" : "lorem Ipsum",
            "img" : "p1.jpeg",
            "catSlug" : "travel",
            "userEmail" : "user@gmail.com"
        }
    })

    return new NextResponse(data, {status : 200});
}