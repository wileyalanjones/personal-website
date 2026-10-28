"use client";

import { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { PlayIcon, CloseIcon } from "@/app/components/Icons";

export function VideoModal({ videoId }: { videoId: string }) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [open]);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent transition-colors">
                <PlayIcon className="h-4 w-4" />
                Watch Demo
            </button>
            {open && createPortal(
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={() => setOpen(false)}
                >
                <div
                    className="relative w-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-10 right-0 text-white hover:text-stone-300"
                    aria-label="Close video"
                    >
                    <CloseIcon className="h-6 w-6" />
                    </button>

                    <div className="aspect-video overflow-hidden rounded-lg bg-black">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="Project demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    </div>
                </div>
                </div>,
                document.body
            )}
        </>
    )
}

