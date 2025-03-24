/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
          {
            source: '/about',
            destination: '/',
          },
        ]
      },
};

export default nextConfig;
