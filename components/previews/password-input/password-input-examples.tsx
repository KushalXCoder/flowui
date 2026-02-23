"use client";

import { PasswordInput } from "@/registry/flowui/components/password-input";
import { Eye, Lock, Unlock } from "lucide-react";

export const CustomIconExample = () => {
    return (
        <div className="w-2/4 space-y-2">
            <label className="text-sm font-medium">Custom Lock Icons</label>
            <PasswordInput
                visibleIcon={Unlock}
                hiddenIcon={Lock}
                placeholder="Custom lock icons..."
            />
        </div>
    );
}

export const DisabledExample = () => {
    return (
        <div className="w-full max-w-sm mx-auto">
            <PasswordInput
                disabled
                value="secretpassword"
                placeholder="Disabled input"
            />
        </div>
    );
}

export const CustomizedExample = () => {
    return (
        <div className="w-full max-w-sm mx-auto">
            <PasswordInput
                containerClassName="focus-within:ring-2 focus-within:ring-accent"
                placeholder="password"
            />
        </div>
    );
}