"use client";

<<<<<<< Updated upstream
import { Navbar, NavbarContent, NavbarItem, NavbarLogo, NavbarLogoText } from "@/registry/flowui/blocks/navbar/navbar";
=======
import {
    Navbar,
    NavbarCenter,
    NavbarItem,
    NavbarLogo,
    NavbarLogoText,
    NavbarGroup,
    NavbarContent
} from "@/registry/flowui/components/navbar/navbar";
>>>>>>> Stashed changes
import { Command } from "lucide-react";

export const NavbarDemo = () => {
    return (
        <Navbar className="w-full max-w-4xl mx-auto px-6 py-4 border rounded-2xl bg-background/50 backdrop-blur-md shadow-sm no-underline">
            <NavbarLogo href="/" className="hover:opacity-80 transition-opacity no-underline">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Command className="size-5" />
                </div>
                <NavbarLogoText className="font-bold text-lg tracking-tight no-underline">
                    FlowUI
                </NavbarLogoText>
            </NavbarLogo>

<<<<<<< Updated upstream
            <NavbarContent className="list-none">
                <NavbarItem>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Documentation</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Components</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Blocks</a>
                </NavbarItem>
=======
            <NavbarCenter>
                <NavbarGroup>
                    <NavbarItem>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Documentation</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Components</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Blocks</a>
                    </NavbarItem>
                </NavbarGroup>
            </NavbarCenter>

            <NavbarContent>
>>>>>>> Stashed changes
                <NavbarItem as="button" className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    Get Started
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
