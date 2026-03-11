/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@tabler/icons-react', 'gsap', 'three'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          three: {
            test: /[\\/]node_modules[\\/](three|globe\.gl)[\\/]/,
            name: 'three',
            priority: 10,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 5,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
