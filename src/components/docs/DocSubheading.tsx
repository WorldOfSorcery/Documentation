import type {ReactNode} from "react";

export const DocSubheading = ({ children }: { children: ReactNode }) => (
  <h3 className="doc-subheading">{children}</h3>
);
