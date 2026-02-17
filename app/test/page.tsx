"use client";

import { CopyButton } from "@/registry/flowui/components/copy-button/copy-button";
import { GithubAuthButton, GoogleAuthButton } from "@/registry/flowui/components/auth-buttons";
import ChangingText from "@/registry/flowui/animated-components/changing-text";
import Speaker from "@/registry/flowui/components/speaker";
import StackedCard from "@/registry/flowui/animated-components/stacked-card";

const TestPage = () => {
    const handleClick = () => {
        console.log("Github clicked");
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center font-poppins gap-10">
            <div>
                <CopyButton animated />
            </div>
            <div className="flex gap-5">
                <GoogleAuthButton />
                <GithubAuthButton />
            </div>
            <div className="mt-5">
                <ChangingText
                    initialText="Hello"
                    finalText="World"
                    className="text-5xl font-bold"
                    variant="default"
                />
            </div>
            <div className="mt-5">
                <Speaker text="Hi this is kushal" />
            </div>
            <StackedCard>
                <div className="size-50 flex justify-center items-center bg-accent rounded-2xl">Hello</div>
                <div className="size-50 flex justify-center items-center bg-accent rounded-2xl">Hi</div>
                <div className="size-50 flex justify-center items-center bg-accent rounded-2xl">I am Kushal</div>
            </StackedCard>
        </div>
    )
}

export default TestPage;