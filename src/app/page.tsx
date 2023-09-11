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
    <img
      style={{
        maxWidth: "100%",
        margin: 32,
      }}
      src="/img"
      alt="Hello, World!"
    />
  </div>
);

export default Home;
