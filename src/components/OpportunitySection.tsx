import { Zap, TrendingUp, BarChart3, LucideIcon } from 'lucide-react';

const stats: Array<{
  number: string;
  subtitle?: string;
  title: string;
  description: string;
  source: string;
  icon: LucideIcon;
}> = [
  {
    number: '25%',
    title: 'Work Gets Done Faster',
    description: 'AI enables workers to complete complex, knowledge-intensive tasks 25% more quickly, with 40% higher quality.',
    source: 'Harvard Business School, 2023',
    icon: Zap,
  },
  {
    number: '45%',
    title: 'Efficiency You Can Feel',
    description: 'Professionals using AI report up to a 45% productivity boost, especially in technical, customer support, and creative tasks.',
    source: 'Stanford AI Index Report, 2025',
    icon: TrendingUp,
  },
  {
    number: '45%',
    subtitle: '36%',
    title: 'Improved Business Outcomes',
    description: '45% of business leaders cite AI as driving improvements in Customer Satisfaction over the past year, and 36% of leaders note AI\'s positive contributions to overall Profitability.',
    source: 'McKinsey State of AI Report, 2025',
    icon: BarChart3,
  },
];

export const OpportunitySection = () => {
  return (
    <section className="py-24 px-6 opportunity-gradient animate-gradient-shift">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h2 className="text-foreground">Unleash Your Team. Unlock Your Growth.</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI streamlines routine tasks and reduces operational drag, helping your team work faster and with greater consistency. The result is a stronger, more efficient operation that fuels meaningful business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-in space-y-4 group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-center mb-6">
                  <Icon 
                    className="w-12 h-12 text-accent transition-all duration-500 group-hover:scale-105" 
                    strokeWidth={1.5}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground text-center mb-3">
                  {stat.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
                
                <p className="text-sm text-muted-foreground italic pt-2 border-t border-border">
                  {stat.source}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto">
          Yet most companies struggle to capture this value. The difference isn't the technology, it's the approach.
        </p>
      </div>
    </section>
  );
};
