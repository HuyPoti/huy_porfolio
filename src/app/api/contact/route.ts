import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.text();
    if (!body) {
      return NextResponse.json({ error: "No body sent" }, { status: 400 });
    }

    const { name, email, message } = JSON.parse(body);

    // Gửi cho bạn (Thông báo có liên hệ mới)
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "khoahocgiahuy@gmail.com",
      replyTo: email,
      subject: `[Portfolio] Tin nhắn từ ${name}`,
      text: `Tên: ${name}\nEmail: ${email}\nNội dung: ${message}`,
      html: `
                <h3>Bạn có tin nhắn mới từ Website Portfolio</h3>
                <p><strong>Tên:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Nội dung:</strong></p>
                <p>${message}</p>
            `,
    });

    // Gửi cảm ơn người liên hệ (Auto-reply)
    await transporter.sendMail({
      from: `"Gia Huy" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Cảm ơn bạn đã liên hệ!",
      text: `Xin chào ${name},\n\nCảm ơn bạn đã gửi tin nhắn liên hệ. Tôi đã nhận được thông tin và sẽ phản hồi lại bạn sớm nhất có thể.\n\nTrân trọng,\nGia Huy`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; text-align: center; background: #1a1a2e; padding: 40px; border-radius: 10px; color: #00d4ff;">
          <p style="font-size: 16px; margin-bottom: 20px;">Xin chào <strong>${name}</strong>,</p>
          <p style="font-size: 14px; margin-bottom: 15px;">Cảm ơn bạn đã gửi tin nhắn liên hệ từ Website Portfolio của tôi.</p>
          <p style="font-size: 14px; margin-bottom: 15px;">Tôi đã nhận được thông tin và sẽ phản hồi lại bạn qua email này sớm nhất có thể.</p>
          <div style="margin: 20px 0;"></div>
          <p style="font-size: 14px; margin-top: 20px;">Trân trọng,</p>
          <p style="font-size: 16px; font-weight: bold; margin-top: 10px; color: #00d4ff;">Gia Huy</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Lỗi gửi email:", error);
    return NextResponse.json({ error: "Lỗi gửi email" }, { status: 500 });
  }
}
