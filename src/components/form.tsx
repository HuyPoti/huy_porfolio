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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto my-10 bg-warning p-5 rounded-xl">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="my-2 text-xl">Họ và tên</FormLabel>
                    <FormControl>
                        <Input placeholder="Nguyễn Văn A" {...field} />
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
                    <FormLabel className="my-2 text-xl">Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
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
                    <FormLabel className="my-2 text-xl">Tin nhắn</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Nhập nội dung bạn muốn liên hệ..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="flex flex-col items-center justify-center">
                    <Button type="submit" className="py-5 bg-orange-600 hover:bg-orange-300 text-warning-foreground">Gửi liên hệ</Button>
                    <p className="text-sm text-muted-foreground my-5">{status}</p>
                </div>
                
            </form>
        </Form>
    )
}
