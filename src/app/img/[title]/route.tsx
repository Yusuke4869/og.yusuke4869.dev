import { ImageResponse } from "next/server";
import { OGImage } from "~/components/ogImage";
import { loadGoogleFont } from "~/libs/font";

export const runtime = "edge";
export const revalidate = 60;

export const GET = async (request: Request, { params }: { params: { title: string } }) => {
  const { searchParams } = new URL(request.url);
  const notoSansJpBuffer = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
  });

  const bgUrl = searchParams.get("bg");
  const color = searchParams.get("color");

  return new ImageResponse(<OGImage title={params.title} bgUrl={bgUrl} color={color} />, {
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
  });
};
