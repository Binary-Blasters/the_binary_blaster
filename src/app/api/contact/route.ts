import { sendMail } from "@/lib/nodemailer";
import { ContactReqBody } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: ContactReqBody = await req.json();
    await sendMail(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
