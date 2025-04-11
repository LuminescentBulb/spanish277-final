export function stripMarkdown(markdown: string): string {
    return markdown
      .replace(/^###?\s+/gm, '')     // remove headings like ## or #
      .replace(/!\[.*?\]\(.*?\)/g, '') // remove images
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // convert [text](link) to text
      .replace(/[*_~`>#+-]/g, '')   // remove other markdown characters
      .replace(/\n+/g, ' ')         // convert line breaks to spaces
      .trim()
  }
  