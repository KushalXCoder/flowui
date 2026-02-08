import { CopyButton } from "@/registry/flowui/components/copy-button/copy-button";
import { AnimatedCopyButton } from "@/registry/flowui/components/copy-button/animated-copy-button";

export function BasicExample() {
    return (
        <div className="flex items-center gap-4">
            <CopyButton variant="outline">
                Click to Copy
            </CopyButton>
            <CopyButton variant="default" className="rounded-full">
                Rounded Copy
            </CopyButton>
        </div>
    )
}

export function AnimatedExample() {
    return (
        <div className="flex items-center gap-4">
            <AnimatedCopyButton variant="outline">
                Animated Copy
            </AnimatedCopyButton>
            <AnimatedCopyButton variant="secondary" iconType="rotated">
                Rotated Icon
            </AnimatedCopyButton>
        </div>
    )
}
