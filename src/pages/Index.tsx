import { TopBanner } from '@/components/TopBanner';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroSection } from '@/components/HeroSection';
import { WhyNucleationsSection } from '@/components/WhyNucleationsSection';

import { HowWeHelpSection } from '@/components/HowWeHelpSection';
import { AIEducationSection } from '@/components/AIEducationSection';
import { FAQSection } from '@/components/FAQSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <SiteHeader />
      <HeroSection />
      <WhyNucleationsSection />
      <div id="services">
        <HowWeHelpSection />
      </div>
      <div id="courses">
        <AIEducationSection />
      </div>
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Index;
