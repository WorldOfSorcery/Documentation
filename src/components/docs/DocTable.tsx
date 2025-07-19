import type { ReactNode } from "react";

export const DocTable = ({ children }: { children: ReactNode }) => (
    <table className="doc-table">{children}</table>
);
