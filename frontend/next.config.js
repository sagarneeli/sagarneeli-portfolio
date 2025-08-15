/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    // Disable Next.js eslint wrapper during production builds (Vercel)
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    // Proxy API during local development if BACKEND_BASE is provided, else
    // default to localhost:8000. No rewrites in production.
    if (process.env.NODE_ENV !== 'development') return [];
    const target = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
    return [
      {
        source: '/api/v1/:path*',
        destination: `${target}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
