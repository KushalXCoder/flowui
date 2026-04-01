import registry from "@/registry/flowui/blocks/registry.json";

type BlockList = {
    name: string;
    slug: string;
}

type Category = {
    name: string;
    blocks: BlockList;
};

export default function getBlockFiles (
    category: string,
    title: string
) {
    console.log("Registry:", registry);

    for (const categoryItem of registry.categories) {
        if(categoryItem.name === category) {
            console.log("Found category:", categoryItem);
            for (const block of categoryItem.items) {
                if(block.name === title) {
                    console.log("Found block:", block);
                    return block.files;
                }
            }
        }
    }
}