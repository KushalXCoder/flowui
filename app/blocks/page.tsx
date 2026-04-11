import { BlockShowcase } from "@/components/app-components/blocks/block-showcase";

const Page = () => {
    const blocks = [
        { title: "Auth01", type: "auth-flow", slug: "auth01", description: "An authentication flow block with tabs."},
        { title: "Auth02", type: "auth-flow", slug: "auth02", description: "An authentication flow block with a different design."},
        { title: "DeleteBox", type: "other", slug: "delete-box", description: "A delete box block"}
    ]
    return (
        <div className="flex flex-col gap-5">
            {blocks.map((block) => (
                <BlockShowcase
                    title={block.title}
                    type={block.type}
                    slug={block.slug}
                    description={block.description}
                    reset={true}
                />
            ))}
        </div>
    )
}

export default Page;