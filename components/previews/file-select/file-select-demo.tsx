
import { FileSelect, FileSelectLogo, FileSelectText } from "@/registry/flowui/components/file-select/file-select";

export const FileSelectDemo = () => {
  return (
    <FileSelect className="min-h-40 w-full max-w-lg mx-auto bg-background hover:bg-muted/50 transition-colors">
      <FileSelectLogo className="size-8 text-muted-foreground mb-2" />
      <FileSelectText>
          <span className="font-semibold text-foreground">
          Click to upload
          </span>{" "}
          <span className="text-muted-foreground">or drag and drop</span>
      </FileSelectText>
        <p className="text-xs text-muted-foreground mt-2">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
    </FileSelect>
  )
}
