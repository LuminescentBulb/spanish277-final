import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return articles.map((article) => ({
    articleId: article.id,
  }))
}

export default function ArticlePage({ params }: { params: { articleID: string } }) {
  const article = articles.find((a) => a.id === params.articleID)

  if (!article) return notFound()

  return (
    <main className="min-h-screen bg-white text-black">
      <article className="prose prose-lg prose-neutral max-w-3xl mx-auto p-6 font-serif">
        <h1 className="mb-2">{article.title}</h1>

        {/* Optional embedded video */}
        {article.videoUrl && (
          <div className="aspect-video my-8">
            <iframe
              src={article.videoUrl}
              className="w-full h-full rounded border"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src = '', alt = '', ...props }) => (
              <Image
                src={src}
                alt={alt}
                width={800}
                height={500}
                className="rounded shadow my-6"
                {...props}
              />
            ),
            a: ({ children, ...props }) => (
              <a {...props} className="text-blue-600 underline hover:text-blue-800">
                {children}
              </a>
            ),
          }}
        >
          {article.markdown}
        </ReactMarkdown>
      </article>
    </main>
  )
}
