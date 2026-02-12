import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "motion/react";
import { cn } from "@/lib/utils";

type StackedCardProps = {
    children: React.ReactNode;
    className?: string;
} & React.ComponentProps<typeof motion.div>;

const VISIBLE = 3;
const OFFSET = 150;

const StackedCard = ({ children }: StackedCardProps) => {
    const cards = useMemo(() => React.Children.toArray(children), [children]);
    const cnt = cards.length;

    const [idx, setIdx] = useState(cnt - 1);
    const [direction, setDirection] = useState(1);

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.x > OFFSET) {
            setDirection(1);
            setIdx((i) => (i - 1 + cnt) % cnt);
        } else if (info.offset.x < -OFFSET) {
            setDirection(-1);
            setIdx((i) => (i + 1) % cnt);
        }
    };

    const visibleCards = Array.from(
        { length: Math.min(VISIBLE, cnt) },
        (_, i) => ({
            element: cards[(idx + i) % cnt],
            id: `${idx}-${i}`,
            position: i,
        })
    );

    return (
        <div className="relative size-50">
            <AnimatePresence custom={direction}>
                {visibleCards
                    .slice()
                    .reverse()
                    .map(({ element, id, position }) => {
                        const isTop = position === 0;
                        return (
                            <motion.div
                                key={id}
                                custom={direction}
                                className="absolute inset-0"
                                drag={isTop ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                exit={isTop ? "exit" : undefined}
                            >
                                {element}
                            </motion.div>
                        );
                    })}
            </AnimatePresence>
        </div>
    );
};

export default StackedCard;