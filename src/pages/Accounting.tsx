import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import nucleationsLogo from "@/assets/nucleations-logo-main.png";
import logoOutline from '@/assets/nucleations-logo-outline.png';
import elementDiamond from '@/assets/element-diamond.png';
import elementCircle from '@/assets/element-circle.png';
import elementStar from '@/assets/element-star.png';

const formSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().min(1, 'Company name is required').max(100, 'Company name must be less than 100 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof formSchema>;

const benefitCards = [
  {
    icon: Clock,
    title: "Work Gets Done Faster",
    description: <>AI accelerates key workflows such as reconciliations, variance checks, and document handling. <strong>Firms that adopt AI close their books 7.5 days faster on average</strong>¹, reducing delays and eliminating manual backlogs.</>
  },
  {
    icon: Users,
    title: "Capacity Expands Without Hiring",
    description: <>By automating data entry, categorization, and review tasks, <strong>accounting teams can support 55% more clients per week</strong>¹. This creates additional capacity without increasing headcount and allows staff to focus on higher-value work.</>
  },
  {
    icon: CheckCircle,
    title: "Quality and Consistency Improve",
    description: <><strong>AI can cut processing time by up to 60% while reducing accounting errors by about 30%</strong>². The result is more consistent books, fewer corrections, and a stronger audit trail for every reporting cycle.</>
  }
];

const adoptionSteps = [
  {
    title: "Diagnose",
    element: elementDiamond,
    description: "We map your accounting workflows to uncover bottlenecks, busy-season pressure points, and high-effort tasks. From this, we identify the highest-value AI opportunities that improve capacity, profitability, and turnaround times."
  },
  {
    title: "Design",
    element: elementCircle,
    description: "We design adaptive, accounting-specific workflows where AI automates routing, categorization, reconciliation, and document handling, while your team stays in control through human-review steps. We also define reusable AI components that integrate with your GL, document tools, and practice-management systems."
  },
  {
    title: "Deliver",
    element: elementStar,
    description: "We launch an initial quick-win release, often producing 30–50% time savings, so your firm sees value immediately. Each rollout includes risk-aware AI with audit-ready logs and controls, creating a scalable blueprint you can expand across teams and service lines."
  }
];


const Accounting = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent(`New Contact Form Submission from ${data.fullName}`);
      const body = encodeURIComponent(
        `Full Name: ${data.fullName}\n` +
        `Email: ${data.email}\n` +
        `Company: ${data.company}\n\n` +
        `Message:\n${data.message}`
      );
      
      const mailtoLink = `mailto:info@nucleations.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <img 
            src={nucleationsLogo} 
            alt="Nucleations Logo" 
            className="h-10 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 opportunity-gradient animate-gradient-shift">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-4 animate-fade-in">
            The AI Advantage for Accounting Firms
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Stronger Teams. Faster Closes. More Clients Served.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI streamlines accounting workflows, automates repetitive tasks, and reduces operational friction. Your team moves faster, delivers more accurate work, and scales without increasing headcount. Integrated into daily operations, AI becomes a steady engine for stronger performance and firm growth.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefitCards.map((card, index) => (
              <Card 
                key={card.title} 
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/70 mt-8 text-center">
            ¹Human + AI in Accounting: Early Evidence from the Field, Stanford/MIT study; ²AI In The Accounting Industry Statistics, Gitnux. Results may vary based on firm statistics.
          </p>
          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('accounting-contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book an Intro Call
            </Button>
          </div>
        </div>
      </section>

      {/* Adoption Path Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">
              A Practical, Scalable Way to Bring AI Into Your Firm
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We help you modernize key workflows and introduce AI thoughtfully, so your team can evolve at the right pace and in the right direction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {adoptionSteps.map((step, index) => (
              <div 
                key={step.title}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={step.element} alt="" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < adoptionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%+1rem)] w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="accounting-contact" className="py-24 px-6 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/10 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-secondary/20 rounded-full blur-xl" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full blur-xl" aria-hidden="true" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <img
              src={logoOutline}
              alt="Nucleations"
              className="w-24 h-24 mx-auto mb-8 opacity-80"
            />
            
            <p className="text-xl md:text-2xl text-foreground font-medium mb-2">
              Want your team to move faster and make clearer decisions?
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-2">
              Need more capacity without more hiring?
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-8">
              Ready to grow revenue in a scalable, sustainable way?
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Let's make it happen.
            </p>
            <p className="text-lg text-muted-foreground">
              Book a 30-minute intro call and start your AI journey.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">
                Your message has been sent. We will get back to you shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-4"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant animate-fade-in">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="rounded-xl border-2 focus:border-primary"
                            {...field}
                          />
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
                        <FormLabel className="text-foreground font-semibold">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@company.com"
                            className="rounded-xl border-2 focus:border-primary"
                            {...field}
                          />
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
                          <Input
                            placeholder="Your company name"
                            className="rounded-xl border-2 focus:border-primary"
                            {...field}
                          />
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
                        <FormLabel className="text-foreground font-semibold">How can we help? *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your AI needs and goals..."
                            className="rounded-xl border-2 focus:border-primary min-h-32 resize-none"
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
                    className="w-full text-lg py-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/company/nucleations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;