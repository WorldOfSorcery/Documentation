import {type ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const DocHeading = ({ children }: Props) => (
    <h2 className="doc-heading">{children}</h2>
);
