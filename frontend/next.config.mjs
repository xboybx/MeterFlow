/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        // Proxy auth requests to the backend to avoid third-party cookie issues
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;
