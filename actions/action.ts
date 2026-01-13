"use server";

import { State } from "@/lib/types";
import prisma from "@/lib/db";
import { Prisma } from "@/lib/generated/prisma/client";
import { ContactStatus } from "@/lib/generated/prisma/client";
import { revalidatePath } from "next/cache";

export async function createUser(prevState: State, formData: FormData) {
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
      submitNo: prevState.submitNo + 1
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
        submitNo: prevState.submitNo + 1
      };
    }

    return {
      success: false,
      msg: "Server issue: failed to send message",
      error: error instanceof Error ? error.message : "issue is unknown",
      submitNo: prevState.submitNo + 1
    };
  }
}


export async function getContactForm() {

  try {
    const allContacts = await prisma.contactForm.findMany();
    return {
      success: true,
      msg: "all contact forms",
      allContacts: allContacts
    }

  } catch (error) {
    console.log(error);

    return {
      success: false,
      msg: "something went wrong",
      error: error instanceof Error ? error.message : "unknown currently"
    }
  }
}


export async function updateContactStatus(id: string | number, formData: FormData) {
  const status = formData.get("btn")?.toString();
  if (!status?.trim()) {
    return {
      success: false,
      error: "status not provided",
    }
  }

  if (!Object.values(ContactStatus).includes(status as ContactStatus)) {
    return {
      success: false,
      error: "invalid status value",
    };
  }

  try {
    const updatedForm = await prisma.contactForm.update({
      where: { id: typeof id === "number" ? id : parseInt(id) },
      data: { status: status as ContactStatus }
    })

    revalidatePath("/contacts");

    return {
      success: true,
      msg: "form updated successfully"
    }

  } catch (error) {
    return {
      success: false,
      msg: "failed to update form",
      error: error instanceof Error ? error.message : "unknown error"
    }
  }
}