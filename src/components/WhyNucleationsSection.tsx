import strategyImg from '@/assets/nucleations-strategy.png';

const stats = [
  {
    value: '~95%',
    description: 'of enterprise GenAI pilots fail to achieve meaningful P&L impact.',
  },
  {
    value: '63%',
    description: 'of AI implementation failures trace back to human factors, not technology.',
  },
  {
    value: '2x',
    description: 'more likely to see financial returns when organizations redesign workflows before selecting tools.',
  },
];

export const WhyNucleationsSection = () => {
  return (
    <section className="py-24 px-6 opportunity-gradient animate-gradient-shift">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary">
            Why Human-Centred AI?
          </p>
          <h2 className="text-foreground">
            Tools help teams see what AI can do. Human-centred strategy helps them capture its value.
          </h2>
        </div>

        {/* Body copy */}
        <div className="max-w-3xl mx-auto space-y-5 text-lg text-foreground/80 leading-relaxed mb-16 animate-fade-in">
          <p>
            Experimenting with AI tools is often a reasonable first move. It helps teams learn what is possible and respond to pressure from the market.
          </p>
          <p>But experimentation is not transformation.</p>
          <p>
            Lasting AI value comes from understanding the work itself: where the process breaks down, where human judgment matters, how roles and accountability will change, and what business outcome needs to improve.
          </p>
          <p>
            Nucleations starts there. We look at your organization's ecosystem, including the work, the people, the decisions, and the business context, before making technology choices. Then we design AI-enabled ways of working that strengthen human judgment and expertise, reduce unnecessary burden, and build capability inside your team.
          </p>
        </div>

        {/* Pull quote + image */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20 items-stretch animate-fade-in">
          <blockquote className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 shadow-elegant border-l-4 border-primary space-y-4 text-foreground/85 leading-relaxed">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              "AI should earn its place in the workflow."
            </p>
            <p>Not by replacing professional judgment.</p>
            <p>Not by forcing teams into tools they do not trust.</p>
            <p>Not by creating another disconnected pilot.</p>
            <p className="pt-2">
              AI earns its place when it improves the work, supports the people doing it, and creates value the business can measure.
            </p>
          </blockquote>
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
            <img
              src={strategyImg}
              alt="Nucleations strategy session"
              className="w-full h-full object-cover min-h-[280px]"
            />
          </div>
        </div>

        {/* Evidence band */}
        <div className="space-y-8 animate-fade-in">
          <h3 className="text-foreground text-center">Why this matters</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center border-2 border-secondary/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                  {stat.value}
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-foreground/85 leading-relaxed mt-16 animate-fade-in">
          That is the human-centred difference: start with the work, design around people, and leave your team with the frameworks, fluency, and confidence to keep going.
        </p>
      </div>
    </section>
  );
};
