'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

// Tipagem para as props do nosso componente
interface PackageImageProps extends Omit<ImageProps, 'src'> {
  src: string | null | undefined;
  fallbackSrc: any; // Aceita string ou objeto de imagem estática
}

/**
 * Um componente de imagem inteligente que tenta carregar uma URL de origem
 * e, em caso de erro (ex: imagem quebrada, 404), exibe uma imagem de fallback local.
 */
export default function PackageImage({ src, fallbackSrc, ...props }: PackageImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    // Se a 'src' externa for fornecida, usamos ela. Se não, usamos o fallback.
    setCurrentSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <Image
      key={currentSrc} // Força a recriação do componente quando a fonte muda
      src={currentSrc}
      // O evento onError é acionado se o carregamento da 'src' falhar.
      // Nesse caso, mudamos o estado para a imagem de fallback.
      onError={() => setCurrentSrc(fallbackSrc)}
      {...props}
    />
  );
}
