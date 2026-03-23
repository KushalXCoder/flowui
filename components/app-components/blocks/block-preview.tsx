"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type BlockPreviewProps = {
    title: string;
    type: string;
    slug: string;
};

export const BlockPreview = ({
    title,
    type,
    slug,
}: BlockPreviewProps) => {
    const [LoadedComponent, setLoadedComponent] = useState<ComponentType | null>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let mounted = true;

        const loadComponent = async () => {
            setHasError(false);
            setLoadedComponent(null);

            try {
                const module = await import(`@/registry/flowui/blocks/${type}/${slug}/${slug}`);
                const component = (module.default ?? module[Object.keys(module)[0]]) as ComponentType | undefined;

                if (!mounted) {
                    return;
                }

                if (!component) {
                    setHasError(true);
                    return;
                }

                setLoadedComponent(() => component);
            } catch {
                if (mounted) {
                    setHasError(true);
                }
            }
        };

        loadComponent();

        return () => {
            mounted = false;
        };
    }, [type, slug]);

    return (
        <div className="min-h-screen flex justify-center items-center rounded-lg border bg-[radial-gradient(circle,#d1d5db_0.5px,transparent_1px)] bg-size-[14px_14px]">
            {hasError ? (
                <div className="flex min-h-[60svh] items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                    Block preview not found for {type}/{slug}
                </div>
            ) : LoadedComponent ? (
                <LoadedComponent />
            ) : (
                <div className="text-sm text-muted-foreground">Loading preview...</div>
            )}
        </div>
    )
}