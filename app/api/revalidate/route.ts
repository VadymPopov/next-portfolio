import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const secret = request.headers.get("x-webhook-secret");
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
      next: { revalidate: 0 },
    });

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
