'use client';

import styles from '@components/MatrixLoader.module.scss';

import * as React from 'react';

interface MatrixLoaderProps {
  rows?: number;
}

const LINE_HEIGHT = 20;
const CHARACTER_WIDTH = 9.6;

const MatrixLoader: React.FC<MatrixLoaderProps> = ({ rows = 25 }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const parentWidth = parent.clientWidth;
      const maxHeight = rows * LINE_HEIGHT;
      canvas.width = parentWidth;
      canvas.height = maxHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [rows]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let interval: number;

    const w = canvas.width;
    const h = canvas.height;

    const cols = Math.floor(w / CHARACTER_WIDTH);
    const ypos: number[] = Array(cols).fill(0);

    const matrix = () => {
      const themeTextColor = getComputedStyle(document.body)
        .getPropertyValue('--theme-text')
        .trim();
      const fontFamily = getComputedStyle(document.body)
        .getPropertyValue('--font-family-mono')
        .trim();

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.textBaseline = 'top';
      ctx.font = `16px ${fontFamily}`;

      ctx.globalCompositeOperation = 'source-over';

      ypos.forEach((y, ind) => {
        const isUppercase = Math.random() < 0.5;
        const text = String.fromCharCode(
          isUppercase
            ? 0x0391 + Math.floor(Math.random() * (0x03A9 - 0x0391 + 1)) 
            : 0x03B1 + Math.floor(Math.random() * (0x03C9 - 0x03B1 + 1)) 
        );
        const x = ind * CHARACTER_WIDTH;

        ctx.fillStyle = themeTextColor;
        ctx.fillText(text, x, y);

        if (y > h + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + LINE_HEIGHT;
        }
      });
    };

    interval = window.setInterval(matrix, 50);

    return () => {
      window.clearInterval(interval);
    };
  }, [rows]);

  return (
    <div className={styles.container}>
      <canvas className={styles.root} ref={canvasRef} />
    </div>
  );
};

export default MatrixLoader;