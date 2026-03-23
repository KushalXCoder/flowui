import { getBlockTree } from "@/lib/block-tree"
import { useEffect } from "react"

export const BlockCode = () => {
    useEffect(() => {
        getBlockTree();
    }, []);
    return (
        <div className="min-h-screen grid grid-cols-10 border rounded-lg">
            <div className="col-span-2 border-r">

            </div>
        </div>
    )
}