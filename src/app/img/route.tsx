import { ImageResponse } from "next/server";
import { loadGoogleFont } from "~/libs/font";

export const runtime = "edge";
export const revalidate = 60;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const notoSansJpBuffer = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
  });

  const title = searchParams.get("title");
  const bgUrl = searchParams.get("bg");
  const color = searchParams.get("color");

  return new ImageResponse(
    (
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
            <img
              style={{
                borderRadius: "100%",
              }}
              src="https://github.com/yusuke4869.png"
              width={60}
              height={60}
              alt="icon"
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
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "NotoSansJP",
          data: notoSansJpBuffer,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
};
