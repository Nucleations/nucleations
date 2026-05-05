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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary">
            Why Human-Centred AI
          </p>
          <h2 className="text-foreground">
            AI value does not come from tools alone.<br />It comes from redesigning how work gets done.
          </h2>
        </div>

        {/* Body copy */}
        <div className="max-w-3xl mx-auto space-y-5 text-lg text-foreground/80 leading-relaxed mb-16 animate-fade-in">
          <p>
            Most AI efforts start with the wrong question: <span className="italic">"Which tool should we use?"</span>
          </p>
          <p>
            Nucleations starts with a better one: <span className="italic">"Where does AI actually belong in the work?"</span>
          </p>
          <p>
            Our approach looks at the workflow, the people doing the work, the decisions being made, the accountability required, and the business outcome that needs to improve. Then we design AI-enabled ways of working that strengthen human judgment, reduce unnecessary burden, and create measurable value.
          </p>
        </div>

        {/* Pull quote card */}
        <blockquote className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-elegant border-l-4 border-primary mb-20 animate-fade-in">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            "AI should earn its place in the workflow."
          </p>
          <p className="text-foreground/80 leading-relaxed">
            It earns its place when it improves the work, supports the people doing it, protects professional judgment, and creates value the business can measure.
          </p>
        </blockquote>

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
          That is the human-centred difference: start with the work, design around people, and build the capability to keep going.
        </p>
      </div>
    </section>
  );
};
