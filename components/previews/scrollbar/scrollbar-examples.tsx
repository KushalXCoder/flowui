
import Scrollbar from "@/registry/flowui/animated-components/scrollbar";

export function DefaultExample() {
    return (
        <div className="relative w-full h-20 bg-muted rounded-lg overflow-hidden border flex justify-center items-center">
            <Scrollbar className="absolute h-1 bg-blue-500" />
            <h1 className="font-sans text-sm text-muted-foreground font-normal mb-0">Observe the motion</h1>
        </div>
    )
}

export function SpringExample() {
    return (
        <div className="relative w-full h-20 bg-muted rounded-lg overflow-hidden border flex justify-center items-center">
            <Scrollbar type="spring" className="absolute h-1 bg-green-500" />
            <h1 className="font-sans text-sm text-muted-foreground font-normal mb-0">Observe the motion</h1>
        </div>
    )
}
