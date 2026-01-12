import ContactList from "@/components/ContactList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contacts() {
    return (
        <div className="min-h-screen py-8 px-4 bg-linear-to-b from-purple-100 to-purple-400">
            <div className="container mx-auto max-w-4xl">
                <Link href={"/"}>
                    <Button variant={"outline"} size={"sm"} className="cursor-pointer mb-4 border border-black bg-gray-50 hover:bg-gray-300" >Back To Form</Button>
                </Link>

                <ContactList />
            </div>
        </div>
    )
}