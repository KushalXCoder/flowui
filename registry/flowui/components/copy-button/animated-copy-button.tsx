import { CopyButton, CopyButtonProps } from "./copy-button"

export const AnimatedCopyButton = (props: CopyButtonProps) => {
    return (
        <CopyButton
            {...props}
            animated={true}
        />
    )
}