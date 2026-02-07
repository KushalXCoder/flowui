
import ChangingText from "@/registry/flowui/animated-components/changing-text";

export default function ChangingTextDemo() {
    return (
        <div className="flex flex-col items-center justify-center p-12">
            <ChangingText
                initialText="Hover me"
                finalText="Revealed!"
                className="text-4xl font-bold"
            />
        </div>
    )
}
