
import Scrollbar from "@/registry/flowui/animated-components/scrollbar";

export default function ScrollbarDemo() {
    return (
        <div className="relative w-full h-50 bg-muted rounded-lg overflow-hidden flex items-center justify-center border">
            <p className="text-muted-foreground text-sm">Scroll the page to see the bar fill</p>
            <Scrollbar className="absolute top-0 left-0 h-2 bg-primary" />
        </div>
    )
}
