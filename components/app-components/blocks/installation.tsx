import { Copy } from "lucide-react";

type InstallationProps = {
    slug: string;
}

export const Installation = ({
    slug,
}: InstallationProps) => {
    return (
        <div className="flex items-center gap-5 rounded-lg bg-muted font-mono px-5 py-1.5">
            <p className="text-md">
                npx shadcn@latest install flowui/{slug}
            </p>
            <Copy className="size-4" />
        </div>
    )
}