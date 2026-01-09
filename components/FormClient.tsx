"use client";

import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function FormClient() {
    return (
        <div>
            <Card className="w-xl max-w-2xl">
                <CardHeader>
                    <CardTitle>
                        <h1>Contact Us Form</h1>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form action="">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3">
                                <div className="flex flex-col gap-1.5 w-full">
                                    <Label htmlFor="name">Name</Label>
                                    <Input required id="name" name="name" type="text" placeholder="ex: Max William" />
                                </div>
                                <div className="flex flex-col gap-1.5 w-full">
                                    <Label htmlFor="email">Email</Label>
                                    <Input required id="email" name="email" type="email" placeholder="ex: max@gmail.com" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="subject">Subject</Label>
                                <Input required id="subject" name="subject" type="text" placeholder="enter your subject" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea required id="message" name="message" placeholder="enter your message? 🤔" />
                            </div>
                            <Button className="cursor-pointer">Send Message</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}