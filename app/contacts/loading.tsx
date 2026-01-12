"use client";
import { Loader } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1>Loading...</h1>
            <Loader></Loader>
        </div>
    )
}