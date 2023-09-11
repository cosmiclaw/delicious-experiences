import * as React from "react";

export function PostGrid({ children }) {
  return <div className="grid grid-cols-3 gap-9">{children}</div>;
}
