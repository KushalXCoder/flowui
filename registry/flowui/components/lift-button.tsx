"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { ComponentProps, useEffect, useState } from "react";

type LiftButtonProps = {
    className?: string;
    children?: React.ReactNode;
    scrollContainerId?: string;
    targetId?: string;
    alwaysVisible?: boolean;
    threshold?: number;
} & ComponentProps<"button">;

const LiftButton = ({
    className,
    children,
    scrollContainerId,
    targetId,
    alwaysVisible = false,
    threshold = 0,
    ...props
}: LiftButtonProps) => {
    // State to control the visibility
    const [visible, setVisible] = useState<boolean>(alwaysVisible);

    // Scroll based button visibility
    useEffect(() => {
        if (alwaysVisible) return;

        // Get the scroll container
        const container = scrollContainerId ? document.getElementById(scrollContainerId) : window;

        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container === window ?
                window.pageYOffset || document.documentElement.scrollTop :
                (container as HTMLElement).scrollTop;

            setVisible(scrollPosition > threshold);
        };

        container?.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => container?.removeEventListener("scroll", handleScroll);
    }, [alwaysVisible, threshold, scrollContainerId]);

    // Scroll to top functionality
    const handleClick = () => {
        if(scrollContainerId) {
            const container = document.getElementById(scrollContainerId);
            if(!container) return;

            if(targetId) {
                const target = document.getElementById(targetId);
                if(!target) return;

                const containerRec = container.getBoundingClientRect();
                const targetRec = target.getBoundingClientRect();

                const offset = targetRec.top - containerRec.top + container.scrollTop;
                container.scrollTo({ top: offset, behavior: "smooth" });
            } else {
                container.scrollTo({ top: 0, behavior: "smooth" });
            }

            return;
        }
        if(targetId) {
            const target = document.getElementById(targetId);
            target?.scrollIntoView({ behavior: "smooth" });
            return;
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <button
            className={cn(
                "inline-flex justify-center items-center transition-all duration-300",
                className,
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            {...props}
            onClick={handleClick}
        >
            {children ? (
                children
            ) : (
                <ArrowUp className="size-5" />
            )}
        </button>
    )
}

export default LiftButton;