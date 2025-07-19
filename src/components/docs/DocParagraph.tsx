import type {ReactNode} from "react";

export const DocParagraph = ({ children }: { children: ReactNode }) => (
    <p className="doc-paragraph">{children}</p>
);
