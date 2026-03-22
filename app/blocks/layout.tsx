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
                <div className="min-h-[calc(100vh-76px)] flex flex-col gap-5 font-poppins px-10">
                    <div className="flex flex-col gap-3 pt-10">
                        <h1 className="font-caveat text-6xl font-semibold">
                            Blocks
                        </h1>
                        <p className="text-muted-foreground font-mono max-w-full">
                            FlowUI aims to make the development flow easier for the devs and to do so, FlowUI provides you with ready to
                            use blocks that you can use in your projects. These blocks are built using the components provided by FlowUI,
                            Shadcn and are designed to be easily customizable to fit your needs. Whether you need a login form, a forgot
                            password sheet, or any other common UI pattern, FlowUI has got you covered with its collection of blocks.
                        </p>

                        <Divider type="screen" className="mt-10" />

                        <div className="flex gap-5 py-3">
                            {blocks.map((block) => (
                                <h1
                                    key={block}
                                    className="font-mono text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-md"
                                >
                                    {block}
                                </h1>
                            ))}
                        </div>

                        <Divider type="screen" />
                    </div>
                    {children}
                </div>
            </CommonLayout>
        </div>
    )
}

export default Layout;