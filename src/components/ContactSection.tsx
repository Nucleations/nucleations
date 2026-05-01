import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
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
import { toast } from 'sonner';
import logoOutline from '@/assets/nucleations-logo-outline.png';

const formSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().min(1, 'Company name is required').max(100, 'Company name must be less than 100 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
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
      // Prepare mailto link with form data
      const subject = encodeURIComponent(`New Contact Form Submission from ${data.fullName}`);
      const body = encodeURIComponent(
        `Full Name: ${data.fullName}\n` +
        `Email: ${data.email}\n` +
        `Company: ${data.company}\n\n` +
        `Message:\n${data.message}`
      );
      
      const mailtoLink = `mailto:vanessa@nucleations.com?subject=${subject}&body=${body}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success state
      setIsSubmitted(true);
      toast.success('Thank you! Your message has been sent. We will get back to you shortly.');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again or email us directly at info@nucleations.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="py-24 px-6 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/10 relative overflow-hidden"
    >
      {/* Subtle particle accents */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-secondary/20 rounded-full blur-xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full blur-xl" aria-hidden="true" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Alternative logo treatment */}
        <div className="text-center mb-12 animate-fade-in">
          <img
            src={logoOutline}
            alt="Nucleations"
            className="w-24 h-24 mx-auto mb-8 opacity-80"
          />
          
          <h2 className="text-foreground mb-6">
            Ready to Unlock Your AI Advantage?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a 30-minute intro call to discuss how we can help you accelerate your AI journey.
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

        <div className="flex flex-col items-center gap-3 mt-12 text-xs md:text-sm text-muted-foreground">
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
