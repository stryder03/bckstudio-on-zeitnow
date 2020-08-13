const fs = require('fs')
const globby = require('globby')

function addPage(page) {
    const path = page.replace('../../pages', '').replace('.jsx', '').replace('.mdx', '').replace('.js', '').replace('.tsx', '').replace('.ts', '').replace('.md', '')
    const route = path === '/index' ? '' : path

    return `  <url>
    <loc>${process.env.WEBSITE_URL}${route}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        '../../pages/**/*.js',
        '../../pages/**/*.tsx',
        '../../pages/**/*.mdx',
        '!../../pages/**/_*.js',
        '!../../pages/**/_*.tsx',
        '!../../pages/**/*.test',
        '!../../pages/api',
    ])
    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

    fs.writeFileSync('../../../public/sitemap.xml', sitemap)
}
const generateRobotsTxt = () => {
    const robots =  "User-agent: *\n" +
        "Disallow: /api\n" +
        "Allow: /\n" +
        `Sitemap: ${process.env.WEBSITE_URL}/sitemap.xml`;

    fs.writeFileSync('../../../public/robots.txt', robots)
}

if(process.env.WEBSITE_URL) {
    generateSitemap().then(()=> {
        generateRobotsTxt();
        }
    ).catch(error => {
        throw error
    });



}

