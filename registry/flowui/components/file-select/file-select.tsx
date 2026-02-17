"use client";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { useId, useRef } from "react";

type SlotProps = {
    children?: React.ReactNode;
    className?: string;
};

type FileSelectProps = {
    accept?: string;
    multiple?: boolean;
} & SlotProps;

type FileSelectTextProps = SlotProps;

export const FileSelectLogo = ({ children, className }: SlotProps) => {
    return children ?? <Upload className={cn(className)} />
}

export const FileSelectText = ({ children, className }: FileSelectTextProps) => {
    return (
        <div className={cn(
            "text-sm text-center",
            className
        )}
        >
            {children}
        </div>
    )
}

export const FileSelect = ({
    className,
    children,
    accept,
    multiple
}: FileSelectProps) => {
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
        }
    }
    return (
        <>
            <input
                id={inputId}
                ref={inputRef}
                type="file"
                className="hidden"
                accept={accept}
                multiple={multiple}
            />
            <label
                tabIndex={0}
                role="button"
                onKeyDown={handleKeyDown}
                htmlFor={inputId}
                className={cn(
                    "flex flex-col justify-center items-center size-50 border border-dashed rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors",
                    className
                )}
            >
                {children}
            </label>
        </>
    )
}