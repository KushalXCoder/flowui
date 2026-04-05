import { BlockShowcase } from "@/components/app-components/blocks/block-showcase";

const Page = () => {
    return (
        <div className="flex flex-col gap-5">
            <BlockShowcase
                title="Auth01"
                type="auth-flow"
                slug="auth01"
                description="An authentication flow block with tabs."
                code="npx shadcn@latest install auth01"
            />
        </div>
    )
}

export default Page;