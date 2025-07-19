import React, {type ReactNode } from "react";

type DocComponentProps = {
    title: string;
    description?: string;
    children: ReactNode;
};

const DocComponent: React.FC<DocComponentProps> = ({ title, description, children }) => {
    return (
        <div className="doc-container">
            <h1>{title}</h1>
            {description && <p className="text-lg text-gray-600 mb-6">{description}</p>}
            <div className="doc-content">
                <article className="prose prose-lg max-w-none">
                    {children}
                </article>
            </div>
        </div>
    );
};

export default DocComponent;
