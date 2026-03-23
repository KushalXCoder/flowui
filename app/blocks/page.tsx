import { BlockShowcase } from "@/components/app-components/blocks/block-showcase";

const Page = () => {
    return (
        <div className="flex flex-col gap-5">
            <BlockShowcase
                title="Auth01"
                type="auth-flow"
                slug="auth01"
                description="A simple authentication form"
                code="npx shadcn@latest install auth01"
            />
            <BlockShowcase
                title="Auth02"
                type="auth-flow"
                slug="auth02"
                description="Another authentication form"
                code="npx shadcn@latest install auth02"
            />
        </div>
    )
}

export default Page;