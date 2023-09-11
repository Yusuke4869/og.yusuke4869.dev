import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <html lang="ja">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default Layout;
