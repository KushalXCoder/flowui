"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ChangingText from "@/registry/flowui/animated-components/changing-text";
import StackedCard from "@/registry/flowui/animated-components/stacked-card";
import { CopyButton } from "@/registry/flowui/components/copy-button/copy-button";
import LiftButton from "@/registry/flowui/components/lift-button";
import { PasswordInput } from "@/registry/flowui/components/password-input";
import TextDivider from "@/registry/flowui/components/text-divider";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BentoCell = ({
    children,
    className = "",
    label,
}: {
    children: React.ReactNode;
    className?: string;
    label: string;
}) => (
    <Tooltip>
        <TooltipTrigger asChild>
            <div className={`group relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm flex items-center justify-center overflow-hidden p-5 transition-all duration-200 hover:border-border hover:shadow-sm hover:bg-card ${className}`}>
                {children}
            </div>
        </TooltipTrigger>
        <TooltipContent className="font-mono text-[11px]">
            <p>{label}</p>
        </TooltipContent>
    </Tooltip>
);

const CellLabel = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[10px] text-muted-foreground/60 font-mono tracking-wider uppercase">{children}</p>
);

export const Showcase = () => {
    return (
        <div className="flex-1 relative w-full rounded-t-2xl border border-b-0 border-border/40 bg-muted/20 overflow-hidden px-7 pt-7 pb-12 font-mono">
            <div className="grid grid-cols-6 grid-rows-[140px_100px_120px] gap-2.5">
                <BentoCell
                    className="col-start-1 col-span-2 row-start-1 row-span-1 flex-col items-start justify-between"
                    label="Changing Text"
                >
                    <CellLabel>hover me</CellLabel>
                    <ChangingText
                        initialText="Hello, World!"
                        finalText="こんにちは世界"
                        variant="blur"
                        className="text-xl font-semibold tracking-tight"
                    />
                </BentoCell>
                <BentoCell
                    className="col-start-3 col-span-2 row-start-1 row-span-1 flex-col items-start justify-center gap-3"
                    label="Password Input"
                >
                    <CellLabel>password input</CellLabel>
                    <PasswordInput
                        value="secret"
                        className="text-sm bg-background h-9"
                        containerClassName="w-full"
                    />
                </BentoCell>
                <BentoCell
                    className="col-start-5 col-span-1 row-start-1 row-span-2 flex-col gap-2"
                    label="Copy Button"
                >
                    <CellLabel>copy</CellLabel>
                    <CopyButton animated variant="outline" iconType="rotated" />
                </BentoCell>
                <BentoCell
                    className="col-start-6 col-span-1 row-start-1 row-span-1 flex-col gap-2"
                    label="Lift Button"
                >
                    <CellLabel>scroll top</CellLabel>
                    <LiftButton
                        alwaysVisible
                        className="size-10 rounded-full border border-border bg-background hover:bg-accent transition-colors shadow-sm"
                    >
                        <ArrowUp className="size-4" />
                    </LiftButton>
                </BentoCell>
                <BentoCell
                    className="col-start-1 col-span-4 row-start-2 row-span-1 flex-col items-start justify-center gap-2"
                    label="Debounced Input"
                >
                    <CellLabel>debounced input</CellLabel>
                    <Input
                        placeholder="type and wait…"
                        className="text-sm h-9 bg-background w-full"
                    />
                </BentoCell>
                <BentoCell
                    className="col-start-6 col-span-1 row-start-2 row-span-2 flex-col gap-3"
                    label="Text Divider"
                >
                    <CellLabel>divider</CellLabel>
                    <TextDivider text="or continue with" className="w-full text-xs text-muted-foreground" />
                    <TextDivider text="·····" variant="rounded" lineColor="bg-border" className="w-full text-muted-foreground" />
                </BentoCell>
                <BentoCell
                    className="col-start-1 col-span-5 row-start-3 row-span-1 flex-col items-start justify-between gap-2"
                    label="Stacked Card"
                >
                    <CellLabel>drag to swap</CellLabel>
                    <div className="relative w-full flex-1 min-h-0">
                        <StackedCard>
                            {(["#f1f5f9", "#e2e8f0", "#cbd5e1"] as const).map((bg, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground font-mono"
                                    style={{ background: bg }}
                                >
                                    card {i + 1}
                                </div>
                            ))}
                        </StackedCard>
                    </div>
                </BentoCell>
            </div>
            <Link
                href="/"
                className="absolute bottom-3 right-3"
            >
                <Button variant="outline">
                    Playground
                    <ArrowUpRight />
                </Button>
            </Link>
        </div>
    );
};