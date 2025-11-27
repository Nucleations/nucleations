import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ParticleAnimation } from './ParticleAnimation';
import logo from '@/assets/nucleations-logo-transparent.png';

export const HeroSection = () => {
  const [backgroundVariant, setBackgroundVariant] = useState<'light' | 'purple'>('light');

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden transition-all duration-700 ${
        backgroundVariant === 'light' ? 'hero-gradient-light' : 'hero-gradient-purple'
      }`}
    >
      <ParticleAnimation />
      
      {/* Background Toggle Button */}
      <button
        onClick={() => setBackgroundVariant(prev => prev === 'light' ? 'purple' : 'light')}
        className="absolute top-6 right-6 px-4 py-2 text-sm bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors z-10"
        aria-label="Toggle background variant"
      >
        Switch Background
      </button>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <img
          src={logo}
          alt="Nucleations Logo"
          className="w-32 h-32 mx-auto mb-8"
        />
        
        <h1 className={`font-bold tracking-tight text-balance ${backgroundVariant === 'purple' ? 'text-primary-foreground' : 'text-foreground'}`}>
          Nucleations
        </h1>
        
        <p className={`text-2xl md:text-3xl font-semibold ${backgroundVariant === 'purple' ? 'text-secondary' : 'text-foreground'}`}>
          Human-centered. Intelligence Augmented.
        </p>
        
        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${backgroundVariant === 'purple' ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
          We help growing businesses design AI that fits their reality. By understanding your workflows and business context, we build solutions that make your teams more productive and drive real business growth.
        </p>
        
        <div className="pt-6">
          <p className={`text-xl md:text-2xl font-medium mb-6 ${backgroundVariant === 'purple' ? 'text-primary-foreground' : 'text-foreground'}`}>
            Ready to reach your full potential with AI?
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <a href="#contact-section" onClick={scrollToContact}>
              Book an Intro Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
