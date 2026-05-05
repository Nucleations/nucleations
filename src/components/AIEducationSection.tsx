import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import gtaafnLogo from '@/assets/gtaafn-logo.png';
import cpaOntarioLogo from '@/assets/cpa-ontario-logo.png';

export const AIEducationSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-foreground">
            Build the AI capability your team needs to lead what comes next
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Course 1 — GTAAFN */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in">
            <img
              src={gtaafnLogo}
              alt="GTA Accountants & Finance Network"
              className="h-20 w-auto object-contain mb-6"
            />
            <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
              On Demand
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
              Getting Started with AI: Practical Uses, Real Risks, and What's Changing Fast
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
              A practical on-demand session for accounting and finance professionals on AI use cases, risks, and responsible first steps.
            </p>
            <Button asChild variant="outline" className="rounded-xl self-start">
              <Link to="/courses">Learn more →</Link>
            </Button>
          </div>

          {/* Course 2 — CPA Ontario */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <img
              src={cpaOntarioLogo}
              alt="CPA Ontario"
              className="h-20 w-auto object-contain mb-6"
            />
            <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
              Coming Soon
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
              Beyond the Tools: A Strategic Approach to AI in Accounting
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
              A strategic, non-technical seminar for accounting leaders moving beyond AI experiments toward responsible adoption and measurable impact.
            </p>
            <Button asChild variant="outline" className="rounded-xl self-start">
              <Link to="/courses">Learn more →</Link>
            </Button>
          </div>

          {/* Speaking engagements */}
          <div className="relative rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/15 text-foreground p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-6">
              Speaking Engagements
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
              Bring Nucleations to Your Audience
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
              Book us for practical, human-centred AI talks, webinars, panels, and leadership sessions for business, accounting, finance, and professional services audiences.
            </p>
            <Button
              onClick={scrollToContact}
              className="rounded-full self-start shadow-soft hover:shadow-elegant"
            >
              Inquire about speaking →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
