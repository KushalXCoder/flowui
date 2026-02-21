"use client";

import { GoogleAuthButton } from "@/registry/flowui/components/auth-buttons";
import { Navbar, NavbarGroup, NavbarContent, NavbarItem, NavbarLogo, NavbarLogoText, NavbarCenter } from "@/registry/flowui/components/navbar/navbar";
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
                <NavbarCenter>
                    <Input placeholder="Search..." className="max-w-xs" />
                </NavbarCenter>
                <NavbarContent className="flex items-center">
                    <NavbarGroup>
                        <NavbarItem>Home</NavbarItem>
                        <NavbarItem>Features</NavbarItem>
                        <NavbarItem>Pricing</NavbarItem>
                        <NavbarItem>
                            <GoogleAuthButton variant="ghost" text="Sign In" onClick={handleClick} />
                        </NavbarItem>
                    </NavbarGroup>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default TestPage;