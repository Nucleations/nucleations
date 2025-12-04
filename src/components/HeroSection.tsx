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
          We're Nucleations. We design AI that fits your business, making teams more productive and growth inevitable.
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-foreground">
          Human-centered. Intelligence Augmented.
        </p>
        
        <div className="pt-6">
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
