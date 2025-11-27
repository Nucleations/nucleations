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
    
    // Generate 12 particles with enhanced slow burst animation
    // Each particle follows a calm breathing cycle: expand → contract → repeat
    for (let i = 0; i < 12; i++) {
      particles.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: 50, // Start at center (50%)
        y: 50,
        duration: 4 + Math.random() * 3, // 4-7 seconds per full cycle
        delay: Math.random() * 1.2 - 0.6, // ±0.6s randomized timing offset
        amplitude: 200 + Math.random() * 150, // 200-350px base radius for 50-70% hero coverage
      });
    }

    if (containerRef.current) {
      particles.forEach((particle) => {
        const el = document.createElement('div');
        el.className = 'absolute w-5 h-5 pointer-events-none'; // 20×20 pixels
        el.style.left = `${particle.x}%`;
        el.style.top = `${particle.y}%`;
        
        const img = document.createElement('img');
        img.src = particle.type === 'circle' ? circleImg : particle.type === 'diamond' ? diamondImg : starImg;
        img.alt = '';
        img.className = 'w-full h-full object-cover';
        img.style.width = '20px';
        img.style.height = '20px';
        
        // Calculate random direction for radial burst pattern
        const angle = Math.random() * Math.PI * 2;
        
        // Expansion phase: 150-200% of base amplitude (forms soft halo)
        const expansionMultiplier = 1.5 + Math.random() * 0.5; // 150-200%
        const txExpand = `${Math.cos(angle) * particle.amplitude * expansionMultiplier}px`;
        const tyExpand = `${Math.sin(angle) * particle.amplitude * expansionMultiplier}px`;
        
        // Contraction phase: 50-60% of expanded radius (visible cluster, not center)
        const contractionMultiplier = 0.5 + Math.random() * 0.1; // 50-60%
        const txContract = `${Math.cos(angle) * particle.amplitude * expansionMultiplier * contractionMultiplier}px`;
        const tyContract = `${Math.sin(angle) * particle.amplitude * expansionMultiplier * contractionMultiplier}px`;
        
        // Set CSS custom properties for animation
        // Keyframes handle: 0% center (opacity 0.7) → 50% expand (opacity 1.0) → 100% contract (opacity 0.7)
        el.style.setProperty('--tx-expand', txExpand);
        el.style.setProperty('--ty-expand', tyExpand);
        el.style.setProperty('--tx-contract', txContract);
        el.style.setProperty('--ty-contract', tyContract);
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
