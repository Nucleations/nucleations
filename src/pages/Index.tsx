import { HeroSection } from '@/components/HeroSection';
import { WhyNucleationsSection } from '@/components/WhyNucleationsSection';
import { IndustryFocusSection } from '@/components/IndustryFocusSection';
import { HowWeHelpSection } from '@/components/HowWeHelpSection';
import { OurApproachSection } from '@/components/OurApproachSection';
import { FAQSection } from '@/components/FAQSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyNucleationsSection />
      <IndustryFocusSection />
      <HowWeHelpSection />
      <OurApproachSection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default Index;
