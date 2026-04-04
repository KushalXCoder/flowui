import { TokensResult } from "shiki";

type CodeDisplayProps = {
    content: TokensResult | null;
}

export const CodeDisplay = ({
    content
}: CodeDisplayProps) => {
    if(!content) {
        return (
            <div className="flex h-full justify-center items-center">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }
    return (
        <div className="size-full">
            <pre className="p-3">
                {content.tokens.map((line, i) => (
                    <div key={i} className="flex gap-8 font-code mt-1">
                        <span className="text-gray-500">{i}</span>
                        <div>
                            {line.map((token, j) => (
                                <span key={j} style={{ color: token.color }}>
                                    {token.content}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </pre>
        </div>
    )
}