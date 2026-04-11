"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const DeleteBoxForm = () => {
    const [content, setContent] = React.useState<string>("");
    const [deleted, setDeleted] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setContent(e.target.value);
    }

    const handleDelete = () => {
        if(content === "Delete this content") {
            setDeleted(true);
        } else {
            setMessage("Please type the correct text to delete the content.");
        }
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Input
                placeholder="Enter the text here"
                value={content}
                onChange={handleInput}
                required
            />
            {message && <p className="text-red-500 text-[12px] ps-2 mt-1">{message}</p>}
            <div className="flex gap-3 mt-3 *:min-w-30">
                <Button
                    type="submit"
                    variant={deleted ? "default" : "destructive"}
                    onClick={handleDelete}
                >
                    {deleted ? "Deleted" : "Delete"}
                </Button>
                <Button variant="outline">Cancel</Button>
            </div>
        </form>
    )
}