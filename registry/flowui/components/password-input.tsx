// This component extends Shadcn UI's input

"use client";

type PasswordInputProps = {
    className?: string;
    containerClassName?: string;
    iconClassName?: string;
    visibleIcon?: LucideIcon;
    hiddenIcon?: LucideIcon;
} & ComponentPropsWithoutRef<"input">;

import { cn } from "@/lib/utils";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef, ReactNode, useState } from "react";

export const PasswordInput = forwardRef<
    HTMLInputElement,
    PasswordInputProps
>(
    ({
        className,
        containerClassName,
        iconClassName,
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
                        "w-full flex rounded-md px-3 py-1.5 pe-10 focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50",
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
                        "absolute right-0 me-3 inline-flex justify-center items-center"
                    )}
                >
                    <Icon
                        className={cn(
                            "size-5 text-muted-foreground hover:text-foreground focus:outline-none",
                            disabled && "hover:text-red-500",
                            iconClassName
                        )}
                    />
                </button>
            </div>
        )
    }
);