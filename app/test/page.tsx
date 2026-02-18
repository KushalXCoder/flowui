"use client";

import { CopyButton } from "@/registry/flowui/components/copy-button/copy-button";
import { GithubAuthButton, GoogleAuthButton } from "@/registry/flowui/components/auth-buttons";
import ChangingText from "@/registry/flowui/animated-components/changing-text";
import Speaker from "@/registry/flowui/components/speaker";
import { Navbar, NavbarContent, NavbarItem, NavbarLogo, NavbarLogoText } from "@/registry/flowui/blocks/navbar/navbar";
import Logo from "@/components/app-components/logo";
import { Input } from "@/components/ui/input";

const TestPage = () => {
    const handleClick = () => {
        console.log("Github clicked");
    }
    return (
        <div className="h-screen flex flex-col items-center font-poppins gap-10 px-20 py-7">
            {/* <div>
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
            </div> */}
            <Navbar className="w-full">
                <NavbarLogo>
                    <Logo className="size-7" />
                    <NavbarLogoText>FlowUI</NavbarLogoText>
                </NavbarLogo>
                <NavbarContent>
                    <NavbarItem>
                        <Input placeholder="Search..." />
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent>
                    <NavbarItem>Home</NavbarItem>
                    <NavbarItem>Features</NavbarItem>
                    <NavbarItem>Pricing</NavbarItem>
                    <NavbarItem>
                        <GoogleAuthButton variant="ghost" text="Sign In" onClick={handleClick} />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default TestPage;