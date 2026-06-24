import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const expectedSecret = `Bearer ${process.env.MAKE_SECRET}`;

  if (!process.env.MAKE_SECRET) {
    return NextResponse.json(
      { success: false, error: "MAKE_SECRET is not configured" },
      { status: 500 }
    );
  }

  if (authHeader !== expectedSecret) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const {
    title,
    summary,
    body_markdown,
    tags,
    source_urls,
    status,
    model_provider,
    model_name,
  } = body;

  if (!title || !summary || !body_markdown) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields: title, summary, body_markdown",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Article draft received from Make",
    received: {
      title,
      summary,
      body_markdown,
      tags,
      source_urls,
      status: status || "draft",
      model_provider,
      model_name,
    },
  });
}