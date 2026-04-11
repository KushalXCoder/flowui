import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Installation } from "./installation";
import { BlockPreview } from "./block-preview";
import { BlockCode } from "./block-code";
import { Loader2 } from "lucide-react";

type BlockShowcaseProps = {
    title: string;
    type: string;
    slug: string;
    description: string;
    reset?: boolean;
}

export const BlockShowcase = ({
    title,
    type,
    slug,
    description,
    reset = false
}: BlockShowcaseProps) => {
    return (
        <div className="w-full flex flex-col gap-3">
            <Tabs defaultValue="preview" className="w-full">
                <div className="w-full flex flex-wrap items-center justify-between gap-3 border px-1.5 py-1.5 rounded-lg">
                    <div className="flex items-center gap-4">
                        <TabsList>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="code">Code</TabsTrigger>
                        </TabsList>
                        <div className="h-5 w-px bg-muted-foreground rounded-lg" />
                        <p className="text-foreground text-sm">{description}</p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3 h-full">
                        {reset && (
                            <Loader2 className="hover:bg-accent h-8 w-8 rounded-sm p-1.5" />
                        )}
                        <Installation slug={slug} />
                    </div>
                </div>
                <TabsContent value="preview" className="w-full">
                    <BlockPreview title={title} type={type} slug={slug} />
                </TabsContent>
                <TabsContent value="code">
                    <BlockCode type={type} slug={slug} />
                </TabsContent>
            </Tabs>
        </div>
    )
}