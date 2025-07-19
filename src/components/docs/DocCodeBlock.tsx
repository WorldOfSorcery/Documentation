export const DocCodeBlock = ({ children }: { children: string }) => (
    <pre className="doc-pre">
    <code>{children}</code>
  </pre>
);
