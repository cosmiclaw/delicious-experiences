import * as React from "react";
import { Header, Footer } from "@components";

export function Layout({ children, solid }) {
  return (
    <div>
      <Header solid={solid} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
