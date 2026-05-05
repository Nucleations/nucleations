import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';
import ariaImg from '@/assets/aria-workflow.jpg';

type Service = {
  title: string;
  audience: string;
  description: string;
  ctaLabel: string;
  to?: string;
  scrollToContact?: boolean;
  iconSrc: string;
};

const services: Service[] = [
  {
    title: 'Human-Centred AI Transformation Sprint',
    audience: 'For organizations that need a full AI strategy, roadmap, and business case.',
    description:
      'A guided strategy sprint to identify opportunities, prioritize use cases, map workflows, build the business case, and leave with an executive-ready AI transformation plan.',
    ctaLabel: 'Explore the Transformation Sprint',
    to: '/services',
    iconSrc: diamondImg,
  },
  {
    title: 'AI Strategy Advisory',
    audience: 'For leaders making a specific AI decision or advancing an in-flight initiative.',
    description:
      'Focused support for vendor decisions, pilot evaluation, business case development, roadmap refinement, or strategic guidance on what to do next.',
    ctaLabel: 'Book a Strategy Call',
    scrollToContact: true,
    iconSrc: circleImg,
  },
  {
    title: 'Leading Through AI',
    audience:
      'For organizations where adoption, trust, resistance, or role change could block success.',
    description:
      'Practical support for the human side of AI transformation, including role evolution, communication, adoption readiness, leadership alignment, and change planning.',
    ctaLabel: 'Explore Change Support',
    to: '/services',
    iconSrc: starImg,
  },
  {
    title: 'AI Courses & Leadership Programs',
    audience:
      'For teams that need practical AI fluency before or alongside transformation work.',
    description:
      "Live courses, private workshops, and partner-delivered programs for leaders and professional teams who need to understand AI's risks, opportunities, and business implications.",
    ctaLabel: 'View Courses',
    to: '/courses',
    iconSrc: diamondImg,
  },
];

export const HowWeHelpSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 help-gradient-purple animate-gradient-shift">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary">
            How We Help
          </p>
          <h2 className="text-foreground">
            Start where you are. Build toward measurable AI impact.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-800">
            Whether you are just starting with AI, testing tools, building a business case, or trying to move beyond a stalled pilot, Nucleations helps you choose the right next step and turn it into a practical path forward.
          </p>
        </div>

        {/* Featured ARIA card */}
        <div className="bg-card rounded-3xl shadow-elegant border-2 border-primary/30 overflow-hidden mb-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-5">
              <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full">
                Nucleations Method
              </span>
              <h3 className="text-foreground">ARIA Workflow-to-Value Workshop</h3>
              <p className="text-lg font-semibold text-primary">
                Not sure where AI belongs? Start with one workflow.
              </p>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p>
                  ARIA helps your team map one priority workflow, identify where AI can create real value, and use the Nucleations IMPACT Model to shape a credible business case for investment.
                </p>
                <p>
                  You leave with clarity on what should be automated or augmented, where human judgment and accountability matter most, and whether the opportunity is worth pursuing.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-soft hover:shadow-elegant transition-all"
                >
                  <Link to="/aria">Try the ARIA Workflow Mapping Tool</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center p-6 min-h-[280px]">
              <img
                src={ariaImg}
                alt="ARIA workflow mapping illustration"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-contain max-h-[420px] rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Variant B style — applied to first three services */}
          {services.slice(0, 3).map((s, index) => {
            const eyebrow =
              s.title === 'AI Strategy Advisory'
                ? 'Advisory'
                : 'Strategy and Capability Transfer';
            return (
              <div
                key={index}
                className="relative bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex p-2.5 rounded-full bg-secondary/20">
                      <img src={s.iconSrc} alt="" style={{ width: '28px', height: '28px' }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {eyebrow}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{s.audience}</p>
                  <p className="leading-relaxed text-gray-800 mb-6 flex-grow">{s.description}</p>
                  {s.scrollToContact ? (
                    <Button onClick={scrollToContact} variant="outline" className="rounded-xl self-start">
                      {s.ctaLabel} →
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="rounded-xl self-start">
                      <Link to={s.to!}>{s.ctaLabel} →</Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}

          {/* Variant D — gradient card for AI Courses & Leadership Programs */}
          {(() => {
            const s = services[3];
            return (
              <div className="relative rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-primary-foreground p-8">
                <div className="absolute right-4 top-4 w-32 h-32 pointer-events-none opacity-10">
                  <img src={s.iconSrc} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="inline-block self-start text-xs font-bold uppercase tracking-wider bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-6">
                  Education
                </span>
                <h3 className="text-2xl font-bold mb-3 text-primary-foreground relative z-10">{s.title}</h3>
                <p className="text-sm font-semibold text-secondary mb-4 relative z-10">{s.audience}</p>
                <p className="leading-relaxed text-primary-foreground/90 mb-6 flex-grow relative z-10">{s.description}</p>
                <Button asChild variant="secondary" className="rounded-full self-start shadow-soft hover:shadow-elegant">
                  <Link to={s.to!}>{s.ctaLabel} →</Link>
                </Button>
              </div>
            );
          })()}
        </div>

        {/* CTA strip */}
        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant border-2 border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
          <h3 className="text-foreground text-2xl md:text-3xl text-center md:text-left">
            Not sure where to start?
          </h3>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="text-base md:text-lg px-8 py-6 rounded-full shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 shrink-0"
          >
            Book an AI Opportunity Call
          </Button>
        </div>
      </div>
    </section>
  );
};
