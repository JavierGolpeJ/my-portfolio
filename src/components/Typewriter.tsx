import {type JSX, useEffect, useState} from "react";

type Token = {
    text: string;
    className?: string;
};

type CodeLine = {
    tokens: Token[];
};

const codeLines: CodeLine[] = [
    {
        tokens: [
            { text: "export", className: "text-sky-400" },
            { text: " ", className: "" },
            { text: "function", className: "text-purple-400" },
            { text: " ", className: "" },
            { text: "buildProfile", className: "text-emerald-300" },
            { text: "()", className: "text-zinc-200" },
            { text: " ", className: "" },
            { text: "{", className: "text-pink-400" },
        ],
    },
    {
        tokens: [
            { text: "  return {", className: "text-sky-400" },
        ],
    },
    {
        tokens: [
            { text: '    name: "Javier",', className: "text-amber-300" },
        ],
    },
    {
        tokens: [
            { text: '    role: "Full-Stack Developer",', className: "text-amber-300" },
        ],
    },
    {
        tokens: [
            { text: '    focus: "Reliable, scalable web apps"', className: "text-amber-300" },
        ],
    },
    {
        tokens: [
            { text: "  };", className: "text-sky-400" },
        ],
    },
    {
        tokens: [
            { text: "}", className: "text-pink-400" },
        ],
    }

];

type TypewriterCodeProps = {
    speedMs?: number;
    loop?: boolean;
    endDelayMs?: number;
};

export default function TypewriterCode({
                                           speedMs = 35,
                                           loop = false,
                                           endDelayMs = 1500,
                                       }: TypewriterCodeProps) {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (isFinished) return;

        const currentLine = codeLines[lineIndex];
        if (!currentLine) return;

        const fullLineText = currentLine.tokens.map((t) => t.text).join("");

        const timeout = setTimeout(() => {
            if (charIndex < fullLineText.length) {
                // continue typing this line
                setCharIndex((c) => c + 1);
            } else {
                // move to next line or finish
                if (lineIndex < codeLines.length - 1) {
                    setLineIndex((l) => l + 1);
                    setCharIndex(0);
                } else {
                    // finished all lines
                    setIsFinished(true);

                    if (loop) {
                        setTimeout(() => {
                            setLineIndex(0);
                            setCharIndex(0);
                            setIsFinished(false);
                        }, endDelayMs);
                    }
                }
            }
        }, speedMs);

        return () => clearTimeout(timeout);
    }, [charIndex, lineIndex, speedMs, loop, endDelayMs, isFinished]);

    return (
        <div className="rounded-2xl bg-[#F2F4F3] dark:bg-zinc-950 text-[10px] leading-relaxed text-zinc-200 p-3
        font-mono min-h-[140px] sm:min-h-[140px] whitespace-pre">
            {codeLines.map((line, idx) => {
                const isCurrentLine = idx === lineIndex;

                const fullLineText = line.tokens.map((t) => t.text).join("");
                let visibleChars: number;

                if (idx < lineIndex) {
                    // fully typed previous lines
                    visibleChars = fullLineText.length;
                } else if (isCurrentLine) {
                    visibleChars = charIndex;
                } else {
                    visibleChars = 0;
                }

                // When fully finished (no loop), show whole file
                if (isFinished) visibleChars = fullLineText.length;

                let remaining = visibleChars;
                const spans: JSX.Element[] = [];

                line.tokens.forEach((token, tokenIdx) => {
                    const take = Math.min(token.text.length, Math.max(remaining, 0));
                    const content = token.text.slice(0, take);
                    remaining -= take;

                    spans.push(
                        <span key={`${idx}-${tokenIdx}`} className={token.className}>
              {content}
            </span>
                    );
                });

                const showCursor = isCurrentLine && !isFinished;

                return (
                    <div key={idx} className="relative">
                        {spans}
                        {showCursor && (
                            <span className="inline-block w-[6px] h-[12px] bg-emerald-300 ml-[1px] animate-pulse" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
