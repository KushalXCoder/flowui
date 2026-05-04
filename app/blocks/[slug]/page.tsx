import { BlockPage } from "@/components/app-components/blocks/block-page";

const Page = async ({
    params
}: {
    params: { slug: string }
}) => {
    // It shows dont require await, but it needs await
    const { slug } = await params;
    return (
        <div className="flex flex-col gap-5 min-h-screen w-full">
            <BlockPage slug={slug} />
        </div>
    )
}

export default Page;