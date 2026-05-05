import { SiteHeader } from '@/components/SiteHeader';
import { TopBanner } from '@/components/TopBanner';
import { ContactSection } from '@/components/ContactSection';

const Aria = () => {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <SiteHeader />
      <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            ARIA
          </p>
          <h1 className="text-foreground">ARIA Workflow Mapping Tool</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Coming soon. ARIA helps you map workflows and identify where AI creates real value before you invest in tools.
          </p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default Aria;
