import { ImageResponse } from "next/og";

import { OGImage } from "~/components/ogImage";
import { loadGoogleFont } from "~/libs/font";

export const runtime = "edge";
export const revalidate = 3600;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const robotoBuffer = await loadGoogleFont({
    family: "Roboto",
    weight: 700,
  });
  const notoSansJpBuffer = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
  });

  const title = searchParams.get("title");
  const bgUrl = searchParams.get("bg");
  const color = searchParams.get("color");

  return new ImageResponse(<OGImage bgUrl={bgUrl} color={color} title={title} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Roboto",
        data: robotoBuffer,
        style: "normal",
        weight: 700,
      },
      {
        name: "NotoSansJP",
        data: notoSansJpBuffer,
        style: "normal",
        weight: 700,
      },
    ],
  });
};
