
import TextDivider from "@/registry/flowui/components/text-divider";
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