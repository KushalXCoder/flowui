"use client";

import { BlockShowcase } from "@/components/app-components/blocks/block-showcase";
import { useBlockStore } from "@/store/blocks.store";

const Page = () => {
    const { blocks } = useBlockStore();
    return (
        <div className="flex flex-col gap-5 min-h-screen w-full">
            {blocks.length > 0 ? (
                blocks.map((block) => (
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
        </div>
    )
}

export default Page;