import Speaker from "@/registry/flowui/speaker";

const ExampleGenerator = ({ text, lang, label }: { text: string; lang: string, label: string }) => {
    return (
        <div className="flex items-center gap-3 border px-4 py-2 rounded-lg bg-background shadow-sm">
            <span className="font-medium text-gray-400">{label}</span>
            <Speaker text={text} lang={lang} />
        </div>
    )
}

export function DefaultExample() {
    return (
        <ExampleGenerator
            text="This is a text-to-speech example in English."
            lang="en-US"
            label="English (US)"
        />
    )
}

export function SpanishExample() {
    return (
        <ExampleGenerator
            text="Este es un ejemplo de texto a voz."
            lang="es-ES"
            label="Spanish (ES)"
        />
    )
}

export function FrenchExample() {
    return (
        <ExampleGenerator
            text="Ceci est un exemple de synthèse vocale."
            lang="fr-FR"
            label="French (FR)"
        />
    )
}

export function GermanExample() {
    return (
        
        <ExampleGenerator
            text="Dies ist ein Beispiel für Text-zu-Sprache."
            lang="de-DE"
            label="German (DE)"
        />
    )
}

export function JapaneseExample() {
    return (
        <ExampleGenerator
            text="これはテキスト読み上げの例です。"
            lang="ja-JP"
            label="Japanese (JP)"
        />
    )
}
