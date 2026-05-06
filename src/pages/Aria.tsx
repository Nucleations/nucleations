import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import { SiteHeader } from '@/components/SiteHeader';
import { TopBanner } from '@/components/TopBanner';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const scrollToEarlyAccess = (e?: React.MouseEvent) => {
  e?.preventDefault();
  document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
};

const Placeholder = ({ label, className = '' }: { label: string; className?: string }) => (
  <div
    className={`w-full rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-secondary/20 via-card to-primary/10 flex items-center justify-center p-8 text-center ${className}`}
    role="img"
    aria-label={label}
  >
    <p className="text-sm md:text-base text-foreground/70 max-w-md leading-relaxed">
      <span className="block font-semibold text-primary mb-2 uppercase tracking-wide text-xs">
        Placeholder
      </span>
      {label}
    </p>
  </div>
);

const featureCards = [
  {
    title: 'Actions',
    body: 'Maps what actually happens step by step, including shadow processes and workarounds.',
  },
  {
    title: 'Roles',
    body: 'Shows who is involved, where accountability sits, and how responsibilities shift.',
  },
  {
    title: 'Intelligence',
    body: 'Identifies where decisions happen, how they are made, and where AI can responsibly contribute.',
  },
  {
    title: 'Accountability',
    body: 'Clarifies who reviews, owns, and remains accountable when AI enters the workflow.',
  },
];

const comparisonRows = [
  ['Documents activities', 'Maps decisions and accountability'],
  ['Shows process flow', 'Reveals human and customer burden'],
  ['Captures handoffs', 'Identifies AI intervention points'],
  ['Focuses on efficiency', 'Designs human-centred transformation'],
  ['Technology-neutral', 'AI-readiness built in'],
];

const differentiators = [
  {
    title: 'Decision Mapping',
    body: 'ARIA creates an operational decision inventory, showing which decisions are rule-based, judgment-based, or mixed.',
  },
  {
    title: 'Burden Index',
    body: 'ARIA scores cognitive load, staff emotional weight, and customer emotional impact to reveal where work creates friction, burnout, risk, or poor experiences.',
  },
  {
    title: 'AI Opportunity Classification',
    body: 'ARIA identifies where AI should automate, augment, support decisions, or stay out of the workflow.',
  },
  {
    title: 'Accountability by Design',
    body: 'ARIA maps who owns decisions, who reviews AI outputs, and where governance checkpoints are required.',
  },
  {
    title: 'Role Evolution Planning',
    body: 'ARIA shows how people\u2019s work changes \u2014 from executor to reviewer, reviewer to exception handler, operator to AI trainer, and specialist to strategist.',
  },
];

const outcomes = [
  'Current State Mapping to reveal how work operates today, including hidden friction and operational burden.',
  'Future State Design for AI-enabled workflows built for scale, consistency, and smarter decision-making.',
  'Burden Analysis to measure operational and emotional strain across teams and customer experiences.',
  'AI Opportunity Identification to uncover high-value automation, augmentation, and decision support opportunities.',
  'Role Evolution Insights to surface how responsibilities and ways of working change with AI, improving adoption readiness.',
  'Executive Insights with before-and-after comparisons across burden, decisions, AI opportunities, governance, and workforce impact.',
  'A clear operational blueprint for AI adoption, investment decisions, and transformation planning.',
];

const audiences = [
  'Enterprise transformation teams',
  'Operations leaders',
  'AI strategy leaders',
  'Customer experience teams',
  'Process improvement teams',
  'Innovation groups',
  'Consulting firms',
  'HR and workforce transformation leaders',
  'Digital transformation programs',
];

const formSchema = z.object({
  name: z.string().trim().min(1, 'Full name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  company: z.string().trim().min(1, 'Company is required').max(100),
  role: z.string().trim().min(1, 'Role is required').max(100),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const EarlyAccessForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', company: '', role: '', message: '' },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent('ARIA Early Access Request');
      const body = encodeURIComponent(
        `Full Name: ${data.name}\n` +
          `Work Email: ${data.email}\n` +
          `Company: ${data.company}\n` +
          `Role: ${data.role}\n\n` +
          `Workflow they want to transform:\n${data.message || '-'}`
      );
      window.location.href = `mailto:vanessa@nucleations.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      toast.success('Thanks! We\u2019ll be in touch about ARIA early access.');
      form.reset();
    } catch {
      toast.error('Something went wrong. Please email vanessa@nucleations.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant text-center space-y-6 animate-fade-in">
        <h3 className="text-2xl font-bold text-foreground">Request received</h3>
        <p className="text-muted-foreground">
          We\u2019ll review your request and follow up about ARIA early access.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-elegant animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" className="rounded-xl border-2 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Work Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" className="rounded-xl border-2 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Company *</FormLabel>
                <FormControl>
                  <Input placeholder="Your company" className="rounded-xl border-2 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Role *</FormLabel>
                <FormControl>
                  <Input placeholder="Your role" className="rounded-xl border-2 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">
                  Message / What workflow are you hoping to transform?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about the workflow or transformation you have in mind."
                    className="rounded-xl border-2 focus:border-primary min-h-28 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full text-lg py-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Request Early Access'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

const Aria = () => {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <SiteHeader />

      {/* Hero */}
      <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary">
              ARIA Workflow Intelligence Platform
            </p>
            <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl text-balance">
              ARIA: Workflow Intelligence for Human-Centred AI Transformation
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Most organizations are rushing to implement AI before they understand how work
              actually happens. ARIA reveals where AI can create real operational value without
              losing human accountability, trust, or expertise.
            </p>
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <a href="#early-access" onClick={scrollToEarlyAccess}>
                  Request Early Access
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant border-2 border-secondary/20 bg-card animate-fade-in">
            <img
              src={ariaSample}
              alt="ARIA workflow intelligence sample showing lanes for actions, decisions, roles, burden index, and AI opportunities"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* What ARIA Does */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">What ARIA Does</p>
            <h2 className="text-foreground">From workflows to AI transformation blueprints</h2>
            <p className="text-lg text-foreground/80">
              ARIA transforms workflows into actionable AI transformation blueprints, helping
              organizations understand how work happens today, redesign workflows for AI, and
              identify where automation, decision support, and human judgment belong.
            </p>
            <p className="text-base text-foreground/70">
              Built on a human-centred approach, ARIA reveals how people experience the work
              itself, helping reduce unnecessary burden, improve operational quality, strengthen
              accountability, and enable teams to focus on higher-value work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((f, i) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 border-secondary/20 animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes ARIA different */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              What Makes ARIA Different
            </p>
            <h2 className="text-foreground">Built for human-centred AI transformation</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 border-secondary/20 animate-fade-in flex flex-col"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">{d.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">What You Get</p>
            <h2 className="text-foreground">An operational blueprint for AI adoption</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-soft border-2 border-secondary/20 animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex gap-3">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" aria-hidden="true" />
                  <p className="text-foreground/85 leading-relaxed text-sm md:text-base">{o}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who ARIA is for */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <div className="space-y-4 animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Who ARIA Is For</p>
            <h2 className="text-foreground">Built for teams leading real transformation</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {audiences.map((a) => (
              <span
                key={a}
                className="px-5 py-2.5 rounded-full bg-card border-2 border-primary/20 text-foreground/80 text-sm md:text-base shadow-soft"
              >
                {a}
              </span>
            ))}
          </div>

          <p className="text-lg text-foreground/75 max-w-2xl mx-auto italic">
            Especially for organizations asking: How do we introduce AI responsibly and
            practically into real workflows?
          </p>
        </div>
      </section>

      {/* Early Access */}
      <section
        id="early-access"
        className="py-24 px-6 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/10"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in lg:sticky lg:top-24 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Early Access</p>
            <h2 className="text-foreground">Join the ARIA Early Access Program</h2>
            <p className="text-lg text-foreground/80">
              ARIA is currently being released in limited early access. We are inviting
              transformation leaders, innovation teams, consultants, and enterprise operators to
              help shape the platform.
            </p>
          </div>
          <EarlyAccessForm />
        </div>
      </section>

      {/* Training & Workshop Access */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Training & Workshop Access
            </p>
            <h2 className="text-foreground">Included with Nucleations Transformation Programs</h2>
            <p className="text-lg text-foreground/80">
              Participants in selected Nucleations programs receive complimentary access to ARIA
              for the duration of the course.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Human-Centred AI Transformation Sprint',
                body: 'A guided executive and operational transformation program focused on practical AI adoption.',
              },
              {
                title: 'ARIA Workflow-to-Value Workshop',
                body: 'A hands-on workshop teaching teams how to map workflows, identify AI opportunities, and redesign operations using the ARIA framework.',
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 border-secondary/20 overflow-hidden animate-fade-in flex flex-col"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{c.title}</h3>
                  <p className="text-foreground/75 leading-relaxed mb-6 flex-grow">{c.body}</p>
                  <Button asChild variant="outline" className="rounded-xl self-start">
                    <Link to="/services">Learn more</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-foreground">Stop Guessing Where AI Fits.</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            ARIA makes workflows visible, measurable, and actionable, helping organizations
            implement AI with clarity, accountability, and human-centred design.
          </p>
          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <a href="#early-access" onClick={scrollToEarlyAccess}>
                Request Early Access
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Aria;
