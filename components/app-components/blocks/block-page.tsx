"use client";

import { useBlockStore } from "@/store/blocks.store";
import { BlockShowcase } from "./block-showcase";

type BlockPageProps = {
    slug: string;
}

export const BlockPage = ({
    slug
}: BlockPageProps) => {
    // Get all blocks
    const { blocks } = useBlockStore();

    // Filter blocks based on what type user has chosen
    const filteredBlocks = blocks.filter(block => block.type === slug);

    return (
        <>
            <h1 className="capitalize text-lg">{slug} Blocks</h1>
            {filteredBlocks.length > 0 ? (
                filteredBlocks.map((block) => (
                    <BlockShowcase
                        title={block.title}
                        type={block.type}
                        slug={block.slug}
                        description={block.description}
                        reset={true}
                    />
                ))
            ) : (
                <div className="flex-1 w-full flex justify-center items-center rounded-lg border bg-[radial-gradient(circle,#d1d5db_0.5px,transparent_1px)] bg-size-[14px_14px]">
                    <p>No blocks found.</p>
                </div>
            )}
        </>
    )
}