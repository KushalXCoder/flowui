"use client";

import { PasswordInput } from "@/registry/flowui/components/password-input";
import { useState } from "react";

const PasswordInputDemo = () => {
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col items-center justify-center p-12 w-full max-w-sm mx-auto space-y-4">
            <div className="w-full space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                </label>
                <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full"
                />
            </div>
            <p className="text-xs text-muted-foreground">
                Click the eye icon to toggle visibility.
            </p>
        </div>
    );
}

export default PasswordInputDemo;
