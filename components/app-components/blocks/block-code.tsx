import getBlockFiles from "@/lib/helper/block-tree";
import { useEffect, useMemo, useState } from "react";
import { CodeViewer } from "./code-viewer";
import { FileType } from "@/lib/types/global.types";

export const BlockCode = () => {
    const [files, setFiles] = useState<FileType[]>([]);
    const blockFiles = useMemo(() => getBlockFiles("auth-flow", "auth01"), []);

    useEffect(() => {
        if (blockFiles) {
            setFiles(blockFiles);
        }
    }, [blockFiles]);

    return (
        <CodeViewer files={files} />
    )
}