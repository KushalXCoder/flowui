"use client";

import { PasswordInput } from "@/registry/flowui/components/password-input";
import { Lock, Unlock, ShieldCheck, ShieldOff } from "lucide-react";

export function CustomIconsExample() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium">Custom Lock Icons</label>
                <PasswordInput
                    visibleIcon={Unlock}
                    hiddenIcon={Lock}
                    placeholder="Custom lock icons..."
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Custom Shield Icons</label>
                <PasswordInput
                    visibleIcon={ShieldCheck}
                    hiddenIcon={ShieldOff}
                    placeholder="Custom shield icons..."
                />
            </div>
        </div>
    );
}

export function DisabledExample() {
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

export function CustomStylingExample() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium italic text-indigo-500">Indigo Focus</label>
                <PasswordInput
                    className="focus-visible:ring-indigo-500 border-indigo-200"
                    placeholder="Custom focus ring..."
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-rose-500">Error State</label>
                <PasswordInput
                    className="border-rose-500 focus-visible:ring-rose-500"
                    placeholder="Something went wrong..."
                />
            </div>
        </div>
    );
}

export function FullWidthExample() {
    return (
        <div className="w-full space-y-2">
            <label className="text-sm font-medium">Full Width Password Field</label>
            <PasswordInput
                containerClassName="w-full shadow-lg"
                className="h-12 text-lg"
                placeholder="Large and full width"
            />
        </div>
    );
}
