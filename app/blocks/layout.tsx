"use client";

import { CommonLayout } from "@/components/app-components/common-layout";
import { Divider } from "@/components/app-components/divider";

const Layout = ({
    children
}: { children: React.ReactNode }) => {
    const blocks = ["Auth Flow", "Payment Flow"];
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

                        <div className="sticky top-40 z-0 flex gap-8 border-y border-dashed px-10 mt-8">
                            {blocks.map((block) => (
                                <h1
                                    key={block}
                                    className="font-mono text-muted-foreground hover:text-foreground cursor-pointer border-x border-dashed px-4 py-1 hover:border-gray-400 hover:bg-accent transition-all"
                                >
                                    {block}
                                </h1>
                            ))}
                        </div>
                    </div>
                    <div className="px-10 mt-3 mb-5">
                        {children}
                    </div>
                </div>
            </CommonLayout>
        </div>
    )
}

export default Layout;