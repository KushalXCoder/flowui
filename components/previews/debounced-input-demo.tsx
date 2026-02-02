"use client";

import DebouncedInput from "@/registry/flowui/debounced-input";

export function DebouncedInputDemo() {
    return (
        <DebouncedInput
            className="max-w-md w-full bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Type quickly to test debouncing..."
            debouncing
            debouncingValue={1000}
            onDebouncedChange={(value) => {
                alert(`Debounced Value: ${value}`);
            }}
        />
    );
}
