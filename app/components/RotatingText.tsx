"use client"

import { useState, useEffect } from 'react';

export function RotatingText({ roles, suffix }: { roles: string[]; suffix?: string }) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const longest = roles.reduce((a, b) => (b.length > a.length ? b : a), roles[0] ?? "");

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(t);
    }, [index])

    useEffect(() => {
        if (visible) return;
        const t = setTimeout(() => {
            setIndex((i) => (i + 1) % roles.length);
            setVisible(true);
        }, 1000);
        return () => clearTimeout(t);
    }, [visible, roles.length])

    return (
        <span className="inline-block whitespace-nowrap">
            <span className="inline-grid align-bottom">
                {/* invisible sizer reserves space for the longest role so "suffix" never moves */}
                <span className="invisible col-start-1 row-start-1" aria-hidden="true">
                    {longest}
                </span>
                <span className={`col-start-1 row-start-1 text-left transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
                    {roles[index]}
                </span>
            </span>
            {suffix ? <span> {suffix}</span> : null}
        </span>
    )
}