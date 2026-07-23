import { Link } from 'react-router-dom';
import { TopBanner } from '@/components/TopBanner';
import { SiteHeader } from '@/components/SiteHeader';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import mavenLogoAsset from '@/assets/courses-maven-logo.png.asset.json';
import cpabcLogoAsset from '@/assets/courses-cpabc-logo.png.asset.json';
import cpaAlbertaLogoAsset from '@/assets/courses-cpa-alberta-logo.png.asset.json';
import gtaafnLogoAsset from '@/assets/courses-gtaafn-logo.jpg.asset.json';
import featuredCourseAsset from '@/assets/courses-featured-workshop.png.asset.json';

const LOGOS: Record<string, { src: string; alt: string }> = {
  Maven: { src: mavenLogoAsset.url, alt: 'Maven' },
  'CPA BC': { src: cpabcLogoAsset.url, alt: 'CPA British Columbia' },
  'CPA Alberta': { src: cpaAlbertaLogoAsset.url, alt: 'CPA Alberta' },
  GTAAFN: { src: gtaafnLogoAsset.url, alt: 'GTAAFN' },
};

const LogoPlaceholder = ({ label = 'Logo' }: { label?: string }) => {
  const logo = LOGOS[label];
  if (logo) {
    return (
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-12 w-auto max-w-[128px] object-contain shrink-0"
      />
    );
  }
  return (
    <div className="h-12 w-32 rounded-md border-2 border-dashed border-border bg-muted/40 flex items-center justify-center text-xs text-muted-foreground shrink-0">
      {label}
    </div>
  );
};

const DatePill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
    {children}
  </span>
);

const Courses = () => {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Courses</p>
          <h1 className="text-foreground">AI courses and talks for what's next</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Practical, human-centred AI education for business, accounting, finance, and professional services leaders.
          </p>
        </div>
      </section>

      {/* Featured course */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-primary shadow-elegant animate-fade-in">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-6">
              Featured Course
            </span>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Featured hero image */}
              <div className="rounded-2xl overflow-hidden border-2 border-secondary/20">
                <img
                  src={featuredCourseAsset.url}
                  alt="AI Workflow Design Lab: From Workflow to Business Case promotional banner"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Course content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <LogoPlaceholder label="Maven" />
                  <p className="text-sm text-muted-foreground">Virtual multi-day hands-on workshop · Maven</p>
                </div>

                <DatePill>Sept 21 – Oct 2</DatePill>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  AI Workflow Design Lab: From Workflow to Business Case
                </h2>

                <p className="text-gray-800 leading-relaxed mb-6">
                  Most organizations rush to implement AI before understanding how work actually happens, layering tools onto broken processes and blaming poor adoption on the technology. You'll bring a real workflow from your organization or client work, and we'll guide you through ARIA, Nucleations' Workflow Intelligence methodology, to redesign it for AI, evaluate readiness, and build a credible business case for investment. Along the way, you'll apply our Human Dividend lens to find where AI can reduce burden and strengthen human judgment. You leave with a human centred AI workflow blueprint, a prioritized AI opportunity, a decision ready business case, and a repeatable methodology for your organization.
                </p>

                <h3 className="text-lg font-bold text-foreground mb-3">What you'll learn</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                  <li>Identify what's essential for successful AI adoption</li>
                  <li>Map a real workflow to determine what AI needs to succeed</li>
                  <li>Redesign workflows with intention: where AI should automate, augment, or defer to human judgment</li>
                  <li>Plan for the human side of the transformation</li>
                  <li>Build a business case that justifies investment</li>
                  <li>Walk away with a repeatable capability you can apply across any workflow</li>
                </ul>

                <p className="text-sm font-semibold text-primary mb-6">
                  Use code OPEN50 for 50% off till Aug 1. Limited seats.
                </p>

                <Button asChild size="lg" className="rounded-xl self-start shadow-soft hover:shadow-elegant mb-8">
                  <a
                    href="https://maven.com/vanessa-rementilla/ai-workflow-designlab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll now
                  </a>
                </Button>

                <div className="pt-6 border-t border-border">
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    Preview this course by watching a free 30-minute lightning lesson,{' '}
                    <span className="font-semibold text-foreground">The Missing Method: Map Your Work Before You Build with AI</span>.{' '}
                    Watch on demand now.
                  </p>
                  <Button asChild variant="outline" className="rounded-xl">
                    <a
                      href="https://maven.com/p/137650/the-missing-method-map-your-work-before-you-build-with-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining courses */}
      <section className="py-20 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-foreground">More upcoming courses</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Course 2 — CPA BC — Aug 18 */}
            <article className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <LogoPlaceholder label="CPA BC" />
                <p className="text-sm text-muted-foreground">Live Online Webinar · CPA BC</p>
              </div>
              <DatePill>Aug 18 · 1–3 PM EST / 10–12 PM PST</DatePill>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                The State of AI: What Accounting Leaders Need to Know Right Now
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                AI is already reshaping accounting, yet most firm leaders lack a clear picture of what responsible adoption actually looks like in practice. This session delivers a practical, non-technical briefing built around Nucleations' proprietary workflow mapping process and AI Transformation Framework, grounded in real-world case studies. Participants leave with clarity on AI's capabilities and risks, and concrete steps to move forward with confidence.
              </p>
              <p className="text-sm font-semibold text-foreground mb-2">By the end of this course, participants will be able to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6 flex-grow">
                <li>Understand recent AI advancements and their impact on audit, tax, and financial reporting.</li>
                <li>Recognize key limitations, risks, and governance considerations in professional practice.</li>
                <li>Distinguish where AI adds value and where human judgment remains essential.</li>
                <li>Assess the business, workforce, and regulatory implications of AI adoption.</li>
                <li>Apply a structured AI transformation framework and receive practical next steps tailored for accounting firms.</li>
              </ul>
              <Button asChild variant="outline" className="rounded-xl self-start">
                <a
                  href="https://pd.bccpa.ca/pd-search/#/c63813a_ol/c3813ol/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </Button>
            </article>

            {/* Course 3 — CPA Alberta — Oct 23 */}
            <article className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4 mb-4">
                <LogoPlaceholder label="CPA Alberta" />
                <p className="text-sm text-muted-foreground">Live Online Webinar · CPA Alberta</p>
              </div>
              <DatePill>Oct 23 · 12–1 PM EST / 10–11 AM MDT</DatePill>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                Leading Through AI: Managing Change in Accounting Firms
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                AI adoption is not just a technology shift; it is a people and behaviour challenge. This session helps accounting leaders navigate the human side of AI adoption within their firms. Drawing on research-backed frameworks, participants will learn how to recognize resistance patterns, build trust across different levels of staff, and support their teams as workflows and roles evolve. The session closes with practical, evidence-based approaches to influencing change that leaders can apply immediately.
              </p>
              <p className="text-sm font-semibold text-foreground mb-2">What you'll learn:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6 flex-grow">
                <li>Explain why AI transformations fail primarily due to people and culture factors, not technology.</li>
                <li>Identify common sources of resistance within accounting teams using a sentiment framework.</li>
                <li>Apply practical approaches to building trust and confidence in AI-assisted professional work.</li>
                <li>Recognise the empathy gap between senior leaders and frontline staff, and communicate AI-driven change appropriately across levels.</li>
                <li>Support evolving roles and responsibilities while maintaining professional judgment and accountability.</li>
                <li>Apply evidence-based influence approaches to shift mindsets and sustain adoption across their firm.</li>
              </ul>
              <Button disabled variant="outline" className="rounded-xl self-start">
                Coming soon
              </Button>
            </article>

            {/* Course 4 — CPA Alberta — Nov 6 */}
            <article className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <LogoPlaceholder label="CPA Alberta" />
                <p className="text-sm text-muted-foreground">Live Online Webinar · CPA Alberta</p>
              </div>
              <DatePill>Nov 6 (Fri) · 12–1 PM EST / 10–11 AM MDT</DatePill>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                Getting Started with AI: Practical Uses, Real Risks and What's Changing Fast
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                AI is evolving rapidly, and professionals need clarity on what matters now. In this session, AI Strategists Vanessa Rementilla and Saad Nizari of Nucleations will discuss practical uses of AI across professional services, what's changing quickly, and key risks and guardrails to consider. Drawing on real-world experience with Canadian organizations, the session focuses on responsible, defensible approaches to getting started with AI. The session concludes with an interactive Q&amp;A.
              </p>
              <p className="text-sm font-semibold text-foreground mb-2">What you'll learn:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                <li>What AI can realistically do today and where it is delivering real value in professional services</li>
                <li>What's changing quickly and why staying current matters</li>
                <li>Key limitations, risks, and guardrails professionals should be aware of</li>
                <li>Considerations for responsible and defensible AI use in regulated professions</li>
                <li>An overview of Canadian grants and funding programs that can support AI initiatives</li>
              </ul>
              <Button disabled variant="outline" className="rounded-xl self-start mb-6">
                Coming soon
              </Button>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  This webinar is also available on-demand through GTAAFN.
                </p>
                <div className="flex items-center gap-4">
                  <LogoPlaceholder label="GTAAFN" />
                  <a
                    href="https://www.gtaaccountantsnetwork.com/courses/getting-started-with-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Watch on GTAAFN
                  </a>
                </div>
              </div>
            </article>

            {/* Course 5 — CPA Alberta — Nov 27 */}
            <article className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4 mb-4">
                <LogoPlaceholder label="CPA Alberta" />
                <p className="text-sm text-muted-foreground">Live Online Webinar · CPA Alberta</p>
              </div>
              <DatePill>Nov 27 (Fri) · 12–1 PM EST / 10–11 AM MDT</DatePill>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                From Experimentation to Impact: Building High-Value AI Use Cases in Accounting
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                This course helps accounting professionals identify and design high-impact AI use cases within their organizations. Rather than focusing on tools, it introduces a practical framework for selecting the right problems, evaluating feasibility, and ensuring AI delivers real business value. Participants will learn how to move beyond experimentation and build use cases that improve efficiency, insight, and decision-making. The session also covers key considerations, including workflow design and professional oversight.
              </p>
              <p className="text-sm font-semibold text-foreground mb-2">What you'll learn:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6 flex-grow">
                <li>Identify high-impact AI opportunities in accounting workflows</li>
                <li>Recognize common pitfalls that cause AI initiatives to fail</li>
                <li>
                  Apply a practical framework,{' '}
                  <Link to="/aria" className="text-primary font-semibold hover:underline">ARIA</Link>
                  , for evaluating and prioritizing AI use cases
                </li>
                <li>Connect AI opportunities to measurable business outcomes</li>
                <li>Define the human oversight, governance, and professional responsibility needed to keep AI-assisted work defensible</li>
              </ul>
              <Button disabled variant="outline" className="rounded-xl self-start">
                Coming soon
              </Button>
            </article>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Courses;
