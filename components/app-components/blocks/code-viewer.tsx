import { FileLogo } from "@/lib/helper/file-logo";
import { cn } from "@/lib/utils";
import { ArrowBigDownDashIcon, ArrowDown, File, Folder } from "lucide-react";
import { HTMLAttributes, HTMLProps, useEffect, useRef, useState } from "react";
import { CodeDisplay } from "./code-display";
import { readFileAction } from "@/lib/actions/read-file";
import { highlightTokens } from "@/lib/actions/code-highlighter";
import { TokensResult } from "shiki";

type CodeViewerProps = {
  files: string[];
};

// Common div container as this code gets repeated
type DivContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const DivContainer = ({
  children,
  className,
  ...props
}: DivContainerProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 hover:bg-accent",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CodeViewer = ({ files }: CodeViewerProps) => {
  // Store the active file
  const [activeFile, setActiveFile] = useState<string>("");
  const [activeFileContent, setActiveFileContent] = useState<TokensResult | null>(null);
  const [folderOpen, setFolderOpen] = useState<boolean>(true);

  const cache = useRef<Record<string,TokensResult>>({});

  // Filter once, so that we don't need to apply map inside redering
  const items = files.filter((file) => !file.includes("components"));
  const components = files.filter((file) => file.includes("components"));

  useEffect(() => {
    if (files.length > 0) {
      setActiveFile(files[0]);
    }
  }, [files]);

  useEffect(() => {
    if(!activeFile) return;

    const load = async () => {
      if(cache.current[activeFile]) {
        setActiveFileContent(cache.current[activeFile]);
        return;
      }

      const data = await readFileAction(activeFile);
      const tokens = await highlightTokens(data ?? "", "ts");

      cache.current[activeFile] = tokens;
      setActiveFileContent(tokens);
    };

    load();
  }, [activeFile]);

  return (
    <div className="h-screen grid grid-cols-10 border rounded-lg">
      <div className="col-span-2 border-r py-5">
        <div className="flex flex-col gap-0.5">
          {/* Load all the files at the root location */}
          {items.map((file) => (
            <DivContainer
              key={file}
              className={`${activeFile === file ? "bg-accent" : ""}`}
              onClick={() => setActiveFile(file)}
            >
              <FileLogo filename={file} className="size-4" />
              <h1>{file.split("/").pop()}</h1>
            </DivContainer>
          ))}
          <DivContainer
            className="flex justify-between items-center"
            onClick={() => setFolderOpen(!folderOpen)}
          >
            <div className="flex items-center gap-2">
              <Folder className="size-4" />
              <h1>Components</h1>
            </div>
            <ArrowDown className="size-4" />
          </DivContainer>
          {/* Store all component files */}
          {folderOpen && components.map((file) => (
            <DivContainer
              key={file} className="px-14 truncate"
              onClick={() => setActiveFile(file)}
            >
              <FileLogo filename={file} className="size-4" />
              <h1>{file.split("/").pop()}</h1>
            </DivContainer>
          ))}
        </div>
      </div>
      <div className="col-span-8 p-1 bg-accent/50 overflow-hidden overflow-y-scroll">
        <CodeDisplay content={activeFileContent} />
      </div>
    </div>
  );
};