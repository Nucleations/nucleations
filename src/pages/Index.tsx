import { HeroSection } from '@/components/HeroSection';
import { IndustryFocusSection } from '@/components/IndustryFocusSection';
import { HowWeHelpSection } from '@/components/HowWeHelpSection';
import { OurApproachSection } from '@/components/OurApproachSection';
import { FAQSection } from '@/components/FAQSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IndustryFocusSection />
      <HowWeHelpSection />
      <OurApproachSection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
