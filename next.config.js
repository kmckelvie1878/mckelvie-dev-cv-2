/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
          ssr: true,
          displayName: false,
        }
    }
}

module.exports = nextConfig
