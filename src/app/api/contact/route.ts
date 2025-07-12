import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const body = await req.text()
        console.log(body);
        if (!body) {
        return NextResponse.json({ error: "No body sent" }, { status: 400 })
        }

        const { name, email, message } = JSON.parse(body)

        // Gửi cho bạn
        await resend.emails.send({
        from: `Portfolio Contact <onboarding@resend.dev>`,
        to: "khoahocgiahuy@gmail.com",
        subject: `Tin nhắn từ ${name}`,
        html: `
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nội dung:</strong></p>
            <p>${message}</p>
        `,
        })

        // Gửi cảm ơn
        // await resend.emails.send({
        // from: `Portfolio Contact <onboarding@resend.dev>`,
        // to: email,
        // subject: "Cảm ơn bạn đã liên hệ!",
        // html: `
        //     <p>Xin chào ${name},</p>
        //     <p>Cảm ơn bạn đã gửi tin nhắn. Tôi sẽ phản hồi sớm nhất có thể.</p>
        //     <p>– Huy</p>
        // `,
        // })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("❌ Lỗi gửi email:", error)
        return NextResponse.json({ error: "Lỗi gửi email" }, { status: 500 })
    }
}
