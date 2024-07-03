import Image from "next/image";

import type { NextPage } from "next";

const Home: NextPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <h1
      style={{
        margin: "2rem 0 0 0",
      }}
    >
      OG Image Generator
    </h1>
    <Image
      alt="Hello, World!"
      height={630}
      src="/img?bg=https://picsum.photos/1200/630"
      style={{
        maxWidth: "100%",
        margin: "1.5rem",
      }}
      width={1200}
    />
    <div>
      <p
        style={{
          margin: "0.5rem 0",
        }}
      >
        GitHub:{" "}
        <a href="https://github.com/Yusuke4869" rel="noopener noreferrer" target="_blank">
          Yusuke4869
        </a>
      </p>
      <p
        style={{
          margin: "0.5rem 0",
        }}
      >
        Portfolio:{" "}
        <a href="https://www.yusuke4869.dev" rel="noopener noreferrer" target="_blank">
          https://www.yusuke4869.dev
        </a>
      </p>
    </div>
    <p
      style={{
        margin: "1rem 0 0.5rem 0",
      }}
    >
      Copyright &copy; {new Date().getFullYear()} Yusuke4869
    </p>
  </div>
);

export default Home;
