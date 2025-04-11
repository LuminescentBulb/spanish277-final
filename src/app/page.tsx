import Link from "next/link"
import Image from "next/image"
import { articles } from "@/lib/articles"
import CO2Chart from "@/components/CO2Chart"
import { stripMarkdown } from "@/lib/stripMarkdown"

export default function Home() {
  // Split articles to feature the first one
  const featuredArticle = articles[0]
  const secondaryArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-serif text-black">

      <main className="max-w-7xl mx-auto">
        {/* Featured Article */}
        <div className="mb-12 border-b border-gray-300 pb-8">
          <Link href={`/article/${featuredArticle.id}`}>
            <div className="group cursor-pointer">
              {featuredArticle.image && (
                <div className="relative w-full h-[400px] md:h-[500px] mb-4 overflow-hidden border border-gray-200">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg?height=500&width=1000"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3 transition-colors hover:text-neutral-700">
                {featuredArticle.title}
              </h2>
              <div className="border-t border-b border-gray-400 py-1 my-3 text-sm">
                <span className="font-bold text-gray-500">ARTÍCULO DESTACADO</span>
              </div>
              <p className="text-lg md:text-xl text-gray-800 mb-4 max-w-4xl">
                {stripMarkdown(featuredArticle.markdown).substring(0, 200)}...
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2 font-bold">Por Redacción</span>
                <span>|</span>
                <span className="ml-2 text-black font-medium group-hover:underline">Continuar leyendo</span>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <CO2Chart />
        </div>


        {/* Divider with section title */}
        <div className="border-t-4 border-b border-black py-2 mb-8">
          <h2 className="text-xl font-bold text-blue-500 uppercase">Noticias Recientes</h2>
        </div>

        {/* Secondary Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {secondaryArticles.map((article, index) => (
            <Link key={article.id} href={`/article/${article.id}`}>
              <div
                className={`group cursor-pointer ${index !== secondaryArticles.length - 1 ? "border-b border-gray-200 pb-8" : ""}`}
              >
                {article.image && (
                  <div className="relative w-full h-[300px] mb-3 overflow-hidden border border-gray-200">
                    <Image
                      src={article.image || "/placeholder.svg?height=250&width=500"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-3 transition-colors hover:text-neutral-700">{article.title}</h3>
                <div className="border-t border-gray-300 my-2 pt-2 text-xs uppercase font-bold text-gray-500">
                  Sección General
                </div>
                <p className="text-gray-800 mb-3">{stripMarkdown(article.markdown).substring(0, 120)}...</p>
                <span className="text-black font-medium text-sm group-hover:underline">Continuar leyendo</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-16 pt-6 border-t-2 border-black text-center text-sm text-gray-700">
        <p className="font-bold">© 2025 Mi Periódico. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
