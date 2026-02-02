
import TextDivider from "@/registry/flowui/text-divider";
import { Lock, AlertCircle } from "lucide-react";

export function BasicExample() {
    return (
        <div className="w-full">
            <TextDivider text="OR" />
        </div>
    )
}

export function ColorExample() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <TextDivider
                text="Section Break"
                lineColor="bg-blue-500/50"
                variant="rounded"
            />
            <TextDivider
                text="Alert"
                lineColor="bg-red-500/50"
                variant="thick"
            />
        </div>
    )
}

export function StylingExample() {
    return (
        <div className="w-full">
            <TextDivider
                text="Chapter One"
                className="text-primary font-bold uppercase tracking-widest text-xs"
                lineColor="bg-primary/20"
            />
        </div>
    )
}

export function IconExample() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center gap-2">
                <div className="h-px bg-border flex-1" />
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Encrypted
                </span>
                <div className="h-px bg-border flex-1" />
            </div>

            <div className="relative">
                <TextDivider text="Warning" lineColor="bg-yellow-500/50" className="text-yellow-600 font-medium" />
                <AlertCircle className="absolute left-1/2 -translate-x-1/2 -top-6 w-4 h-4 text-yellow-500 opacity-50" />
            </div>
        </div>
    )
}
