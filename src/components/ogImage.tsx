export const OGImage = ({
  title,
  bgUrl,
  color,
}: {
  title?: string | null;
  bgUrl?: string | null;
  color?: string | null;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      color: `#${color ?? "ffffff"}`,
      width: "100%",
      height: "100%",
      padding: "50px",
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
        flex: "1 1 0%",
      }}
    />
    <p
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 70,
      }}
    >
      {title ?? "Hello, World!"}
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
          gap: "10px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="icon"
          height={60}
          src="https://github.com/yusuke4869.png"
          style={{
            borderRadius: "100%",
          }}
          width={60}
        />
        <span
          style={{
            fontSize: 40,
          }}
        >
          Yusuke
        </span>
      </div>
    </div>
  </div>
);
