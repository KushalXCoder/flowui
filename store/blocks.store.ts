import { initialBlocks } from "@/lib/blocks";
import { create } from "zustand";

type BlockData = {
    title: string;
    type: string;
    slug: string;
    description: string;
};

type BlockStore = {
    blocks: BlockData[];
    setBlocks: (data: BlockData[]) => void;
}

export const useBlockStore = create<BlockStore>((set) => ({
    blocks: initialBlocks,
    setBlocks: (data: BlockData[]) => set({ blocks: data })
}))