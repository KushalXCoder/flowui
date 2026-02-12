
import Scrollbar from "@/registry/flowui/animated-components/scrollbar";

export function DefaultExample() {
    return (
        <div className="relative w-full h-[60px] bg-muted rounded-lg overflow-hidden border">
            {/* The scrollbar tracks the window scroll but is constrained to this container for demo purposes */}
            <Scrollbar className="absolute h-1 bg-blue-500" />
        </div>
    )
}

export function SpringExample() {
    return (
        <div className="relative w-full h-[60px] bg-muted rounded-lg overflow-hidden border">
            <Scrollbar type="spring" className="absolute h-1 bg-green-500" />
        </div>
    )
}
