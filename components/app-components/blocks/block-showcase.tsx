import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Installation } from "./installation";

type BlockShowcaseProps = {
    title: string;
    description: string;
    code: string;
}

export const BlockShowcase = ({
    title,
    description,
    code,
}: BlockShowcaseProps) => {
    return (
        <div className="w-full flex flex-col gap-3">
            {/* Header */}
            <div className="w-full flex justify-between items-center border px-1.5 py-1.5 rounded-lg">
                <div className="flex items-center gap-4">
                    <Tabs defaultValue="preview">
                        <TabsList>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="code">Code</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="h-5 w-px bg-muted-foreground rounded-lg" />
                    <p className="text-foreground text-sm">{description}</p>
                </div>
                <div>
                    <Installation code={code} />
                </div>
            </div>
            {/* Component */}
            <div>
                
            </div>
        </div>
    )
}