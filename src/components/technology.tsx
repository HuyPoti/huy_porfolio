import { JSX } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface TechnologyData {
    icon: JSX.Element
    name: string
}

interface TechnologyProps {
    items: TechnologyData[]
}

// Dữ liệu chi tiết theo name
const technologyInfo: Record<string, { content: string}> = {
    Python: {
        content: "Python là ngôn ngữ lập trình thông dịch, đơn giản, dễ đọc, rất phù hợp với khoa học dữ liệu, AI, web và automation.",
    },
    "C#": {
        content: "C# là ngôn ngữ lập trình hiện đại của Microsoft, chủ yếu dùng để phát triển ứng dụng desktop, web và game (Unity).",
    },
    "C++": {
        content: "C++ là ngôn ngữ hướng đối tượng hiệu suất cao, phù hợp cho lập trình hệ thống, game, nhúng và xử lý đồ họa.",
    },
    Javascript: {
        content: "Javascript là ngôn ngữ chính của trình duyệt, cho phép tạo các website động, hiện đại và ứng dụng web toàn diện.",
    },
    Php: {
        content: "PHP là ngôn ngữ phía server phổ biến, được sử dụng rộng rãi trong xây dựng website và CMS như WordPress.",
    },
    ReactJs: {
    content: "React là thư viện JavaScript nổi tiếng do Meta phát triển, giúp xây dựng giao diện người dùng theo hướng component.",
  },
  NextJs: {
    content: "Next.js là framework dựa trên React giúp tạo ứng dụng web SSR, SSG tối ưu SEO và hiệu suất cao.",
  },
  Laravel: {
    content: "Laravel là framework PHP mạnh mẽ, cung cấp cấu trúc MVC, routing, và nhiều tính năng sẵn để phát triển web nhanh chóng.",
  },
  Tailwind: {
    content: "Tailwind CSS là framework tiện dụng theo hướng utility-first, cho phép tùy biến giao diện trực tiếp bằng class CSS.",
  },
  NodeJs: {
    content: "Node.js là môi trường chạy JavaScript phía server, cho phép xây dựng các ứng dụng backend hiệu suất cao và realtime.",
  },
  ExpressJs: {
    content: "Express là framework nhẹ cho Node.js giúp xây dựng API và ứng dụng web nhanh chóng với cấu trúc đơn giản.",
  },
  MySql: {
    content: "MySQL là hệ quản trị cơ sở dữ liệu quan hệ phổ biến, được sử dụng nhiều trong các hệ thống web và doanh nghiệp.",
  },
  Mongodb: {
    content: "MongoDB là cơ sở dữ liệu NoSQL dạng tài liệu, phù hợp với các ứng dụng có cấu trúc dữ liệu linh hoạt và cần mở rộng nhanh.",
  },
  Github: {
    content: "GitHub là nền tảng lưu trữ và quản lý mã nguồn sử dụng Git, hỗ trợ cộng tác dự án và tích hợp CI/CD.",
  },
  VsCode: {
    content: "VS Code là trình soạn thảo mã nguồn nhẹ, mã nguồn mở của Microsoft, hỗ trợ nhiều ngôn ngữ và extension phong phú.",
  },
  VsStudio: {
    content: "Visual Studio là môi trường phát triển tích hợp mạnh mẽ của Microsoft, lý tưởng cho phát triển .NET và C++.",
  },
  Postman: {
    content: "Postman là công cụ kiểm thử API phổ biến với giao diện đồ họa trực quan, hỗ trợ nhiều phương thức request.",
  }
}


export default function Technology({ items }: TechnologyProps) {
    return (
        <div className="flex flex-row flex-wrap gap-2">
        {items.map(({ icon, name }) => {
            const info = technologyInfo[name] || {
            content: "Chưa có thông tin chi tiết.",
            pros: "-"
            }

            return (
            <Dialog key={name}>
                <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="flex gap-2 items-center">
                    <span>{icon}</span>
                    <span className="text-base font-medium">{name}</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>{info.content}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Đóng</Button>
                    </DialogClose>
                    </DialogFooter>
                </DialogContent>
                </form>
            </Dialog>
            )
        })}
        </div>
    )
    }
