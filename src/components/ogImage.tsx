import { jaModel, Parser } from "budoux";

export const OGImage = ({
  title,
  bgUrl,
  color,
}: {
  title?: string | null;
  bgUrl?: string | null;
  color?: string | null;
}): JSX.Element => {
  const parser = new Parser(jaModel);
  const words = parser.parse(title ?? "Hello, World!");

  return (
    <div
      lang="ja-JP"
      style={{
        display: "flex",
        flexDirection: "column",
        color: `#${color ?? "000"}`,
        width: "100%",
        height: "100%",
        padding: "50px 40px",
        backgroundImage: `url(${
          bgUrl ??
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD4DwABBAEAcCBlCwAAAABJRU5ErkJggg=="
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          padding: "40px 50px 50px 50px",
          backgroundColor: "#fff",
          borderRadius: 20,
        }}
      >
        <p
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 60,
            maxHeight: "75%",
            overflow: "hidden",
          }}
        >
          {words.map((word, i) => {
            const list = word.split(" ");
            const len = list.length;

            return len === 1 ? (
              <span key={i} style={{ display: "block" }}>
                {word}
              </span>
            ) : (
              list.map((w, j) => (
                <span key={j} style={{ display: "block", paddingRight: j === len - 1 ? 0 : 16 }}>
                  {w}
                </span>
              ))
            );
          })}
        </p>
        <div
          style={{
            flex: "1 1 0%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <div
            style={{
              flex: "1 1 0%",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="icon"
              height={65}
              src="https://github.com/yusuke4869.png"
              style={{
                borderRadius: "100%",
              }}
              width={65}
            />
            <span
              style={{
                fontSize: 50,
              }}
            >
              Yusuke
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
