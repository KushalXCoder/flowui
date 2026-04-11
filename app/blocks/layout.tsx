import { BlockSearch } from "@/components/app-components/blocks/block-search";
import { CommonLayout } from "@/components/app-components/common-layout";

const Layout = ({
    children
}: { children: React.ReactNode }) => {
    // const blocks = ["Auth Flow", "Payment Flow"];
    return (
        <div className="min-h-screen flex flex-col overflow-hidden px-40 bg-accent">
            <CommonLayout>
                <div className="min-h-[calc(100vh-76px)] flex flex-col gap-5 font-poppins">
                    <div className="pt-10">
                        <div className="flex flex-col gap-5 px-10">
                            <h1 className="font-caveat text-6xl font-semibold">
                                Blocks
                            </h1>
                            <p className="text-muted-foreground font-mono max-w-full">
                                FlowUI aims to make the development flow easier for the devs and to do so, FlowUI provides you with ready to
                                use blocks that you can use in your projects. These blocks are built using the components provided by FlowUI,
                                Shadcn and are designed to be easily customizable to fit your needs. Whether you need a login form, a forgot
                                password sheet, or any other common UI pattern, FlowUI has got you covered with its collection of blocks.
                            </p>
                        </div>

                        <div className="flex justify-between items-center px-10 mt-5 border-y border-dashed">
                            <div />
                            <BlockSearch />
                        </div>
                    </div>
                    <div className="px-10 mb-5">
                        {children}
                    </div>
                </div>
            </CommonLayout>
        </div>
    )
}

export default Layout;