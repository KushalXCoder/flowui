
import TextDivider from "@/registry/flowui/components/text-divider";

export default function TextDividerDemo() {
    return (
        <div className="flex flex-col gap-6 w-ful min-w-3xl p-4 animate-in fade-in zoom-in duration-500">
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Default</h4>
                <p className="text-xs text-muted-foreground">The default text divider.</p>
            </div>
            <TextDivider text="or continue with" />
            
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Thin</h4>
                <p className="text-xs text-muted-foreground">A subtle 0.5px line.</p>
            </div>
            <TextDivider variant="thin" text="Section Break" />

            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Thick</h4>
                <p className="text-xs text-muted-foreground">A bolder divider.</p>
            </div>
            <TextDivider variant="thick" text="New Chapter" lineColor="bg-primary/20" />

             <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Rounded</h4>
                <p className="text-xs text-muted-foreground">Rounded edges for a softer look.</p>
            </div>
            <TextDivider variant="rounded" text="Options" lineColor="bg-blue-500/50" />
        </div>
    )
}
