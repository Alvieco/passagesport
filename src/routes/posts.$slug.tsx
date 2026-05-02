import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'

import { allPosts } from 'content-collections'

const categoryColors: Record<string, string> = {
  'Analisis Taktikal': 'bg-blue-100 text-blue-800',
  'Transfer Pemain': 'bg-yellow-100 text-yellow-800',
  'Berita Terkini': 'bg-red-100 text-red-800',
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
      throw new Error('Post not found')
    }
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <a
        href="/"
        className="inline-flex items-center gap-1 text-sm text-green-700 hover:text-green-900 mb-6"
      >
        ← Kembali ke Beranda
      </a>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map((cat) => {
          const color = categoryColors[cat] ?? 'bg-gray-100 text-gray-700'
          return (
            <a
              key={cat}
              href={`/category/${cat}`}
              className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${color} hover:opacity-80 transition-opacity`}
            >
              {cat}
            </a>
          )
        })}
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{formatDate(post.date)}</p>
      <p className="text-lg text-gray-600 border-l-4 border-green-500 pl-4 mb-8 italic">
        {post.summary}
      </p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  )
}
