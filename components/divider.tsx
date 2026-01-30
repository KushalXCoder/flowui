export const Divider = () => {
    return (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            left-1/2
            -translate-x-1/2
            w-screen
            h-4
            overflow-hidden
            border-y border-dashed border-gray-400

            before:content-['']
            before:absolute
            before:inset-y-0
            before:left-[-100vw]
            before:w-[200vw]
          "
        />
    )
}