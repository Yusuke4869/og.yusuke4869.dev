import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    <body className={inter.className}>
      <main>{children}</main>
    </body>
  </html>
);

export default Layout;
