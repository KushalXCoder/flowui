"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import AnimationWrapper from "./animation-wrapper";

type AnimationWrapperProps = {
    children: React.ReactNode;
    mode: "copy" | "copied";
};

export type CopyButtonProps = {
    animated?: boolean;
    time?: number;
    iconType?: "default" | "rotated";
} & React.ComponentProps<typeof Button>;


export const CopyButton = ({
    animated = false,
    className,
    children,
    time = 3000,
    iconType = "default",
    ...props
}: CopyButtonProps) => {
    // Fixed Logic for any behavior
    const [mode, setMode] = useState<"copy" | "copied">("copy");

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(e);
        }

        // Change state to copied
        setMode("copied");

        // Change to the base state after user timer - default 3s
        const timer = setTimeout(() => {
            setMode("copy");
        }, time);

        // Clear the timer
        return () => clearTimeout(timer);
    }

    // Identify the icon to be used and create it's node

    const Icon = mode === "copy" ? Copy : Check;

    const iconNode = (
        <Icon
            className={cn(
                "size-4 shrink-0",
                iconType === "rotated" && mode === "copy" && "rotate-90"
            )}
        />
    );

    const content = animated ? (
        <AnimationWrapper mode={mode}>
            {iconNode}
        </AnimationWrapper>
    ) : (
        iconNode
    )

    return (
        <Button
            {...props}
            onClick={handleCopy}
            className={cn("relative", className)}
        >
            {content}
        </Button>
    )
}