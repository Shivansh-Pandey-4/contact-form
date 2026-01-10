"use client";

import { useActionState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { createUser } from "@/actions/action";
import { State } from "@/lib/types";
import { toast } from "react-toastify";


const initialState: State = {};

export default function FormClient() {

    const [state, action, isPending] = useActionState(createUser, initialState);

    useEffect(() => {
        if (state.success === false) {
            toast.error(state.msg || state.error?.toString());
        }

        if (state.success === true) {
            toast.success(state.msg);
        }
    }, [state.error])

    return (
        <div>
            <Card className="w-xl max-w-2xl">
                <CardHeader>
                    <CardTitle>
                        <h1>Contact Us Form</h1>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form action={action}>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3">
                                <div className="flex flex-col gap-1.5 w-full">
                                    <Label htmlFor="name">Name</Label>
                                    <Input required id="name" name="name" type="text" placeholder="ex: Max William" />

                                    {typeof state.error === "object" && state.error?.name && (
                                        <p className="text-red-500">{state.error.name}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1.5 w-full">
                                    <Label htmlFor="email">Email</Label>
                                    <Input required id="email" name="email" type="email" placeholder="ex: max@gmail.com" />

                                    {typeof state.error === "object" && state.error?.email && (
                                        <p className="text-red-500">{state.error.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="subject">Subject</Label>
                                <Input required id="subject" name="subject" type="text" placeholder="enter your subject" />


                                {typeof state.error === "object" && state.error?.subject && (
                                    <p className="text-red-500">{state.error.subject}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea required id="message" name="message" placeholder="enter your message? 🤔" />


                                {typeof state.error === "object" && state.error?.message && (
                                    <p className="text-red-500">{state.error.message}</p>
                                )}
                            </div>
                            <Button disabled={isPending} className="cursor-pointer">{isPending ? "Sending Wait..." : "Send Message"}</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}