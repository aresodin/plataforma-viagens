/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dbbibutyatofxmxxlqdi.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/**',
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            port: '',
            pathname: '/**',
          },
           {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;
