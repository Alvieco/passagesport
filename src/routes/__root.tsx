import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'PassageSport — Analisis Taktikal & Berita Sepakbola',
      },
      {
        name: 'description',
        content:
          'Blog sepakbola terdepan untuk analisis taktikal, transfer pemain, dan berita terkini dari dunia sepakbola.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-green-800 text-white shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 no-underline">
              <span className="text-2xl">⚽</span>
              <span className="text-xl font-extrabold tracking-tight">
                Passage<span className="text-yellow-300">Sport</span>
              </span>
            </a>
            <nav className="flex gap-4 text-sm font-medium">
              <a
                href="/category/Analisis Taktikal"
                className="hover:text-yellow-300 transition-colors"
              >
                Analisis Taktikal
              </a>
              <a
                href="/category/Transfer Pemain"
                className="hover:text-yellow-300 transition-colors"
              >
                Transfer Pemain
              </a>
              <a
                href="/category/Berita Terkini"
                className="hover:text-yellow-300 transition-colors"
              >
                Berita Terkini
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-green-900 text-green-200 text-center text-sm py-6 mt-16">
          <p>© 2026 PassageSport · Analisis Taktikal · Transfer Pemain · Berita Terkini</p>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
