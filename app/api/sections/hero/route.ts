import { db } from "@/utils/db";

export async function POST(request: Request) {
  const { title, txt, imgId } = await request.json();

  const data = await db.heroSection.create({
    data: {
      title,
      txt,
      img: { connect: { id: imgId } },
    },
  });

  return Response.json({ message: "Успешно добавленно!", data });
}
