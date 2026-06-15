import fs from 'fs'
import path from 'path'
import { routes } from '../src/router/routes.ts'

const BASE_URL = 'https://laddetgro.dk'
const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml')

const urls = routes
  .filter((route) => route.meta?.showInNavBar !== false)
  .map((route) => `${BASE_URL}${route.path}`)

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (url) => `  <url>\n    <loc>${url}</loc>\n  </url>`
  )
  .join('\n')}\n</urlset>\n`

fs.writeFileSync(sitemapPath, xml, { encoding: 'utf8' })
console.log(`Generated sitemap at ${sitemapPath}`)
