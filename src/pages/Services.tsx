import { Link } from 'react-router-dom';
import { Compass, Workflow, TrendingUp } from 'lucide-react';
import { TopBanner } from '@/components/TopBanner';
import { SiteHeader } from '@/components/SiteHeader';
import { PartnerSection } from '@/components/PartnerSection';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';

const scrollToContact = (e?: React.MouseEvent) => {
  e?.preventDefault();
  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
};

type ServiceBlockProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  body: string[];
  bestFor: string;
  ctaLabel: string;
  ctaTo?: string;
  children?: React.ReactNode;
};

const ServiceBlock = ({ eyebrow, title, subtitle, body, bestFor, ctaLabel, ctaTo, children }: ServiceBlockProps) => (
  <div className="bg-card rounded-3xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden animate-fade-in">
    <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
    <div className="p-8 md:p-12 space-y-6">
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full">
          {eyebrow}
        </span>
      )}
      <h3 className="text-foreground text-2xl md:text-3xl font-bold">{title}</h3>
      <p className="text-lg font-semibold text-primary">{subtitle}</p>
      <div className="space-y-4 text-gray-800 leading-relaxed">
        {body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {children}
      <div className="bg-secondary/10 rounded-2xl p-5 border-l-4 border-secondary">
        <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Best for</p>
        <p className="text-gray-800 leading-relaxed">{bestFor}</p>
      </div>
      <div className="pt-2">
        {ctaTo ? (
          <Button asChild size="lg" className="rounded-full shadow-soft hover:shadow-elegant transition-all">
            <Link to={ctaTo}>{ctaLabel} →</Link>
          </Button>
        ) : (
          <Button onClick={() => scrollToContact()} size="lg" className="rounded-full shadow-soft hover:shadow-elegant transition-all">
            {ctaLabel} →
          </Button>
        )}
      </div>
    </div>
  </div>
);

const frameworks = [
  {
    Icon: Compass,
    title: 'Nucleations AI Adoption Framework',
    description:
      'A step-by-step diagnostic and planning system that guides leaders from opportunity identification to prioritized use case selection.',
  },
  {
    Icon: Workflow,
    title: 'Nucleations ARIA Workflow Mapping Protocol',
    description:
      'Maps workflows across Actions, Roles, Intelligence, and Accountability to reveal where AI fits and how roles evolve.',
  },
  {
    Icon: TrendingUp,
    title: 'Nucleations IMPACT Model',
    description:
      'Translates workflow transformation into credible financial projections across Time, Cost, Quality, and Risk, alongside human adoption readiness.',
  },
];

const advisoryExamples = [
  'Building a defensible business case for an existing AI prototype',
  'Structuring an initial AI strategy while building internal capability',
  'Conducting independent vendor evaluation with no underlying incentives',
  'Assessing ERP, data, and systems gaps to shape a practical AI path',
  'Reviewing a stalled or underperforming pilot and deciding what to do next',
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <SiteHeader />

      {/* SECTION 1: HERO */}
      <header className="relative px-6 py-20 md:py-24 overflow-hidden hero-gradient-green animate-gradient-shift">
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary">
            Services
          </p>
          <h1 className="font-bold tracking-tight text-balance text-foreground text-4xl md:text-5xl lg:text-6xl">
            AI strategy that builds your capability to keep going.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Nucleations helps organizations move from AI uncertainty to practical, measurable transformation. Whether you need a full roadmap, a business case, change support, or targeted advisory, our work is designed to transfer capability — not create dependency.
          </p>

          <div className="pt-8 max-w-5xl mx-auto text-left">
            <div className="bg-card rounded-3xl shadow-elegant border-2 border-primary/20 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 via-secondary/15 to-accent/10 p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
                    Capability Transfer
                  </span>
                  <h2 className="text-foreground text-3xl md:text-4xl font-bold leading-tight">
                    We don't just deliver the strategy. We teach the method.
                  </h2>
                </div>
                <div className="lg:col-span-3 p-8 md:p-12 flex items-center">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Every Nucleations engagement pairs strategic delivery with practical learning. We share our frameworks, methods, and decision tools as we work, so your team leaves with more than a plan — they leave with the confidence and capability to lead the next AI initiative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTIONS 3–6: SERVICES */}
      <section className="py-24 px-6 help-gradient-purple animate-gradient-shift">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* SECTION 3: HUMAN-CENTRED AI TRANSFORMATION PROGRAM */}
          <ServiceBlock
            eyebrow="Flagship Program"
            title="Human-Centred AI Transformation Program"
            subtitle="End-to-end transformation design with a 30-60-90 day roadmap."
            body={[
              'A four-week design sprint that turns AI ambition into an investment-ready transformation plan.',
              'Leadership teams move from opportunity identification to workflow redesign, business case development, pilot planning, and roadmap creation. The result is a fully scoped AI transformation plan with a clear path into execution.',
            ]}
            bestFor="Organizations that may start with a single use case but are ready to define their broader AI direction. Ideal for leaders starting their AI journey, or those who have stalled and need a structured path from initial use case to prioritized roadmap."
            ctaLabel="Explore the Transformation Program"
          >
            <div className="pt-2">
              <h4 className="text-lg font-bold text-foreground mb-6">
                Built around three proprietary Nucleations frameworks
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {frameworks.map(({ Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-background rounded-2xl p-6 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="inline-flex p-3 rounded-full bg-secondary/20 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="text-lg font-bold text-foreground mb-3 leading-snug">{title}</h5>
                    <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ServiceBlock>

          {/* SECTION 4: ARIA — Signature treatment */}
          <div className="bg-card rounded-3xl shadow-elegant border-2 border-primary/30 overflow-hidden animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full">
                  Signature Method
                </span>
                <h3 className="text-foreground text-2xl md:text-3xl font-bold">
                  ARIA Workflow-to-Value Workshop
                </h3>
                <p className="text-lg font-semibold text-primary">
                  See where AI genuinely fits, and whether it is worth investing in.
                </p>
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  <p>
                    ARIA is Nucleations' signature workflow-to-value method. It helps teams map how work happens today, identify where AI can create real value, and translate that opportunity into a credible business case.
                  </p>
                  <p>
                    Using the ARIA Protocol and IMPACT Model, clients leave with a clear future-state workflow, impact projection, and sponsor-ready case for investment, plus the capability to repeat the approach on other workflows.
                  </p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-5 border-l-4 border-secondary">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Best for</p>
                  <p className="text-gray-800 leading-relaxed">
                    Organizations looking to identify where AI can truly improve workflows through redesign, not just add-on tools. Ideal for teams not seeing results from existing AI tools, or leaders who need a strong business case to unlock investment.
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild size="lg" className="rounded-full shadow-soft hover:shadow-elegant transition-all">
                    <Link to="/aria">Explore ARIA →</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center p-8 min-h-[320px]">
                <img
                  src={ariaWorkshopImage}
                  alt="Team collaborating on an ARIA onboarding workflow mapping session with sticky notes on a wall"
                  className="w-full h-full max-h-[480px] object-cover rounded-2xl shadow-soft"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* SECTION 5: LEADING THROUGH AI */}
          <ServiceBlock
            eyebrow="Change & Adoption"
            title="Leading Through AI: Managing Change"
            subtitle="The people side of AI transformation, addressed head-on."
            body={[
              'AI transformation succeeds or fails on adoption. But this is not traditional change management. AI changes workflows, roles, judgment, accountability, and how people understand the value of their work.',
              'This offering gives leaders a structured way to understand role evolution, address resistance, build trust, communicate clearly, and sustain adoption beyond the pilot phase.',
            ]}
            bestFor="Organizations deploying AI and facing resistance, uncertainty, low adoption, or role-change concerns. Also valuable for broader transformation efforts where the human side requires the same rigour as the technology."
            ctaLabel="Explore Change Support"
          />

          {/* SECTION 6: AI STRATEGY ADVISORY */}
          <ServiceBlock
            eyebrow="Advisory"
            title="AI Strategy Advisory"
            subtitle="Senior strategic input for the decisions that matter most."
            body={[
              'Not every situation calls for a full program. AI Strategy Advisory provides targeted support for specific questions, decisions, or in-flight initiatives.',
              'We help leaders pressure-test ideas, evaluate options, strengthen business cases, assess vendors, shape roadmaps, and move forward with clearer direction. Outcomes are tailored to the problem at hand, with an emphasis on building internal capability alongside the work.',
            ]}
            bestFor="Organizations facing a specific strategic decision or advancing an existing AI initiative that requires experienced, unbiased input."
            ctaLabel="Book a Strategy Call"
          >
            <div className="pt-2">
              <h4 className="text-lg font-bold text-foreground mb-4">Examples include</h4>
              <ul className="space-y-3">
                {advisoryExamples.map((ex) => (
                  <li
                    key={ex}
                    className="flex items-start gap-3 bg-background rounded-xl p-4 border border-secondary/20"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-gray-800 leading-relaxed">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ServiceBlock>
        </div>
      </section>

      {/* SECTION 7: PARTNER */}
      <PartnerSection />

      {/* SECTION 8: CONTACT */}
      <ContactSection />
    </main>
  );
};

export default Services;
