import getBlockFiles from "@/lib/helper/block-tree";
import { useEffect, useMemo, useState } from "react";
import { CodeViewer } from "./code-viewer";
import { FileType } from "@/lib/types/global.types";

type BlockCodeProps = {
    type: string;
    slug: string;
}

export const BlockCode = ({
    type,
    slug,
}: BlockCodeProps) => {
    const [files, setFiles] = useState<FileType[]>([]);
    const blockFiles = useMemo(() => getBlockFiles(type, slug), [type, slug]);

    useEffect(() => {
        if (blockFiles) {
            setFiles(blockFiles);
        }
    }, [blockFiles]);

    return (
        <CodeViewer files={files} />
    )
}