"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ChangingText from "@/registry/flowui/animated-components/changing-text";
import { CopyButton } from "@/registry/flowui/components/copy-button/copy-button";
import DebouncedInput from "@/registry/flowui/components/debounced-input";
import LiftButton from "@/registry/flowui/components/lift-button";
import { PasswordInput } from "@/registry/flowui/components/password-input";
import TextDivider from "@/registry/flowui/components/text-divider";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AuthButton } from "@/registry/flowui/components/auth-buttons";
import Speaker from "@/registry/flowui/components/speaker";
import { FileSelect, FileSelectLogo, FileSelectText } from "@/registry/flowui/components/file-select/file-select";

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
            <div className={`group relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center overflow-hidden p-5 transition-all duration-200 hover:border-border hover:shadow-sm hover:bg-card ${className}`}>
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
    const [showVal, setShowVal] = useState<string>("");
    return (
        <div className="">
            <div className="grid grid-cols-6 grid-rows-[140px_100px_120px] gap-2.5 mb-5">
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
                    <div className="w-full flex items-center gap-5">
                        <DebouncedInput
                            debouncing
                            placeholder="Type something..."
                            className="w-2/3"
                            onDebouncedChange={(value) => setShowVal(value)}
                        />
                        <Input
                            className="text-muted-foreground w-1/3 focus-visible:border-border focus-visible:ring-0"
                            value={showVal ?? "Debounced Output"}
                            readOnly
                        />
                    </div>
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
                    className="col-start-1 col-span-1 row-start-3 row-span-1 flex-col gap-2"
                    label="Speaker"
                >
                    <CellLabel>speaker</CellLabel>
                    <Speaker text="Flow UI components are crafted with precision." className="size-8 cursor-pointer hover:text-primary transition-colors mt-1" />
                </BentoCell>
                <BentoCell
                    className="col-start-2 col-span-2 row-start-3 row-span-1 flex-col gap-2"
                    label="Auth Buttons"
                >
                    <CellLabel>auth buttons</CellLabel>
                    <AuthButton provider="google" text="Continue without Google" variant="outline" className="w-fit rounded-lg text-[13px]" />
                </BentoCell>
                <BentoCell
                    className="col-start-4 col-span-2 row-start-3 row-span-1 flex-col gap-2"
                    label="File Select"
                >
                    <CellLabel>file upload</CellLabel>
                    <FileSelect className="w-1/2 h-11 border-dashed border-border bg-background/50 hover:bg-background/80 mt-1 cursor-pointer">
                        <div className="flex items-center gap-2.5 px-3">
                            <FileSelectLogo className="size-4 text-muted-foreground" />
                            <FileSelectText className="text-[13px] text-muted-foreground">Upload Files</FileSelectText>
                        </div>
                    </FileSelect>
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