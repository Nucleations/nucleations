import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const stats = [
  {
    number: '25%',
    title: 'Work Gets Done Faster',
    description: 'AI enables workers to complete complex, knowledge-intensive tasks 25% more quickly, with 40% higher quality.',
    source: 'Harvard Business School, 2023',
    icon: circleImg,
  },
  {
    number: '45%',
    title: 'Efficiency You Can Feel',
    description: 'Professionals using AI report up to a 45% productivity boost, especially in technical, customer support, and creative tasks.',
    source: 'Stanford AI Index Report, 2025',
    icon: diamondImg,
  },
  {
    number: '45%',
    subtitle: '36%',
    title: 'Improved Business Outcomes',
    description: '45% of business leaders cite AI as driving improvements in Customer Satisfaction over the past year, and 36% of leaders note AI\'s positive contributions to overall Profitability.',
    source: 'McKinsey State of AI Report, 2025',
    icon: starImg,
  },
];

export const OpportunitySection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h2 className="text-foreground">The AI Opportunity: What the Research Shows</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI strengthens the way your teams work by reducing friction and streamlining routine tasks. When integrated thoughtfully into everyday workflows, it helps your business move faster, operate more consistently, and perform at a higher level, without adding strain or complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in space-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img
                  src={stat.icon}
                  alt=""
                  className="w-full h-full object-contain opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary block">
                      {stat.number}
                    </span>
                    {stat.subtitle && (
                      <span className="text-2xl font-bold text-accent block">
                        {stat.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground text-center">
                {stat.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
              
              <p className="text-sm text-muted-foreground italic pt-2 border-t border-border">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto">
          Yet most companies struggle to capture this value. The difference isn't the technology, it's the approach.
        </p>
      </div>
    </section>
  );
};
