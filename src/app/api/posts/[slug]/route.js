import prisma from "@/utils/connect"
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {

    const {slug} = params;

    try {

        let data = await prisma.post.findUnique({
            where : {slug}
        })

        console.log("hiiiii");

        
        if(data){

            console.log("di updateeee");


            data = await prisma.post.update({
                where : {slug},
                data : {views : {increment : 1}}
            })
        }
        return new NextResponse(JSON.stringify(data, {status : 200}));

    } catch (error) {
        console.log("Error di api category");
        console.log(error);

        return new NextResponse(JSON.stringify({message : "Ada Error pada Categeroies "}, {status : 200}));
    }
}