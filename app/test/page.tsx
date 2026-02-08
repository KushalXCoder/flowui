"use client";

import { CopyButton } from "@/registry/flowui/copy-button/copy-button";
import { GithubAuthButton, GoogleAuthButton } from "@/registry/flowui/auth-buttons";

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
            {/* <div className="mt-5">
                <ChangingText
                    initialText="Hello"
                    finalText="World"
                    className="text-5xl font-bold"
                />
            </div> */}
        </div>
    )
}

export default TestPage;