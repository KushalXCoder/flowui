"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type DebouncedInputProps = {
    debouncing?: boolean;
    debouncingValue?: number;
    onDebouncedChange?: (value: string) => void;
    className?: string;
} & React.ComponentProps<typeof Input>;

const DebouncedInput = ({ debouncing, debouncingValue = 500, onDebouncedChange, className, ...props }: DebouncedInputProps) => {
    const isControlled = props.value !== undefined;

    // This is used so that user typing is not affected by the debouncing
    const [input, setInput] = useState(
        isControlled ?
        (props.value as string) :
        (props.defaultValue as string) ?? ""
    );

    useEffect(() => {
        if (isControlled) {
            setInput(props.value as string);
        }
    }, [props.value, isControlled]);

    useEffect(() => {
        if(!debouncing) return;

        // Set timer
        const timer = setTimeout(() => {
            onDebouncedChange?.(input);
        }, debouncingValue);

        // Clear timeout
        return () => clearTimeout(timer);
    }, [input, debouncing, debouncingValue]);

    return (
        <Input
            {...props}
            value={isControlled ? props.value : input}
            onChange={(e) => {
                if(!isControlled) {
                    setInput(e.target.value);
                }
                props.onChange?.(e);
            }}
            className={cn(className)}
        />
    )
}

export default DebouncedInput;