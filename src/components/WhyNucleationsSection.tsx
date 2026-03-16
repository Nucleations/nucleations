import { Button } from '@/components/ui/button';
import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';
import strategyImg from '@/assets/nucleations-strategy.png';

const cards = [
  {
    title: 'Strategy before tools',
    description: 'Most AI initiatives fail because organizations start with technology instead of the business problem.',
    detail: 'We begin by identifying where AI can create meaningful operational value and aligning those opportunities with your strategic goals.',
    icon: diamondImg,
  },
  {
    title: 'Designed for your real business context',
    description: 'Every organization has unique workflows, constraints, and ways of working.',
    detail: 'We design AI solutions that fit your operational reality, not generic templates or off-the-shelf automation. This approach ensures AI integrates naturally into how your business already operates.',
    icon: circleImg,
  },
  {
    title: 'Amplifying human expertise',
    description: 'AI should remove routine work and surface insights, allowing your people to focus on judgment, creativity, and decision-making.',
    detail: 'Our approach keeps humans in control while AI enhances productivity and insight.',
    icon: starImg,
  },
  {
    title: 'Value first, scale next',
    description: 'Rather than pursuing large technology initiatives, we focus on identifying practical opportunities that deliver measurable value quickly.',
    detail: 'These early successes build momentum and create the foundation for broader AI adoption across your organization.',
    icon: diamondImg,
  },
  {
    title: 'Independent and practical',
    description: 'We are not tied to any platform or vendor.',
    detail: 'Our role is to help you make the right AI decisions for your organization and ensure the solutions you implement truly support your business.',
    icon: circleImg,
  },
];

export const WhyNucleationsSection = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 opportunity-gradient animate-gradient-shift">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h2 className="text-foreground">
            Why organizations work with Nucleations
          </h2>
          <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Most organizations start with standalone AI tools. The ones that create real value start with how work actually gets done. At Nucleations, we design AI around your workflows, people, and decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background icon */}
              <div
                className="absolute right-4 top-4 w-16 h-16 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `url(${card.icon})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />

              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3 relative z-10">
                {card.description}
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {card.detail}
              </p>
            </div>
          ))}

          {/* 6th card – photo */}
          <div
            className="rounded-3xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden"
            style={{ animationDelay: `${cards.length * 0.1}s` }}
          >
            <img
              src={strategyImg}
              alt="Nucleations strategy session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center animate-fade-in">
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
    </section>
  );
};
