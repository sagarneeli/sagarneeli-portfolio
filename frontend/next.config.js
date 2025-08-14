/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable Next.js eslint wrapper during production builds (Vercel)
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
