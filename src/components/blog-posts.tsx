import { Link } from '@tanstack/react-router'

import { type Post } from 'content-collections'

const categoryColors: Record<string, string> = {
  'Analisis Taktikal': 'bg-blue-100 text-blue-800',
  'Transfer Pemain': 'bg-yellow-100 text-yellow-800',
  'Berita Terkini': 'bg-red-100 text-red-800',
}

function CategoryBadge({ category }: { category: string }) {
  const color = categoryColors[category] ?? 'bg-gray-100 text-gray-700'
  return (
    <a
      href={`/category/${category}`}
      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${color} hover:opacity-80 transition-opacity`}
      onClick={(e) => e.stopPropagation()}
    >
      {category}
    </a>
  )
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPosts({ title, posts }: { title: string; posts: Post[] }) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {title !== 'PassageSport' && (
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">{title}</h1>
          <div className="h-1 w-16 bg-green-600 mt-2 rounded" />
        </div>
      )}

      {title === 'PassageSport' && (
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-10">
          <h1 className="text-4xl font-extrabold mb-2">
            Selamat Datang di Passage<span className="text-yellow-300">Sport</span>
          </h1>
          <p className="text-green-100 text-lg max-w-xl">
            Analisis taktikal mendalam, berita transfer terpanas, dan kabar terkini dari dunia
            sepakbola — semua dalam satu tempat.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            {['Analisis Taktikal', 'Transfer Pemain', 'Berita Terkini'].map((cat) => (
              <a
                key={cat}
                href={`/category/${cat}`}
                className="bg-white/20 hover:bg-white/30 transition-colors text-white text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post) => (
          <Link
            to={`/posts/${post.slug}`}
            key={post._meta.path}
            className="block group no-underline"
          >
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              {post.image && (
                <div className="h-40 bg-green-700 overflow-hidden">
                  <img
                    src={`/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.categories.map((cat) => (
                    <CategoryBadge key={cat} category={cat} />
                  ))}
                </div>
                <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-3 flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-auto pt-3 border-t border-gray-50">
                  {formatDate(post.date)}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="text-center text-gray-500 py-16">Belum ada artikel di kategori ini.</p>
      )}
    </div>
  )
}
