// This component provides a speaker icon that, when clicked, uses the Web Speech API to read aloud the provided text
// in the specified language.

"use client";

import { cn } from "@/lib/utils";
import { Volume2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type SpeakerProps = {
    text: string;
    lang?: string;
    className?: string;
};

const Speaker = ({ text, lang = 'en-IN', className }: SpeakerProps) => {
    const [isSupported] = useState<boolean>(() => {
        return typeof window !== 'undefined' && 'speechSynthesis' in window;
    });
  
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {

            const setPreferredVoice = () => {
                const voices = window.speechSynthesis.getVoices();
                if(voices.length === 0) return;

                // Try to find a specific, high-quality voice
                const preferredVoice = voices.find(
                    (v) => v.lang === lang && v.name.includes('Google')
                ) || voices.find((v) => v.lang.startsWith(lang.split('-')[0])); // Fallback to any voice with the same language prefix

                if (preferredVoice) {
                    setVoice(preferredVoice);
                }
            };

            window.speechSynthesis.addEventListener('voiceschanged', setPreferredVoice);
            setPreferredVoice();

            return () => {
                window.speechSynthesis.removeEventListener('voiceschanged', setPreferredVoice);
            };
        }
    }, []);

    const speakText = useCallback(() => {
        if (!isSupported) {
            console.error('Web Speech API is not supported.');
            return;
        }

        // 1. Cancel any currently speaking utterance
        window.speechSynthesis.cancel(); 

        // 2. Create the utterance
        const utterance = new SpeechSynthesisUtterance(`${text}`);

        // 3. Apply the preferred voice if available
        if (voice) {
            utterance.voice = voice;
        }

        // 4. Set other optional properties
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.lang = lang;

        // 5. Speak the text
        window.speechSynthesis.speak(utterance);
    }, [isSupported, voice, text, lang]);

    if (!isSupported) {
        return null;
    }

    return (
        <Volume2
            onClick={speakText}
            className={cn("size-6",className)}
        />
    )
}

export default Speaker;