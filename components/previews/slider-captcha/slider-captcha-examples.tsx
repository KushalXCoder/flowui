"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { SliderCaptcha } from "@/registry/flowui/components/slider-captcha";
import { Fingerprint, Lock, Puzzle, RefreshCw, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type VerifyState = "idle" | "success" | "error";

// Example 1
export const SliderCaptchaInline = () => {
    const [isVerified, setIsVerified] = useState(false);

    return (
        <div className="w-full max-w-md rounded-xl border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
                <p className="flex items-center gap-2 text-sm font-medium">
                    <Fingerprint className="size-4 text-muted-foreground" />
                    Quick Verification
                </p>
                <span
                    className={cn(
                        "rounded-full border px-2 py-0.5 text-xs",
                        isVerified
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-muted bg-muted/50 text-muted-foreground"
                    )}
                >
                    {isVerified ? "Verified" : "Pending"}
                </span>
            </div>

            <SliderCaptcha
                className="h-10"
                puzzleIcon={<Fingerprint className="size-4" />}
                onSuccess={() => setIsVerified(true)}
                onFailure={() => setIsVerified(false)}
            />
        </div>
    );
};

// Example 3
export const SliderCaptchaForm = () => {
    const [captchaKey, setCaptchaKey] = useState(0);
    const [isVerified, setIsVerified] = useState(false);

    const resetVerification = () => {
        setIsVerified(false);
        setCaptchaKey((prev) => prev + 1);
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="font-poppins text-lg">Secure Sign In</CardTitle>
                <CardDescription>
                    Complete the slider check before continuing.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                    <div className="space-y-2">
                        <Label htmlFor="slider-captcha-email">Email</Label>
                        <Input id="slider-captcha-email" type="email" placeholder="you@example.com" />
                    </div>

                    <div className="space-y-2">
                        <Label>Human check</Label>
                        <SliderCaptcha
                            key={captchaKey}
                            className="h-10"
                            tolerance={8}
                            puzzleIcon={<Lock className="size-4" />}
                            onSuccess={() => setIsVerified(true)}
                            onFailure={() => setIsVerified(false)}
                        />
                        <p className="text-xs text-muted-foreground">
                            {isVerified ? "Verification passed." : "Drag to align and unlock submit."}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button type="submit" disabled={!isVerified} className="min-w-28">
                            Continue
                        </Button>
                        <Button type="button" variant="outline" onClick={resetVerification}>
                            <RefreshCw className="size-4" />
                            Reset
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};