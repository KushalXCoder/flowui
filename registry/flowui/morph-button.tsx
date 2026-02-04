import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type MorphButtonProps = {
    label?: string;
    className?: string;
} & React.ComponentProps<typeof Button>;

const MorphButton = ({
    label = "Label",
    className,
    ...props
}: MorphButtonProps) => {
    useEffect(() => {
        const handleClick = (e: PointerEvent) => {
            const target = document.getElementById("morph-button");
            if (target && !target.contains(e.target as Node)) {
                setHover(false);
            }
        }
        window.addEventListener("click", (e) => handleClick(e));
        return (() => {
            window.removeEventListener("click", (e) => handleClick(e));
        });
    }, []);

    const [hover, setHover] = useState<boolean>(false);
    return (
        <Button
            {...props}
            id="morph-button"
            className={cn(
                "relative h-10 w-30 transition-all duration-500 ease-in-out",
                hover ? "flex flex-col justify-start items-start h-80 w-100" : "",
                className
            )}
            onClick={() => setHover(true)}
        >
            <span className={cn(
                `absolute inset-0 flex items-center justify-center transition-all duration-300`,
                hover ? `opacity-0 pointer-events-none` : `opacity-100 delay-100`
            )}>
                {label}
            </span>
            <form
                className={cn(
                    "w-full transition-all duration-500 ease-in-out px-1",
                    hover
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                )}
                >
                <textarea placeholder={label} className="w-full text-black focus-visible:outline-0" />
            </form>
        </Button>
    )
}

export default MorphButton;