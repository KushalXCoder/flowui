"use client";

import LiftButton from "@/registry/flowui/components/lift-button";
import { ArrowUp } from "lucide-react";

const LiftButtonDemo = () => {
    return (
        <div className="relative w-full h-75 rounded-xl border shadow-sm">
            <div
                id="professional-demo-container"
                className="h-full overflow-y-auto"
            >
                <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b px-4 py-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Scrollable Container</span>
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="size-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="size-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                </div>
                <div className="p-4 space-y-4">
                    <div id="demo-top" className="rounded-lg bg-muted/50 p-8 flex flex-col items-center justify-center text-center gap-2 border border-dashed">
                        <p className="text-sm font-medium">Top of the content</p>
                        <p className="text-xs text-muted-foreground max-w-50">
                            Scroll down to trigger the floating lift button.
                        </p>
                    </div>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="rounded-lg border bg-background p-6 transition-colors hover:border-primary/50">
                            <h5 className="text-sm font-medium mb-1">Section {i}</h5>
                            <p className="text-xs text-muted-foreground">
                                This is a sample content block to demonstrate the scroll behavior.
                            </p>
                        </div>
                    ))}

                    <div className="py-8 text-center text-xs text-muted-foreground italic">
                        You've reached the bottom.
                    </div>
                </div>
            </div>
            <LiftButton
                scrollContainerId="professional-demo-container"
                threshold={80}
                className="absolute bottom-3 right-7 size-10 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <ArrowUp className="size-5" />
            </LiftButton>
        </div>
    );
}

export default LiftButtonDemo;