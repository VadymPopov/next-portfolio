import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const body = await req.json();

  const secret = req.headers.get("x-webhook-secret");
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const slug = body.slug;

  if (!slug) {
    return NextResponse.json({ message: "Missing slug" }, { status: 400 });
  }

  revalidatePath("/projects");
  revalidatePath(`/projects/${slug}`);

  return NextResponse.json({ revalidated: true });
}
