import { Button } from '@/components/ui/button';
import logo from '@/assets/nucleations-logo-transparent.png';

export const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden hero-gradient-green animate-gradient-shift">
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <img
          src={logo}
          alt="Nucleations Logo"
          className="w-32 h-32 mx-auto mb-8"
        />
        
        <h1 className="font-bold tracking-tight text-balance text-foreground">
          We're Nucleations. We turn AI from experimentation into real business impact.
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          We help small and medium-sized organizations with manual, operations-heavy workflows redesign how work gets done and implement practical AI that augments human expertise.
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-foreground">
          Strategy, workflow redesign, and AI implementation for organizations that want real results, not just tools.
        </p>

        <p className="text-sm text-foreground/70">
          Book a 30-minute AI Strategy Session to identify opportunities in your business.
        </p>
        
        <div className="pt-6">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <a href="#contact-section" onClick={scrollToContact}>
              Book a Strategy Session
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
