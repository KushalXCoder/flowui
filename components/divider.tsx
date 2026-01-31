import { cn } from "@/lib/utils"

export const Divider = ({ type, className } : { type: string, className?: string }) => {
    return (
        <div
          className={cn(`
            pointer-events-none
            absolute
            inset-x-0
            left-1/2
            -translate-x-1/2
            w-${type}
            h-4
            overflow-hidden
            border-y border-dashed border-gray-400

            before:content-['']
            before:absolute
            before:inset-y-0
            before:left-[-100vw]
            before:w-[200vw]
          `, className)}
        />
    )
}