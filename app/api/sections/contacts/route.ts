import { db } from "@/utils/db";

export async function POST(request: Request) {
  const { username, comment, telephon } = await request.json();

  const data = await db.leaveMessageUs.create({
    data: {
      username,
      comment,
      telephone:telephon,

    },
  });

  return Response.json({ message: "Успешно добавленно!", data });
}
