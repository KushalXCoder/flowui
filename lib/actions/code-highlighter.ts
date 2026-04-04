import { BundledLanguage, createHighlighter } from "shiki";

const highlighterPromise = createHighlighter({
    themes: ["github-light"],
    langs: ["ts"]
});

export const highlightTokens = async (code: string, lang: BundledLanguage) => {
    const highlighter = await highlighterPromise;
    return highlighter.codeToTokens(code, {
        lang,
        theme: "github-light",
    });
}