import { db } from "@/utils/db";
import { put } from "@vercel/blob";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") && 1;
  const limit = searchParams.get("limit") && 30;

  const result = await db.image.findMany({
    // skip: page,
    // take: limit,
  });

  return Response.json(result);
}

export async function POST(request: Request) {
  const data = await request.formData();
  const file = data.get("image") as File;

  if (!file.name) {
    return Response.json(
      { message: "Выберите файл для загрузки!" },
      { status: 404 }
    );
  }

  const upload = await put(file.name, file, { access: "public" });

  const image = await db.image.create({
    data: {
      link: upload.url,
      altTxt: upload.pathname,
    },
  });

  return Response.json({ message: "Успешно добавленно!", image });
}
