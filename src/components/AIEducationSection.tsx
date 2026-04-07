import { Button } from '@/components/ui/button';
import gtaafnLogo from '@/assets/gtaafn-logo.png';
import cpaOntarioLogo from '@/assets/cpa-ontario-logo.png';
import nucleationsLogo from '@/assets/nucleations-logo-transparent.png';

export const AIEducationSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-foreground">
            Practical AI Education for Professionals and Business Leaders
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Learn how organizations are adopting AI responsibly and strategically through courses designed to help professionals move beyond experimentation and apply AI in real operational contexts.
          </p>
        </div>

        {/* Featured Course */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-secondary/20 shadow-soft mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={gtaafnLogo}
              alt="GTA Accountants & Finance Network"
              className="w-24 h-24 object-contain shrink-0"
            />
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Recently delivered to the <strong>GTA Accountants & Finance Network</strong>, our session{' '}
                <em>Getting Started with AI: Practical Uses, Real Risks, and What's Changing Fast</em> is now available as an on-demand course for accounting and finance professionals.
              </p>
              <a
                href="https://www.gtaaccountantsnetwork.com/courses/getting-started-with-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-xl">
                  Watch the Course →
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Upcoming Programs */}
        <div className="space-y-6 mb-12 animate-fade-in">
          <h3 className="text-foreground text-center">Upcoming Programs</h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            We offer courses and webinars designed to help organizations and professionals navigate AI adoption.
          </p>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* CPA Ontario */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft flex flex-col items-center text-center gap-4">
              <img
                src={cpaOntarioLogo}
                alt="CPA Ontario"
                className="w-[109px] h-[109px] object-contain"
              />
              <a
                href="https://pd.cpaontario.ca/seminars/beyond-the-tools-a-strategic-approach-to-ai-in-accounting/E003475.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                CPA Ontario Webinar: Beyond the Tools: A Strategic Approach to AI in Accounting
              </a>
              <p className="text-muted-foreground">
                This seminar presents a strategic approach to AI adoption, focusing on clear business problems, key risks and impacts in accounting, and aligning people, processes, and data for success.
              </p>
              <p className="text-sm font-semibold text-foreground">
                May 19, 2026, 9–11 A.M. EST
              </p>
              <a
                href="https://pd.cpaontario.ca/seminars/beyond-the-tools-a-strategic-approach-to-ai-in-accounting/E003475.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-xl">
                  Learn More →
                </Button>
              </a>
            </div>

            {/* Certification */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft flex flex-col items-center text-center gap-4">
              <img
                src={nucleationsLogo}
                alt="Nucleations"
                className="w-20 h-20 object-contain"
              />
              <h4 className="text-xl font-bold text-foreground">
                Leading AI Adoption the Human-Centred Way Certification Program
              </h4>
              <p className="text-muted-foreground">
                In this 4-week sprint, you will learn our Nucleations framework for human-centered AI adoption, focusing on people, process, and technology, and create a practical roadmap to lead successful AI transformation in your organization.
              </p>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="rounded-xl"
              >
                Sign-up for Early Access →
              </Button>
            </div>
          </div>

        </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 animate-fade-in">
          <p className="text-muted-foreground">
            Send us a message if you would like to be notified when new courses and webinars are announced.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="text-lg py-6 px-10 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
          >
            Explore AI Courses
          </Button>
        </div>
      </div>
    </section>
  );
};
