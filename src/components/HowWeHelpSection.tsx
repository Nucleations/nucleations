import { useState } from 'react';
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
  const [backgroundVariant, setBackgroundVariant] = useState<'light' | 'purple'>('light');

  return (
    <section className={`py-24 px-6 relative transition-all duration-700 ${
      backgroundVariant === 'light' ? 'bg-background' : 'bg-gradient-to-br from-primary via-[#61018D] to-primary'
    }`}>
      {/* Background Toggle Button */}
      <button
        onClick={() => setBackgroundVariant(prev => prev === 'light' ? 'purple' : 'light')}
        className="absolute top-6 right-6 px-4 py-2 text-sm bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors z-10"
        aria-label="Toggle background variant"
      >
        Switch Background
      </button>

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 space-y-4 animate-fade-in ${
          backgroundVariant === 'purple' ? 'text-primary-foreground' : ''
        }`}>
          <h2 className={backgroundVariant === 'purple' ? 'text-primary-foreground' : 'text-foreground'}>
            How We Help
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            backgroundVariant === 'purple' ? 'text-primary-foreground/90' : 'text-muted-foreground'
          }`}>
            We meet you where you are and design AI that fits your business reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                backgroundVariant === 'purple' 
                  ? 'bg-background/10 backdrop-blur-sm border-primary-foreground/20 shadow-lg hover:shadow-xl hover:bg-background/15' 
                  : 'bg-card border-secondary/20 shadow-soft hover:shadow-elegant'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl mb-6 ${
                backgroundVariant === 'purple' ? 'bg-background/20' : 'bg-background'
              }`}>
                <img 
                  src={service.iconSrc} 
                  alt="" 
                  style={{ width: '37px', height: '37px' }}
                />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                backgroundVariant === 'purple' ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${
                backgroundVariant === 'purple' ? 'text-primary-foreground/85' : 'text-muted-foreground'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
