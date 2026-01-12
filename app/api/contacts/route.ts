import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const allContacts = await prisma.contactForm.findMany();
        if(allContacts.length === 0){
             return NextResponse.json(
                {
                    success : true,
                    msg : "currently contacts form is empty",
                    allContacts
                }
             )
        }

        return NextResponse.json(
            {
                success : true,
                msg : "all contacts",
                allContacts
            },{status : 200}
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                success : false,
                msg : "failed to fetch form: internal server issue",
                error : error instanceof Error ? error.message : "check server console"
            },{status : 500}
        )
    }
}