import { useEffect, useState } from 'react';

type Dimension = {
  width: number;
  height: number;
};

export default function useDimension(): Dimension {
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

  const resize = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return dimension;
}
