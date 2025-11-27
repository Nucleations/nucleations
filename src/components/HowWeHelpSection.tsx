import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const services = [
  {
    title: 'AI Strategy & Planning',
    description: 'We analyze your business operations and organizational context to design AI components that deliver measurable results. You get a comprehensive action plan grounded in your reality and mapped to your actual workflows, not generic best practices.',
    iconElements: [circleImg, starImg], // Composite icon
  },
  {
    title: 'AI Design & Implementation',
    description: 'We dive deep into your workflows to build AI interventions that demonstrate real value in your current stack, or help you build an AI-ready foundation if you need one. Starting with focused pilots, we scale to entire products or business lines, regardless of your AI maturity or technical starting point.',
    iconElements: [diamondImg, circleImg],
  },
  {
    title: 'AI Training & Enablement',
    description: 'We develop tailored training for every level of your organization, from leadership workshops to frontline upskilling, delivered as in-person sessions, digital modules, or custom content that fits how your people learn.',
    iconElements: [starImg, diamondImg],
  },
];

export const HowWeHelpSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-foreground">How We Help</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We meet you where you are and design AI that fits your business reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in space-y-6"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Unique composite icon */}
              <div className="relative w-24 h-24 mx-auto">
                <img
                  src={service.iconElements[0]}
                  alt=""
                  className="absolute top-0 left-0 w-16 h-16 object-contain opacity-70"
                />
                <img
                  src={service.iconElements[1]}
                  alt=""
                  className="absolute bottom-0 right-0 w-16 h-16 object-contain opacity-70"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground text-center">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
