import { CopyButton } from "@/registry/flowui/components/copy-button/copy-button"

const CopyButtonDemo = () => {
    return (
        <div className="flex gap-4">
            <CopyButton variant="outline">Copy Code</CopyButton>
            <CopyButton variant="default" animated>Copy Animated</CopyButton>
        </div>
    )
}

export default CopyButtonDemo;