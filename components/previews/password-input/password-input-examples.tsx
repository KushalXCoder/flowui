"use client";

import { PasswordInput } from "@/registry/flowui/components/password-input";
import { Eye, Lock, Unlock } from "lucide-react";

export const CustomIconExample = () => {
    return (
        <div className="w-2/4 space-y-2 font-mono">
            <label className="text-sm font-medium">Custom Lock Icons</label>
            <PasswordInput
                visibleIcon={Unlock}
                hiddenIcon={Lock}
                placeholder="Custom lock icons..."
                className="text-sm"
            />
        </div>
    );
}

export const DisabledExample = () => {
    return (
        <div className="w-full max-w-sm mx-auto font-mono">
            <PasswordInput
                disabled
                value="secretpassword"
                placeholder="Disabled input"
                className="text-sm"
            />
        </div>
    );
}

export const CustomizedExample = () => {
    return (
        <div className="w-full max-w-sm mx-auto font-mono">
            <PasswordInput
                containerClassName="focus-within:ring-2 focus-within:ring-accent"
                placeholder="password"
                className="text-sm"
            />
        </div>
    );
}