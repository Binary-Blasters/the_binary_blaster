import { sendMail } from "@/lib/nodemailer";
import { ContactReqBody } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: ContactReqBody = await req.json();
    await sendMail(body);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
