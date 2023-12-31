import Image from "next/image";

import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "OG Image Generator",
};

const Home: NextPage = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      alt="Hello, World!"
      src="/img"
      style={{
        maxWidth: "100%",
        margin: 32,
      }}
    />
  </div>
);

export default Home;
