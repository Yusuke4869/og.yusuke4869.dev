import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "OG Image Generator - Yusuke4869",
};

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <html lang="ja">
    <head>
      <link href="/favicon.ico" rel="icon" />
    </head>
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default Layout;
