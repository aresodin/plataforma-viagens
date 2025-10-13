import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Adicionando TODOS os domínios de imagem externos que encontramos.
    // Esta é a correção definitiva para o erro 'hostname is not configured'.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'magazine.zarpo.com.br',
      },
    ],
  },
  allowedDevOrigins: ['https-3000-firebase-sbspdmnds-1756829326696.cluster-lqzyk3r5hzdcaqv6zwm7wv6pwa.cloudworkstations.dev']
};

export default nextConfig;
