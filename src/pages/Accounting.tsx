import { ArrowLeft, Clock, Users, CheckCircle, Search, Compass, Rocket, TrendingUp, AlertTriangle, Scale, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import nucleationsLogo from "@/assets/nucleations-logo-main.png";

const benefitCards = [
  {
    icon: Clock,
    title: "Work Gets Done Faster",
    description: "AI accelerates key workflows such as reconciliations, variance checks, and document handling. Firms that adopt AI close their books 7.5 days faster on average¹, reducing delays and eliminating manual backlogs."
  },
  {
    icon: Users,
    title: "Capacity Expands Without Hiring",
    description: "By automating data entry, categorization, and review tasks, accounting teams can support 55% more clients per week¹. This creates additional capacity without increasing headcount and allows staff to focus on higher-value work."
  },
  {
    icon: CheckCircle,
    title: "Quality and Consistency Improve",
    description: "AI can cut processing time by up to 60% while reducing accounting errors by about 30%². The result is more consistent books, fewer corrections, and a stronger audit trail for every reporting cycle."
  }
];

const adoptionSteps = [
  {
    step: 1,
    title: "Diagnose",
    icon: Search,
    description: "We map your accounting workflows to uncover bottlenecks, busy-season pressure points, and high-effort tasks. From this, we identify the highest-value AI opportunities that improve capacity, profitability, and turnaround times."
  },
  {
    step: 2,
    title: "Design",
    icon: Compass,
    description: "We design adaptive, accounting-specific workflows where AI automates routing, categorization, reconciliation, and document handling, while your team stays in control through human-review steps. We also define reusable AI components that integrate with your GL, document tools, and practice-management systems."
  },
  {
    step: 3,
    title: "Deliver",
    icon: Rocket,
    description: "We launch an initial quick-win release, often producing 30–50% time savings, so your firm sees value immediately. Each rollout includes risk-aware AI with audit-ready logs and controls, creating a scalable blueprint you can expand across teams and service lines."
  }
];

const firmBenefits = [
  {
    icon: TrendingUp,
    title: "Save time and make smarter decisions",
    description: "AI reduces manual workload and lowers error rates, giving your team clearer visibility into what's happening across engagements, deadlines, and client needs. This leads to faster closes, more confident decisions, and better overall control of your practice."
  },
  {
    icon: AlertTriangle,
    title: "Spot issues earlier",
    description: "AI helps you detect shifts in client behavior, demand, or performance sooner. With early insight into anomalies or bottlenecks, you can address issues before they become costly, time-consuming, or irreversible."
  },
  {
    icon: Scale,
    title: "Scale without extra headcount",
    description: "By handling repetitive tasks such as categorization, reconciliation, and document processing, AI frees your team to focus on higher-value advisory and review work. Your firm gains capacity without needing immediate hires—especially valuable during peak periods."
  },
  {
    icon: GraduationCap,
    title: "Build a smarter, more capable workforce",
    description: "As AI supports day-to-day tasks, your team continually learns and moves up the value chain. Staff gain experience faster, client conversations improve, and the consistency of deliverables strengthens across the firm."
  },
  {
    icon: Trophy,
    title: "Gain a long-term competitive edge",
    description: "AI-enabled firms grow faster by expanding capacity, improving turnaround times, and delivering higher-value services—driving measurable gains in firm performance and revenue."
  }
];

const Accounting = () => {
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
        </div>
      </section>

      {/* Adoption Path Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">
              An AI Adoption Path That Fits Your Firm and Your Ambitions
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
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Step {step.step}: {step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < adoptionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%+1rem)] w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means Section */}
      <section className="py-20 px-6 opportunity-gradient animate-gradient-shift">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground text-center mb-16">
            What This Means for Your Firm
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firmBenefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Ready to explore how AI can transform your accounting practice?
          </p>
          <Link 
            to="/#contact-section"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Book an Intro Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Accounting;