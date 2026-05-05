import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import logoOutline from '@/assets/nucleations-logo-outline.png';

const describeOptions = [
  'We are just starting with AI',
  'We are using AI tools but not seeing business impact',
  'We have a pilot and need a business case',
  'We need AI training for our team',
  'We are interested in ARIA',
  'We are interested in partnership',
  'Other',
] as const;

const nextStepOptions = [
  'Book a call',
  'Send me the ARIA Workflow Check',
  'Tell me about courses',
  'Discuss a partnership',
] as const;

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  organization: z.string().trim().min(1, 'Organization is required').max(100),
  role: z.string().trim().max(100).optional(),
  describe: z.enum(describeOptions, { required_error: 'Please select an option' }),
  workflow: z.string().trim().max(1000).optional(),
  nextStep: z.enum(nextStepOptions, { required_error: 'Please select a next step' }),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      role: '',
      workflow: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent('New Nucleations Website Inquiry');
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Organization: ${data.organization}\n` +
        `Role / Title: ${data.role || '-'}\n\n` +
        `What best describes you?\n${data.describe}\n\n` +
        `Workflow or business area:\n${data.workflow || '-'}\n\n` +
        `Preferred next step:\n${data.nextStep}\n\n` +
        `Message:\n${data.message || '-'}`
      );
      window.location.href = `mailto:vanessa@nucleations.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      toast.success("Thank you. We'll review your response and follow up with the most relevant next step.");
      form.reset();
    } catch {
      toast.error('Something went wrong. Please email us directly at vanessa@nucleations.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="py-24 px-6 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/10 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-8 h-8 bg-secondary/20 rounded-full blur-xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full blur-xl" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA copy */}
          <div className="animate-fade-in lg:sticky lg:top-24">
            <img
              src={logoOutline}
              alt="Nucleations"
              className="w-20 h-20 mb-8 opacity-80"
            />
            <h2 className="text-foreground mb-6">
              Ready to move from AI experimentation to business impact?
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Whether you are just starting, already testing tools, or trying to rescue a stalled pilot, Nucleations can help you identify the right next step.
            </p>
            <p className="text-base text-muted-foreground">
              Tell us where you are in your AI journey, and we'll help determine the best way to move forward.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">
                  We'll review your response and follow up with the most relevant next step.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-elegant animate-fade-in">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="rounded-xl border-2 focus:border-primary" {...field} />
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
                            <Input type="email" placeholder="your.email@company.com" className="rounded-xl border-2 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Organization *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your organization" className="rounded-xl border-2 focus:border-primary" {...field} />
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
                          <FormLabel className="text-foreground font-semibold">Role / Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Your role or title" className="rounded-xl border-2 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="describe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">What best describes you? *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-2 focus:border-primary">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {describeOptions.map((opt) => (
                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="workflow"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">What workflow or business area are you thinking about?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Example: client onboarding, document review, reporting, finance operations, customer support, sales enablement, internal knowledge management"
                              className="rounded-xl border-2 focus:border-primary min-h-24 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nextStep"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Preferred next step *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-2 focus:border-primary">
                                <SelectValue placeholder="Select a next step" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {nextStepOptions.map((opt) => (
                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us anything else that would help us understand your goals, current AI activity, or where you feel stuck."
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
                      className="w-full text-lg py-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
                      size="lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-16 text-xs md:text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center gap-x-2">
            <span>Industries: Small & Medium Business</span>
            <Link to="/accounting" className="hover:text-primary transition-colors">Accounting</Link>
            <Link to="/logistics" className="hover:text-primary transition-colors">Logistics & Moving</Link>
          </div>
          <div className="flex items-center gap-2">
            <span>© 2025 Nucleations. All rights reserved.</span>
            <span className="text-border">|</span>
            <a
              href="https://www.linkedin.com/company/nucleations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
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
  );
};
