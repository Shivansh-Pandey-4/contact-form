"use server";

import { State } from "@/lib/types";
import prisma from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma/client";

export async function createUser(prevState: State, formData: FormData){
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();
  const subject = formData.get("subject")?.toString();
  const message = formData.get("message")?.toString();

  if (!email?.trim() || !name?.trim() || !subject?.trim() || !message?.trim()) {
    return {
      success: false,
      error: {
        email: !email ? "email not provided" : undefined,
        name: !name ? "name not provided" : undefined,
        subject: !subject ? "subject not provided" : undefined,
        message: !message ? "message not provided" : undefined,
      },
      msg: "All fields are required",
      submitNo : prevState.submitNo +1
    };
  }

  const formattedField = {
     email: email.trim().toLowerCase(),
        name: name.trim(),
        subject: subject.trim(),
        message: message.trim(),
  }

  try {
    await prisma.contactForm.create({
      data: formattedField
    });

    return {
      success: true,
      msg: "Message sent successfully",
      submitNo: prevState.submitNo + 1
    };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        success: false,
        msg: "This email has already been used",
        submitNo : prevState.submitNo + 1
      };
    }

    return {
      success: false,
      msg: "Server issue: failed to send message",
      error : error instanceof Error ? error.message : "issue is unknown",
      submitNo : prevState.submitNo + 1
    };
  }
}


export async function getContactForm(){

    try {
       const allContacts = await prisma.contactForm.findMany();
       return {
         success : true,
         msg : "all contact forms",
         allContacts
       }

    } catch (error) {
      console.log(error);
      
      return {
         success : false,
         msg : "something went wrong",
         error : error instanceof Error ? error.message : "unknown currently"
      }
    }
}
