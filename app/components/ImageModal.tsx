"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { CloseIcon } from "@/app/components/Icons"

export function ImageModal() {
    const [open, setOpen ] = useState(false)

    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [open]);

     return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent transition-colors"
            >
                always barking.
            </button>

            {open && createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-10 right-0 text-white hover:text-stone-300"
                            aria-label="Close"
                        >
                            <CloseIcon className="h-6 w-6" />
                        </button>

                        <div className="overflow-hidden rounded-xl bg-white dark:bg-stone-900 shadow-2xl">
                            <Image
                                src="/charles.jpeg"
                                alt="Charles the dog"
                                    width={1179}
                                    height={1475}
                                className="w-full h-auto"
                            />
                            <p className="px-4 py-4 text-center text-lg font-semibold text-stone-900 dark:text-white">
                                You found Charles! 🐾
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}