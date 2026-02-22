// This component extends Shadcn UI's input

"use client";

type PasswordInputProps = {
    className?: string;
    containerClassName?: string;
    visibleIcon?: LucideIcon;
    hiddenIcon?: LucideIcon;
} & ComponentPropsWithoutRef<"input">;

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef, useState } from "react";

export const PasswordInput = forwardRef<
    HTMLInputElement,
    PasswordInputProps
>(
    ({
        className,
        containerClassName,
        disabled,
        visibleIcon = Eye,
        hiddenIcon = EyeOff,
        ...props
    },
        ref
    ) => {
        // State to handle password visibility
        const [visible, setVisible] = useState<boolean>(false);

        // Icon selection based on the visibility state
        const Icon = visible ? visibleIcon : hiddenIcon;

        // Function to handle the visibility toggle
        const handleVisibility = () => {
            if (!disabled) {
                setVisible((prev) => !prev);
            }
        }
        return (
            <div
                className={cn(
                    "relative flex items-center border rounded-md",
                    containerClassName
                )}
            >
                <input
                    ref={ref}
                    type={visible ? "text" : "password"}
                    disabled={disabled}
                    className={cn(
                        "flex rounded-md px-3 py-1.5 pe-10 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    {...props}
                />
                <button
                    type="button"
                    onClick={handleVisibility}
                    disabled={disabled}
                    aria-label={visible ? "Hide password" : "Show password"}
                    className={cn(
                        "absolute right-0 me-3 inline-flex justify-center items-center text-muted-foreground hover:text-foreground focus:outline-none disabled:opacity-50"
                    )}
                >
                    <Icon
                        className="size-5"
                    />
                </button>
            </div>
        )
    }
);