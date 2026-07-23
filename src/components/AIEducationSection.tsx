import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import mavenLogo from '@/assets/maven-logo.png';
import cpabcLogo from '@/assets/cpabc-logo.png';

const MAVEN_LIGHTNING_URL = 'https://maven.com/p/137650/the-missing-method-map-your-work-before-you-build-with-ai';

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
            AI courses and talks for what's next
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Box 1 — Maven Lightning Lesson */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in">
            <div className="flex justify-center mb-6">
              <img
                src={mavenLogo}
                alt="Maven"
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
              Free
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
              The Missing Method: Map Your Work Before You Build with AI
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
              Want to build better AI workflows? Learn our unique ARIA mapping protocol in a quick, 30-minute Lightning Lesson—part of Maven's curated The AI-Powered Professional series.
            </p>
            <Button asChild variant="outline" className="rounded-xl self-start">
              <a href={MAVEN_LIGHTNING_URL} target="_blank" rel="noopener noreferrer">Watch on demand</a>
            </Button>
          </div>

          {/* Box 2 — Maven AI Workflow Design Lab */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-6">
              <img
                src={mavenLogo}
                alt="Maven"
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
              Sept. 21 – Oct. 2
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
              AI Workflow Design Lab: From Workflow to Business Case
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4 flex-grow">
              Bring your own workflow and learn where AI can be added in it. Identify many use cases, build your business case, and prepare for the impact that AI brings.
            </p>
            <p className="text-sm font-semibold text-primary mb-6">
              Use OPEN50 for 50% off till Aug. 1
            </p>
            <Button asChild variant="outline" className="rounded-xl self-start">
              <Link to="/courses">Learn more</Link>
            </Button>
          </div>

          {/* Box 3 — CPA BC */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-6">
              <img
                src={cpabcLogoAsset.url}
                alt="CPA British Columbia"
                className="h-14 w-auto object-contain"
              />
            </div>
            <span className="inline-block self-start text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
              Aug. 18
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
              The State of AI: What Accounting Leaders Need to Know Right Now
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
              Move beyond tech-first failures. Get a strategic roadmap for accounting leaders to align data, people, and processes for successful AI adoption.
            </p>
            <Button asChild variant="outline" className="rounded-xl self-start">
              <Link to="/courses">Learn more</Link>
            </Button>
          </div>
        </div>

        {/* Speaking engagements — centered below the 3 boxes */}
        <div className="max-w-3xl mx-auto text-center bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-primary/20 shadow-soft animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Bring Nucleations to Your Audience
          </h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            Book us for practical, human-centred AI talks, webinars, panels, and leadership sessions for business, accounting, finance, and professional services audiences.
          </p>
          <Button asChild className="rounded-full shadow-soft hover:shadow-elegant">
            <Link to="/courses">Inquire about speaking</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
