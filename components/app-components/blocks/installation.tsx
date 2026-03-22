import { Copy } from "lucide-react";

type InstallationProps = {
    code: string;
}

export const Installation = ({
    code,
}: InstallationProps) => {
    return (
        <div className="flex items-center gap-5 rounded-lg bg-muted font-mono px-5 py-1.5">
            <p className="text-md">
                {code}
            </p>
            <Copy className="size-4" />
        </div>
    )
}