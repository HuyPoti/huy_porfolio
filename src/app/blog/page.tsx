import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 bg-white text-black mt-5">
      <h1 className="text-3xl font-bold mb-6">Blog cá nhân</h1>
      <ul className="space-y-1">
        {posts.map((post) => (
        //   <li key={post.slug} className="border-b pb-4">
          <li key={post.slug} className="border-2 border-blue-200 p-5 rounded-xl">

            <h2 className="text-xl font-semibold">
                {post.title}
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 underline text-sm">
              Đọc tiếp →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
