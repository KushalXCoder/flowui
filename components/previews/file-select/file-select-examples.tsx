
import { FileSelect, FileSelectLogo, FileSelectText } from "@/registry/flowui/components/file-select/file-select";
import { FolderUp, ImageUp, Upload, File, User, CloudUpload } from "lucide-react";
import { cn } from "@/lib/utils";

export const FileSelectMultiple = () => {
    return (
        <FileSelect multiple className="min-h-32 w-full max-w-sm mx-auto bg-background hover:bg-muted/50 transition-colors">
            <FolderUp className="size-6 text-muted-foreground mb-2" />
            <FileSelectText>
                <span className="font-semibold text-foreground">Upload Multiple Files</span>
                <span className="block text-xs text-muted-foreground mt-1">Select one or more files</span>
            </FileSelectText>
        </FileSelect>
    )
}

export const FileSelectAccept = () => {
    return (
        <FileSelect accept="image/png, image/jpeg" className="min-h-32 w-full max-w-sm mx-auto bg-background hover:bg-muted/50 transition-colors border-dashed border-2 cursor-pointer">
            <FileSelectLogo>
                <ImageUp className="size-6 text-muted-foreground mb-2" />
            </FileSelectLogo>
            <FileSelectText>
                <span className="font-semibold text-foreground">Upload Images Only</span>
                <span className="block text-xs text-muted-foreground mt-1">Accepts PNG and JPG formats</span>
            </FileSelectText>
        </FileSelect>
    )
}

export const FileSelectCompact = () => {
    return (
        <FileSelect className="h-12 w-full max-w-xs mx-auto flex flex-row items-center justify-center gap-3 rounded-full border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors shadow-sm">
            <FileSelectLogo className="size-4" />
            <FileSelectText>
                Upload Document
            </FileSelectText>
        </FileSelect>
    )
}

export const FileSelectProfile = () => {
    return (
        <div className="w-full flex justify-center">
            <FileSelect className="size-10 rounded-full">
                <FileSelectLogo className="size-4" />
            </FileSelect>
        </div>
    )
}