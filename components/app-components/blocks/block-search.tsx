"use client";

import { initialBlocks } from "@/lib/blocks";
import DebouncedInput from "@/registry/flowui/components/debounced-input";
import { useBlockStore } from "@/store/blocks.store";
import { useState } from "react";

export const BlockSearch = () => {
    const { setBlocks } = useBlockStore();
    const [text, setText] = useState<string>("");

    const handleSearch = (text: string) => {
        // If the search text is empty, reset to initial blocks
        if(text === "") setBlocks(initialBlocks);
        // Else, filter based on the title
        else {
            const filteredBlocks = initialBlocks.filter(
                block => block.title.toLowerCase().includes(text.toLowerCase())
            );
            setBlocks(filteredBlocks);
        }
    }

    return (
        // FlowUI Debounced Input
        <DebouncedInput
            placeholder="Search for blocks"
            className="w-100 rounded-none border-y-0 border-x-dashed focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={text}
            debouncing
            debouncingValue={500}
            onDebouncedChange={(text) => handleSearch(text)}
            onChange={(e) => setText(e.target.value)}
        />
    )
}