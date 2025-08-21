const fs = require('fs')
const path = require('path')

const baseUrl = 'https://shri33.github.io'

const staticPages = [
  '',
  '/projects',
  '/about',
  '/contact',
]

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
}

if (require.main === module) {
  generateSitemap()
}

module.exports = { generateSitemap }
