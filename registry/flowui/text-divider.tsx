import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type CommonProps = {
    variant?: "default" | "thin" | "thick" | "rounded";
    lineColor?: string;
}

type LineProps = CommonProps;

type TextDividerProps = {
    text: string;
    className?: string;
} & CommonProps;

const dividerVariants = cva(
    "w-1/2",
    {
        variants: {
            variant: {
                default: "h-px",
                thin: "h-[0.5px]",
                thick: "h-2",
                rounded: "h-px rounded-full",
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
);

const Line = (
    { variant, lineColor = "bg-border" } : LineProps
) => {
    return (
        <div
            aria-hidden="true"
            className={cn(
                dividerVariants({ variant }),
                lineColor
            )}
        />
    )
}

const TextDivider = ({
    variant = "default",
    text,
    lineColor,
    className
} : TextDividerProps) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Line variant={variant} lineColor={lineColor} />
            <span>{text}</span>
            <Line variant={variant} lineColor={lineColor} />
        </div>
    )
}

export default TextDivider;