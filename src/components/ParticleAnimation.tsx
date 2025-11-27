import { useEffect, useRef } from 'react';
import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

interface Particle {
  id: number;
  type: 'circle' | 'diamond' | 'star';
  x: number;
  y: number;
  duration: number;
  delay: number;
  amplitude: number;
}

export const ParticleAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles: Particle[] = [];
    const types: ('circle' | 'diamond' | 'star')[] = ['circle', 'diamond', 'star'];
    
    // Generate 12 particles
    for (let i = 0; i < 12; i++) {
      particles.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: 50, // Start at center
        y: 50,
        duration: 2 + Math.random() * 2, // 2-4 seconds
        delay: Math.random() * 2, // Stagger start
        amplitude: 15 + Math.random() * 25, // 15-40% drift range
      });
    }

    if (containerRef.current) {
      particles.forEach((particle) => {
        const el = document.createElement('div');
        el.className = 'absolute w-5 h-5 pointer-events-none';
        el.style.left = `${particle.x}%`;
        el.style.top = `${particle.y}%`;
        
        const img = document.createElement('img');
        img.src = particle.type === 'circle' ? circleImg : particle.type === 'diamond' ? diamondImg : starImg;
        img.alt = '';
        img.className = 'w-full h-full object-contain';
        
        // Calculate random direction
        const angle = Math.random() * Math.PI * 2;
        const txStart = `0px`;
        const tyStart = `0px`;
        const txEnd = `${Math.cos(angle) * particle.amplitude}px`;
        const tyEnd = `${Math.sin(angle) * particle.amplitude}px`;
        
        el.style.setProperty('--tx-start', txStart);
        el.style.setProperty('--ty-start', tyStart);
        el.style.setProperty('--tx-end', txEnd);
        el.style.setProperty('--ty-end', tyEnd);
        el.style.setProperty('--duration', `${particle.duration}s`);
        el.style.animationDelay = `${particle.delay}s`;
        
        el.classList.add('animate-breathe');
        el.appendChild(img);
        containerRef.current?.appendChild(el);
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};
