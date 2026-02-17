
import ChangingText from "@/registry/flowui/animated-components/changing-text";

export function DefaultExample() {
    return (
        <ChangingText initialText="Hover me" finalText="Surprise!" className="mb-0 text-2xl font-semibold" />
    )
}

export function BlurExample() {
    return (
        <ChangingText
            initialText="Blur Effect"
            finalText="Focused View"
            variant="blur"
            blurValue={6}
            className="mb-0 text-2xl font-bold text-primary"
        />
    )
}
