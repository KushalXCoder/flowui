import { cn } from "@/lib/utils";
import Image from "next/image"

type LogoProps = {
    className?: string
};

const Logo = ({ className }: LogoProps) => {
    return (
        <Image src="/logo.svg" alt="Logo" width={32} height={32} priority draggable={false} className={cn("dark:invert", className)} />
    )
}

export default Logo;