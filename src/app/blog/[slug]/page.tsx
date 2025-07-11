import { getPostBySlug } from "@/lib/blog"
import Link from "next/link";
import { notFound } from "next/navigation"


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  if (!post) return notFound()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 bg-white text-black mt-5 px-20">
      <Link href={`/blog`} className="text-blue-500 underline text-sm">
         Quay lại ← 
      </Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  )
}
