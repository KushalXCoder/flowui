import Speaker from "@/registry/flowui/components/speaker";

export default function SpeakerDemo() {
    return (
        <div className="flex items-center gap-3 border px-4 py-2 rounded-lg">
            <span className="text-lg font-medium text-gray-400">Click the icon to listen</span>
            <Speaker text="Click the icon to listen" />
        </div>
    )
}
