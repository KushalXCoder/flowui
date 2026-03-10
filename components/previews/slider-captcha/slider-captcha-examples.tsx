"use client";

import { SliderCaptcha } from "@/registry/flowui/components/slider-captcha";
import { Lock, ArrowRight, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

// 1. Basic Example - The clean minimal setup
export const BasicSlider = () => (
    <div className="w-80 h-10 space-y-4">
        <SliderCaptcha
            className="w-full h-10 shadow-sm"
            onSuccess={() => alert("Verified")}
        />
    </div>
);

// 2. Form Integration - A realistic login chunk
export const FormExample = () => {
    const [verified, setVerified] = useState(false);

    return (
        <div className="w-full max-w-sm space-y-4 rounded-lg border p-6 bg-card">
            <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-1.5 pb-2 pt-2">
                <Label className="text-sm font-medium text-muted-foreground/70 tracking-tight">Human Verification</Label>
                <SliderCaptcha
                    onSuccess={() => setVerified(true)}
                    className="bg-muted/30 border-dashed transition-all"
                />
            </div>
            <Button className="w-full font-semibold shadow-sm" disabled={!verified}>
                Submit Data
            </Button>
        </div>
    );
};

// 3. Custom Theming & Accessibility
export const AccessibilityExample = () => (
    <div className="flex flex-col gap-6 w-full max-w-[320px]">
        <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest pl-1">High Tolerance (Easier)</span>
            <SliderCaptcha
                tolerance={15}
                targetClassName="border-blue-400 bg-blue-50/50"
                puzzleIcon={<ShieldCheck className="size-4 text-blue-500" />}
                className="w-full h-11 border-blue-100"
            />
        </div>
        <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest pl-1">Minimalist Style</span>
            <SliderCaptcha
                puzzleIcon={<ArrowRight className="size-4" />}
                puzzleClassName="rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-none hover:bg-zinc-800"
                className="w-full h-10 border-muted placeholder:text-muted-foreground"
            />
        </div>
    </div>
);
