import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// Polymorphic component types are used to allow the components to render as different HTML elements based on the "as" prop.

// Type definitions for navbar components

type CommonProps = {
    children?: ReactNode;
    className?: string;
};

type PolymorphicProps<T extends ElementType> = {
    as?: T;
} & CommonProps & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

// Parent component

export const Navbar = <T extends ElementType = "nav">({
    children,
    className,
    as,
    ...props
}: PolymorphicProps<T>) => {
    const Component = as || "nav";
    return (
        <Component
            className={cn(
                "flex justify-between items-center",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}

// Component for logo section on the left side of the navbar

export const NavbarLogo = <T extends ElementType = "a">({
    children,
    className,
    as,
    ...props
}: PolymorphicProps<T>) => {
    const Component = as || "a";
    return (
        <Component
            className={cn(
                "flex items-center gap-2",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}

// Component for text next to the logo

export const NavbarLogoText = <T extends ElementType = "span">({
    children,
    className,
    as,
    ...props
}: PolymorphicProps<T>) => {
    const Component = as || "span";
    return (
        <Component
            className={cn(
                "text-sm",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}

// Component for grouping navbar items on the right side

export const NavbarContent = <T extends ElementType = "ul">({
    children,
    className,
    as,
    ...props
}: PolymorphicProps<T>) => {
    const Component = as || "ul";
    return (
        <Component
            className={cn(
                "flex items-center gap-4",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}

// Component for individual navbar items

export const NavbarItem = <T extends ElementType = "li">({
    children,
    className,
    as,
    ...props
}: PolymorphicProps<T>) => {
    const Component = as || "li";
    return (
        <Component
            className={cn(
                "text-sm",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}