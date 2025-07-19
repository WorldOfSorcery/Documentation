import {type ReactNode } from "react";

type DocPageProps = {
    title: string;
    description?: string;
    children: ReactNode;
};

export const DocPage = ({ title, description, children }: DocPageProps) => {
    return (
        <div className="doc-container">
            <h1 className="doc-title">{title}</h1>
            {description && <p className="doc-description">{description}</p>}
            {children}
        </div>
    );
};
