import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const services: { title: string; description: string; iconSrc: string; iconColor: string }[] = [
  {
    title: 'AI Strategy',
    description: 'We work with you to understand your business challenges and identify high-impact opportunities where AI can drive real value.',
    iconSrc: diamondImg,
    iconColor: '#1AF037',
  },
  {
    title: 'Workflow Design',
    description: 'We map your existing processes, design optimized workflows, and ensure AI solutions integrate seamlessly into how your team actually works.',
    iconSrc: circleImg,
    iconColor: '#59F3C3',
  },
  {
    title: 'System Implementation',
    description: 'We build and deploy custom AI systems tailored to your needs, with ongoing support to ensure sustained impact and continuous improvement.',
    iconSrc: starImg,
    iconColor: '#1A9988',
  },
];

export const HowWeHelpSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-foreground">How We Help</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We meet you where you are and design AI that fits your business reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-background mb-6">
                <img 
                  src={service.iconSrc} 
                  alt="" 
                  style={{ width: '37px', height: '37px' }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
