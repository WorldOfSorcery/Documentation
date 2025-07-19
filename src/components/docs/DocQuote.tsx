import type { ReactNode } from "react";

export const DocQuote = ({ children }: { children: ReactNode }) => (
    <blockquote className="doc-quote">{children}</blockquote>
);
