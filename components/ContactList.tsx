import { getContactForm, updateContactStatus } from "@/actions/action";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";


export default async function ContactList() {

    const dataTest = await getContactForm();


    return (
        <div className="space-y-6 mt-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Contact Message</h1>
                <Badge>{dataTest.allContacts?.length} messages</Badge>
            </div>
            {
                dataTest.allContacts?.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <Card className="w-2xl">
                            <CardHeader className="flex flex-col items-center justify-center pt-6">
                                <Mail className="h-12 w-12 " color={"red"} ></Mail>
                                <h1 className="text-lg font-semibold">Currently Contacts Detail is empty.</h1>
                            </CardHeader>
                        </Card>
                    </div>
                ) : (
                    <div className="">
                        {
                            dataTest.allContacts?.map((contact, index) => (
                                <Card className="mt-3" key={index}>
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center">
                                            <div>
                                                <h1>{contact.subject}</h1>
                                                <h2 className="text-sm text-gray-500">{contact.name} - {contact.email}</h2>
                                            </div>
                                            <Badge>{contact.status}</Badge>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-5">{contact.message}</p>
                                        <div className="border-t flex justify-between">
                                            <h1 className="mt-3 text-sm text-gray-400">Date - {contact.createdAt.toString()}</h1>
                                            {
                                                contact.status === "new" && <form action={async (formData: FormData) => {
                                                    "use server";
                                                    const input = await updateContactStatus(contact.id, formData);
                                                }} >
                                                    <Button type="submit" value="read" name="btn" className="mt-3 cursor-pointer" size={"sm"}>Mark as Read</Button>
                                                </form>
                                            }
                                            {
                                                contact.status === "read" && <form action={async (formData: FormData) => {
                                                    "use server";
                                                    await updateContactStatus(contact.id, formData);
                                                }}>
                                                    <Button value={"replied"} name="btn" type="submit" className="mt-3 cursor-pointer" size={"sm"}>Mark as Replied</Button>
                                                </form>
                                            }
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}