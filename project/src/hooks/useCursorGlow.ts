import { useEffect, useRef } from 'react';

export function useCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => { glow.style.opacity = '1'; };
    const onMouseLeave = () => { glow.style.opacity = '0'; };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    glow.style.opacity = '1';
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return glowRef;
}
