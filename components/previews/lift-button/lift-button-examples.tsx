"use client";

import LiftButton from "@/registry/flowui/components/lift-button";
import { ArrowUp, ChevronUp, Rocket, ChevronsUp, MousePointerClick, MoveUp } from "lucide-react";

export function AlwaysVisibleExample() {
    return (
        <div className="relative w-full h-50 flex flex-col items-center justify-center rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden p-6">
            <div className="text-center space-y-1">
                <p className="text-sm font-medium">Always Visible</p>
                <p className="text-xs text-muted-foreground italic">Perfect for static layouts</p>
            </div>
            <LiftButton
                alwaysVisible
                className="absolute bottom-4 right-4 size-10 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform active:scale-95"
            >
                <ArrowUp className="size-5" />
            </LiftButton>
        </div>
    );
}

export function ScrollToSectionExample() {
    return (
        <div className="relative w-full h-60">
            <div id="section-scroll-container" className="h-full w-full overflow-y-auto rounded-xl border bg-background text-foreground shadow-sm p-4 space-y-4">
                <div className="rounded-md border bg-background p-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary flex items-center gap-2">
                        This is the top section.
                    </p>
                </div>

                {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-md border bg-background p-4 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Content Layer {i}</span>
                        <div className="h-1 w-12 bg-muted rounded-full" />
                    </div>
                ))}

                <div id="section-target" className="rounded-lg border border-primary/20 bg-primary/5 p-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Target Section
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">Will scroll back here</p>
                </div>

                {[4, 5, 6].map((i) => (
                    <div key={i} className="rounded-md border bg-background p-4 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Content Layer {i}</span>
                        <div className="h-1 w-12 bg-muted rounded-full" />
                    </div>
                ))}

                <div className="py-4 text-center">
                    <p className="text-[11px] text-muted-foreground">Click the rocket below</p>
                </div>

                <LiftButton
                    scrollContainerId="section-scroll-container"
                    targetId="section-target"
                    className="absolute bottom-4 right-8 size-10 rounded-full bg-primary text-primary-foreground"
                >
                    <Rocket className="size-5" />
                </LiftButton>
            </div>
        </div>
    );
}

export function ThresholdExample() {
    return (
        <div className="relative w-full h-62.5">
            <div id="threshold-scroll-container" className="w-full h-full overflow-y-auto rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="sticky top-0 z-10 bg-background/50 backdrop-blur-md px-4 py-2 border-b">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Threshold: 200px</p>
                </div>
                <div className="p-4 space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <div key={i} className="h-12 w-full rounded-md border bg-background/50 flex items-center px-4">
                            <div className="h-2 w-full bg-muted rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
            <LiftButton
                scrollContainerId="threshold-scroll-container"
                threshold={200}
                className="absolute bottom-4 right-8 size-10 rounded-full bg-accent text-secondary-foreground shadow-lg hover:bg-secondary/80 transition-all border border-border"
            >
                <ChevronsUp className="size-5" />
            </LiftButton>
        </div>
    );
}

export function CustomChildrenExample() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border p-6 bg-muted/20">
                <span className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Variations</span>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <LiftButton
                        alwaysVisible
                        className="size-12 rounded-2xl bg-primary text-primary-foreground shadow-lg hover:rounded-xl transition-all"
                    >
                        <ChevronUp className="size-6" />
                    </LiftButton>

                    <LiftButton
                        alwaysVisible
                        className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold shadow-md active:scale-95 transition-all"
                    >
                        Top <ArrowUp className="size-4" />
                    </LiftButton>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border p-6 bg-muted/20">
                <span className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Glassmorphism</span>
                <div className="flex items-center gap-4">
                    <LiftButton
                        alwaysVisible
                        className="size-11 rounded-full bg-background/40 backdrop-blur-xl border border-white/20 text-foreground shadow-2xl hover:bg-background/60 transition-colors"
                    >
                        <MousePointerClick className="size-5" />
                    </LiftButton>
                    <LiftButton
                        alwaysVisible
                        className="size-11 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 shadow-sm hover:bg-indigo-500/20 transition-colors"
                    >
                        <MoveUp className="size-5" />
                    </LiftButton>
                </div>
            </div>
        </div>
    );
}

export function CustomStylingExample() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
            {/* Gradient */}
            <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 opacity-25 blur transition-all group-hover:opacity-75" />
                <LiftButton
                    alwaysVisible
                    className="relative size-12 rounded-full bg-gradient-to-tr from-violet-600 to-pink-500 text-white shadow-xl hover:scale-105 active:scale-100 transition-all font-bold"
                >
                    <ArrowUp className="size-5 stroke-[3]" />
                </LiftButton>
            </div>

            {/* Pill */}
            <LiftButton
                alwaysVisible
                className="group relative inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-bold text-primary shadow-sm ring-offset-background transition-all hover:bg-primary/10 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <ArrowUp className="size-4 animate-bounce group-hover:animate-none" />
                Return Home
            </LiftButton>

            {/* Ghost Square */}
            <LiftButton
                alwaysVisible
                className="size-12 rounded-xl bg-muted/40 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all border border-transparent hover:border-border active:scale-95"
            >
                <ChevronsUp className="size-6" />
            </LiftButton>

            {/* Minimalist */}
            <LiftButton
                alwaysVisible
                className="size-10 rounded-full border border-dashed border-muted-foreground/30 hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
            >
                <ChevronUp className="size-4" />
            </LiftButton>
        </div>
    );
}