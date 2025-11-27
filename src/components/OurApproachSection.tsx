import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const beliefs = [
  {
    number: '1',
    title: 'Human x AI: Designed for Your Business',
    description: 'We don\'t believe in off-the-shelf AI transformation. Every business has unique workflows, constraints, and people and we design solutions that fit your reality.',
    icon: circleImg,
    iconPattern: 'two-orbiting', // Two circles
  },
  {
    number: '2',
    title: 'Value First. Scale Next',
    description: 'Quick wins in real workflows, ensuring success and building conviction before expansion, creating the foundation for a living, evolving AI system.',
    icon: diamondImg,
    iconPattern: 'rising', // Rising diamond
  },
  {
    number: '3',
    title: 'Amplify Human Potential with AI',
    description: 'AI should remove routine work safely or deliver actionable intelligence - so your people can focus where their experience and judgment drive the most value.',
    icon: starImg,
    iconPattern: 'radiating', // Radiating star
  },
  {
    number: '4',
    title: 'Independence & Partnership',
    description: 'We\'re not tied to any platform. We help you use what you already have or guide you toward the right AI stack decisions, keeping ownership firmly in your hands.',
    icon: circleImg,
    iconPattern: 'paired', // Two elements together
  },
];

export const OurApproachSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-8 animate-fade-in">
          <h2 className="text-foreground text-center">
            Our Approach: Context Design & Engineering
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We focus on context, and not just the technical kind. True context engineering means designing AI with your full business context, human context, and operational reality in mind. Not just what goes into the model, but what surrounds it: your workflows, your people, your constraints.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We help you understand AI and help AI understand your business by building Context Frameworks that capture how your operations really work. These Frameworks become the foundation for adaptive AI-enabled workflows that deliver measurable outcomes and evolve as your business grows.
          </p>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-foreground">
            Four core beliefs underpin everything we do.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in space-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-16 h-16 mb-4">
                {belief.iconPattern === 'two-orbiting' && (
                  <>
                    <img src={circleImg} alt="" className="absolute top-0 left-0 w-10 h-10 object-contain opacity-60" />
                    <img src={circleImg} alt="" className="absolute bottom-0 right-0 w-10 h-10 object-contain opacity-80" />
                  </>
                )}
                {belief.iconPattern === 'rising' && (
                  <img src={diamondImg} alt="" className="w-full h-full object-contain opacity-70 transform translate-y-2" />
                )}
                {belief.iconPattern === 'radiating' && (
                  <div className="relative w-full h-full">
                    <img src={starImg} alt="" className="absolute inset-0 w-full h-full object-contain opacity-40 scale-150" />
                    <img src={starImg} alt="" className="absolute inset-0 w-full h-full object-contain opacity-70" />
                  </div>
                )}
                {belief.iconPattern === 'paired' && (
                  <>
                    <img src={circleImg} alt="" className="absolute top-0 left-0 w-10 h-10 object-contain opacity-70" />
                    <img src={diamondImg} alt="" className="absolute bottom-0 right-0 w-10 h-10 object-contain opacity-70" />
                  </>
                )}
              </div>
              
              <h4 className="text-2xl font-bold text-foreground">
                {belief.number}: {belief.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
