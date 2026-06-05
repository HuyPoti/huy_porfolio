"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Vui lòng nhập tên hợp lệ" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  message: z.string().min(10, { message: "Nội dung quá ngắn" }),
})

type ContactFormValues = z.infer<typeof ContactFormSchema>

export function ContactForm() {
    const [status, setStatus] = useState("")

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
        name: "",
        email: "",
        message: "",
        },
    })

    const onSubmit = async (data: ContactFormValues) => {
        setStatus("Đang gửi...")

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (res.ok) {
        setStatus("✅ Gửi thành công! Cảm ơn bạn đã liên hệ.")
        form.reset()
        } else {
        setStatus("❌ Lỗi khi gửi. Vui lòng thử lại.")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bento-card space-y-6 max-w-xl mx-auto my-10 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl w-full text-warning-foreground">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="my-2 text-lg font-semibold text-warning-foreground">Họ và tên</FormLabel>
                    <FormControl>
                        <Input placeholder="Nguyễn Văn A" {...field} className="bg-white/10 border-white/20 text-warning-foreground placeholder:text-warning-foreground/40 rounded-xl focus-visible:ring-cyan-500" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="my-2 text-lg font-semibold text-warning-foreground">Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} className="bg-white/10 border-white/20 text-warning-foreground placeholder:text-warning-foreground/40 rounded-xl focus-visible:ring-cyan-500" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="my-2 text-lg font-semibold text-warning-foreground">Tin nhắn</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Nhập nội dung bạn muốn liên hệ..." {...field} className="bg-white/10 border-white/20 text-warning-foreground placeholder:text-warning-foreground/40 rounded-xl min-h-[120px] focus-visible:ring-cyan-500" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="flex flex-col items-center justify-center gap-3">
                    <Button type="submit" className="w-full py-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-600/30 transition-all duration-300 cursor-pointer">Gửi liên hệ</Button>
                    {status && <p className="text-sm font-medium text-warning-foreground my-2">{status}</p>}
                </div>
                
            </form>
        </Form>
    )
}
