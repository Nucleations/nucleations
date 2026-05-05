import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '10%+', label: 'Revenue increase' },
    { value: '1.5x', label: 'Average products per client' },
    { value: 'Human-led', label: 'Every client recommendation reviewed by a professional', valueClassName: 'text-[1.2rem] md:text-[1.4rem]' },
  ];

  return (
    <header className="relative px-6 py-20 md:py-24 overflow-hidden hero-gradient-green animate-gradient-shift">
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="space-y-6 animate-fade-in text-left">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary">
            Human-Centred AI Strategy for Operations-Heavy Organizations
          </p>

          <h1 className="font-bold tracking-tight text-balance text-foreground text-4xl md:text-5xl lg:text-6xl">
            Stop buying AI tools before you know where AI belongs.
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            For teams spending too much time on manual, repeatable, or document-heavy work, Nucleations turns scattered AI experimentation into measurable business impact by redesigning workflows, building credible business cases, and developing the internal capability to adopt AI responsibly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <a href="#contact-section" onClick={scrollToContact}>
                Book an AI Opportunity Call
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 py-6 rounded-full border-2"
            >
              <Link to="/aria">Try the ARIA Workflow Mapping Tool</Link>
            </Button>
          </div>
        </div>

        {/* Right: case study card */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-elegant border-2 border-secondary/20 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
            Case Study
          </p>
          <p className="text-foreground/80 leading-relaxed mb-8">
            A mid-sized financial services firm used AI to surface product opportunities inside the relationship manager workflow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-5 border-2 border-secondary/20 shadow-soft text-center"
              >
                <div className={`font-bold text-primary mb-2 leading-tight ${stat.valueClassName ?? 'text-3xl md:text-4xl'}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg font-semibold text-foreground text-center">
            Start with the workflow. Then choose the tool.
          </p>
        </div>
      </div>
    </header>
  );
};
