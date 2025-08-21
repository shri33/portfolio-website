/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains: ['github.com', 'avatars.githubusercontent.com'],
    unoptimized: true
  },
  experimental: { 
    mdxRs: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  output: 'export'
}

module.exports = withMDX(nextConfig)
