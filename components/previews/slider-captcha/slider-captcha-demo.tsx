"use client";

import { SliderCaptcha } from "@/registry/flowui/components/slider-captcha";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SliderCaptchaDemo() {
    const [isVerified, setIsVerified] = useState<boolean | null>(null);

    return (
        <div className="flex flex-col items-center">
            <SliderCaptcha
                className="bg-background w-80 h-10"
                onSuccess={() => setIsVerified(true)}
                onFailure={() => setIsVerified(false)}
            />
            <p
                className={cn(
                    "text-sm font-mono",
                    isVerified ? "text-green-500" : "text-red-500"
                )}
            >
                {isVerified === true ? (
                    "Verification Successfull"
                ) : isVerified === false ? (
                    "Verification Failed"
                ) : (
                    ""
                )}
            </p>
        </div>
    );
}
