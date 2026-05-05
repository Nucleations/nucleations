import { Button } from '@/components/ui/button';

export const PartnerSection = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-secondary/15 to-accent/10 animate-gradient-shift">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase">
          Partner With Us
        </span>

        <h2 className="text-foreground max-w-4xl mx-auto">
          Bring human-centred AI strategy to your audience, clients, or community.
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
          <p>
            Nucleations partners with organizations that want to help their clients or members move beyond AI experimentation and toward practical, responsible adoption.
          </p>
          <p>
            We support partners through co-branded programs, facilitated workshops, course delivery, and custom AI transformation offerings designed for specific audiences or sectors.
          </p>
        </div>

        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <a href="#contact-section" onClick={scrollToContact}>
              Contact Us About Partnering
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
