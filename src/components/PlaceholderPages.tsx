import { TopBanner } from '@/components/TopBanner';
import { SiteHeader } from '@/components/SiteHeader';
import { ContactSection } from '@/components/ContactSection';

const PlaceholderPage = ({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) => (
  <main className="min-h-screen">
    <TopBanner />
    <SiteHeader />
    <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
        <h1 className="text-foreground">{title}</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{body}</p>
      </div>
    </section>
    <ContactSection />
  </main>
);

export const Services = () => (
  <PlaceholderPage
    eyebrow="Services"
    title="Nucleations Services"
    body="Detailed service offerings coming soon. In the meantime, book an AI Opportunity Call to discuss your needs."
  />
);

export const Courses = () => (
  <PlaceholderPage
    eyebrow="Courses"
    title="Nucleations Courses"
    body="Live courses, private workshops, and partner-delivered programs. Full course catalog coming soon."
  />
);
