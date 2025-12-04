import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Boxes, TrendingUp, Users } from "lucide-react";
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
    icon: Boxes,
    title: "Streamlined Operations",
    description: <>AI cuts waste and unlocks hidden capacity in your existing footprint. By improving demand forecasting, <strong>AI reduces inventory by 20 to 30 percent</strong>, while AI-powered warehouse tools unlock up to 15 percent in additional capacity¹. Real-world implementations have achieved <strong>50% reductions in container dwell time</strong>², meaning less capital tied up in excess stock, faster turnaround, and more throughput from the same facilities.</>
  },
  {
    icon: TrendingUp,
    title: "AI Enabled Growth",
    description: <>Embedding AI in operations can deliver <strong>15-20% reductions in logistics costs</strong> and savings in procurement spend, ultimately expanding margins¹. Through automated logistics workflows like route optimization, and dynamic load matching, AI enables handling higher volumes with more productivity, allowing you to serve more customers without proportional cost increases.</>
  },
  {
    icon: Users,
    title: "Teams Focus on What Matters",
    description: <>Research reveals that approximately <strong>40% of companies already use agentic AI for supply chain operations</strong>³. By automating scheduling, load matching, and exception monitoring, logistics teams can focus on client relationships, strategic planning, and complex problem-solving rather than constant firefighting and follow-up.</>
  }
];

const adoptionSteps = [
  {
    title: "Diagnose",
    element: elementDiamond,
    description: "We map your logistics workflows to uncover bottlenecks, capacity constraints, and high-effort manual tasks. From planning and warehousing to transportation and customer service, we identify the highest-value AI opportunities that improve throughput, reduce costs, and enhance service reliability."
  },
  {
    title: "Design",
    element: elementCircle,
    description: "We design adaptive, logistics-specific workflows where AI automates route optimization, load matching, demand forecasting, and inventory management, while your team stays in control through human-review steps and exception handling. We define reusable AI components that integrate with your ERP and other operational systems."
  },
  {
    title: "Deliver",
    element: elementStar,
    description: "We launch an initial quick-win release, honing in on improvements in key metrics like warehouse utilization, route efficiency, or order accuracy so your operation sees value immediately. Each rollout includes risk-aware AI with audit-ready logs, data safeguards, and clear accountability."
  }
];


const Logistics = () => {
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
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Link to="/">
            <img 
              src={nucleationsLogo} 
              alt="Nucleations Logo" 
              className="h-[4.2rem] w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 hero-gradient-green animate-gradient-shift">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-4 animate-fade-in">
            The AI Advantage for Logistics Firms
          </h1>
          <p className="text-xl md:text-2xl text-green font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Leaner Operations. Higher Margins. Strategic Teams.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI streamlines logistics workflows, automates complex planning tasks, and reduces daily bottlenecks. Your operation runs more efficiently, handles higher volumes with existing resources, and scales without proportional cost increases. Integrated into daily operations, AI becomes a steady engine for stronger performance and profitable growth.
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
                className="bg-card border-border/50 hover:border-green/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(172_72%_35%_/_0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/70 mt-8 text-center">
            ¹McKinsey, Harnessing the power of AI in distribution operations, 2024. ²Scale AI, Port of Montreal Case Study. ³Economist Impact Survey, 2025. Results may vary based on firm statistics.
          </p>
          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-green hover:bg-green/90 text-green-foreground shadow-[0_10px_40px_-10px_hsl(172_72%_35%_/_0.3)] hover:shadow-[0_0_40px_hsl(163_87%_66%_/_0.4)] transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('logistics-contact')?.scrollIntoView({ behavior: 'smooth' })}
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
              An AI Adoption Path That Fits Your Operations and Your Ambitions
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="logistics-contact" className="py-24 px-6 bg-gradient-to-br from-secondary/20 via-green/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-secondary/20 rounded-full blur-xl" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green/20 rounded-full blur-xl" aria-hidden="true" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <img
              src={logoOutline}
              alt="Nucleations"
              className="w-24 h-24 mx-auto mb-8 opacity-80"
            />
            
            <p className="text-xl md:text-2xl text-foreground font-medium mb-2">
              Tired of your team fire-fighting instead of strategizing?
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-2">
              Want to scale without adding trucks, facilities, or headcount?
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-8">
              Looking for a competitive edge as margins tighten?
            </p>
            <p className="text-2xl md:text-3xl font-bold text-green mb-4">
              Let's make it happen.
            </p>
            <p className="text-lg text-muted-foreground">
              Book a 30-minute intro call and start your AI journey.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 mx-auto bg-green rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-foreground"
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
                            className="rounded-xl border-2 focus:border-green"
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
                            className="rounded-xl border-2 focus:border-green"
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
                            className="rounded-xl border-2 focus:border-green"
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
                            placeholder="Tell us about your logistics challenges and goals..."
                            className="rounded-xl border-2 focus:border-green min-h-32 resize-none"
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
                    className="w-full text-lg py-6 rounded-xl bg-green hover:bg-green/90 text-green-foreground shadow-soft hover:shadow-elegant transition-all duration-300"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          )}

          <div className="flex flex-col items-center gap-3 mt-12 text-xs md:text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-x-2">
              <span>Industries: Small & Medium Business</span>
              <Link to="/accounting" className="hover:text-green transition-colors">Accounting</Link>
              <Link to="/logistics" className="hover:text-green transition-colors">Logistics & Moving</Link>
            </div>
            <div className="flex items-center gap-2">
              <span>© 2025 Nucleations. All rights reserved.</span>
              <span className="text-border">|</span>
              <a
                href="https://www.linkedin.com/company/nucleations/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-green transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;