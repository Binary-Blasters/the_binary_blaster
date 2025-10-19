import { MailOption } from "@/types";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async ({ name, email, message }: MailOption) => {
  const mailOption = {
    from: email,
    to: process.env.MAIL_TO,
    subject: `New message from ${name}`,

    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `,
  };
  await transporter.sendMail(mailOption)
};
