import { Calculator, Truck, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: 'Accounting: Turn Efficiency into Growth',
    icon: Calculator,
    paragraphs: [
      'Industry-leading studies show AI-enabled accountants outperform traditional teams — supporting 55% more clients with greater accuracy.',
      'Top research from Stanford and MIT confirms that AI elevates capacity, speeds monthly closes, and strengthens financial reporting — giving modern firms a measurable competitive edge.',
    ],
    buttonText: 'Get your Accounting AI Strategy',
    link: '/accounting',
  },
  {
    title: 'Logistics & Moving: Gain a Competitive Edge',
    icon: Truck,
    paragraphs: [
      'Leading logistics and distribution companies are embedding AI into operations to achieve reductions of up to 30% in inventory costs, 20% in logistics costs, and 15% in procurement spend.',
      'According to McKinsey, AI creates measurable competitive advantage in logistics — but only when designed with your specific workflows, constraints, and business context in mind.',
    ],
    buttonText: 'Get your Logistics AI Strategy',
    link: '/logistics',
  },
  {
    title: 'Small and Medium Business: Accelerating Performance and Profitability',
    icon: Building2,
    paragraphs: [
      'From completing complex tasks 25% faster to improving quality by 40%, modern tools are helping teams deliver better results.',
      'In the past year, 45% of business leaders have seen higher customer satisfaction and 36% report improved profitability directly from smarter automation.',
    ],
    buttonText: 'Get Your Business AI Strategy',
    link: '/smb',
  },
];

export const IndustryFocusSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            AI Turns Operations-Heavy Industries into Growth Engines
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Across Accounting, Logistics and Moving, and other operations-driven sectors, intelligent automation is transforming how work gets done. By streamlining routine tasks and reducing operational drag, teams are working faster, with greater accuracy and consistency—unlocking efficiency that directly fuels business growth.
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
                    <Icon 
                      className="w-8 h-8 text-accent transition-all duration-500 group-hover:scale-105" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {industry.title}
                  </h3>
                </div>
                
                <div className="space-y-4 flex-grow">
                  {industry.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <Link to={industry.link}>
                      {industry.buttonText}
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
