import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const services = [
  {
    title: 'AI Strategy & Planning',
    description: 'We analyze your business operations and organizational context to design AI components that deliver measurable results. You get a comprehensive action plan grounded in your reality and mapped to your actual workflows, not generic best practices.',
    icon: diamondImg,
  },
  {
    title: 'AI Design & Implementation',
    description: 'We dive deep into your workflows to build AI interventions that demonstrate real value in your current stack, or help you build an AI-ready foundation if you need one. Starting with focused pilots, we scale to entire products or business lines, regardless of your AI maturity or technical starting point.',
    icon: circleImg,
  },
  {
    title: 'AI Training & Enablement',
    description: 'We develop tailored training for every level of your organization, from leadership workshops to frontline upskilling, delivered as in-person sessions, digital modules, or custom content that fits how your people learn.',
    icon: starImg,
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
              className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-in space-y-6 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Single brand micro-shape icon */}
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(45%) saturate(1234%) hue-rotate(85deg) brightness(98%) contrast(96%)' }}
                  />
                </div>
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
