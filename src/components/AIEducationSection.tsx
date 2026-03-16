import { Button } from '@/components/ui/button';
import gtaafnLogo from '@/assets/gtaafn-logo.png';
import cpaOntarioLogo from '@/assets/cpa-ontario-logo.png';

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
                <em>Getting Started with AI</em> is now available as an on-demand course for accounting and finance professionals.
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
            We are developing additional courses and webinars designed to help organizations and professionals navigate AI adoption.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            Upcoming programs include:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* CPA Ontario */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft flex flex-col items-center text-center gap-4">
              <img
                src={cpaOntarioLogo}
                alt="CPA Ontario"
                className="w-20 h-20 object-contain"
              />
              <h4 className="text-xl font-bold text-foreground">
                CPA Ontario Webinar: State of AI
              </h4>
            </div>

            {/* Certification */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-foreground">
                Certification Program: AI Transformation Leaders
              </h4>
            </div>
          </div>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-8">
            These programs focus on helping leaders understand where AI creates value, how to adopt it responsibly, and how to design effective human-AI collaboration.
          </p>
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
