# Mi Periódico

A digital student newspaper in Spanish built with Next.js, Tailwind CSS, and Markdown-based articles.

## Features

- Markdown support for articles with images, links, and video embeds
- Static site generation using Next.js App Router
- Styled with Tailwind CSS and typography plugin
- Responsive design with featured and recent articles
- CO₂ chart embed from CO2Levels.org

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Visit [http://localhost:3000](http://localhost:3000)

## Content

Articles are stored in `lib/articles.ts` and written in Markdown. Images are served from the `public/images` directory.

## Credits

- Built with Next.js 14 and Tailwind CSS 4
- Markdown rendered with `react-markdown`, `remark-gfm`, and `rehype-raw`
- CO₂ widget provided by [CO2Levels.org](https://www.co2levels.org)
