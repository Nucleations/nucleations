import { Calculator, Truck, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const industries = [{
  title: 'Reduce manual work across your operations',
  icon: Building2,
  intro: 'For small and mid-sized organizations managing complex workflows and documentation.',
  listIntro: 'AI can help streamline work by assisting with:',
  items: [
    'processing documents and forms',
    'summarizing reports and updates',
    'coordinating workflows and schedules',
    'organizing internal knowledge',
  ],
  outro: 'This allows teams to spend less time on repetitive tasks and more time on higher-value work.',
  buttonText: 'Book a Strategy Session',
  link: '#contact-section',
}, {
  title: 'Serve more clients without increasing headcount',
  icon: Calculator,
  intro: 'For accounting and professional services teams that manage complex information and reporting.',
  listIntro: 'AI can assist with:',
  items: [
    'research and information synthesis',
    'drafting reports and communications',
    'retrieving internal knowledge',
    'summarizing complex financial or operational data',
  ],
  outro: 'When integrated into real workflows, AI helps professionals increase capacity while maintaining quality and judgment.',
  buttonText: 'Explore Accounting AI',
  link: '/accounting',
}, {
  title: 'Run complex operations with better coordination',
  icon: Truck,
  intro: 'For logistics, moving, and operations-heavy businesses managing scheduling, communication, and planning.',
  listIntro: 'AI can support teams by helping with:',
  items: [
    'analyzing operational data',
    'summarizing logistics and operational reports',
    'improving internal coordination',
    'supporting planning and forecasting',
  ],
  outro: 'When designed around operational workflows, AI can significantly improve efficiency and responsiveness.',
  buttonText: 'Explore Logistics AI',
  link: '/logistics',
}];

export const IndustryFocusSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Where AI Creates Value
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Across industries such as accounting, logistics, manufacturing, and service businesses, AI is helping teams reduce manual work, improve efficiency, and make better decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-in group hover:scale-[1.01] flex flex-col"
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-accent/10">
                    <Icon className="w-8 h-8 text-accent transition-all duration-500 group-hover:scale-105" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {industry.title}
                  </h3>
                </div>

                <div className="space-y-4 flex-grow">
                  <p className="text-foreground/80 leading-relaxed">{industry.intro}</p>
                  <p className="text-muted-foreground leading-relaxed">{industry.listIntro}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {industry.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">{industry.outro}</p>
                </div>

                <div className="mt-8">
                  {industry.link.startsWith('#') ? (
                    <Button
                      size="lg"
                      className="w-full md:w-auto"
                      onClick={() => {
                        const element = document.querySelector(industry.link);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {industry.buttonText}
                    </Button>
                  ) : (
                    <Button asChild size="lg" className="w-full md:w-auto">
                      <Link to={industry.link}>{industry.buttonText}</Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};