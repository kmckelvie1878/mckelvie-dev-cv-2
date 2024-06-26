/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
