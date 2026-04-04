import registry from "@/public/blocks/registry.json";

export default function getBlockFiles (
    category: string,
    title: string
) {
    console.log("Registry:", registry);

    for (const categoryItem of registry.categories) {
        if(categoryItem.name === category) {
            console.log("Found category:", categoryItem);
            for (const block of categoryItem.blocks) {
                if(block.name === title) {
                    console.log("Found block:", block);
                    return block.files;
                }
            }
        }
    }
}