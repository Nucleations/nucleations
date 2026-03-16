import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const services: {title: string;description: string;iconSrc: string;}[] = [
{
  title: 'AI Strategy & Planning',
  description: 'We analyze your business operations and organizational context to design AI components that deliver measurable results. You get a comprehensive action plan grounded in your reality and mapped to your actual workflows, not generic best practices.',
  iconSrc: diamondImg
},
{
  title: 'AI Design & Implementation',
  description: 'We dive deep into your workflows to build AI interventions that demonstrate real value in your current stack, or help you build an AI-ready foundation if you need one. Starting with focused pilots, we scale to entire products or business lines, regardless of your AI maturity or technical starting point.',
  iconSrc: circleImg
},
{
  title: 'AI Training & Enablement',
  description: 'We develop tailored training for every level of your organization, from leadership workshops to frontline upskilling, delivered as in-person sessions, digital modules, or custom content that fits how your people learn.',
  iconSrc: starImg
}];


export const HowWeHelpSection = () => {
  return (
    <section className="py-24 px-6 help-gradient-purple animate-gradient-shift">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-foreground">
            How We Help
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-800">
            We meet you where you are and design AI that fits your business reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <div
            key={index}
            className="rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card border-secondary/20 shadow-soft hover:shadow-elegant"
            style={{ animationDelay: `${index * 0.1}s` }}>
            
              <div className="inline-flex p-3 rounded-xl mb-6 bg-background">
                <img
                src={service.iconSrc}
                alt=""
                style={{ width: '37px', height: '37px' }} />
              
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-800">
                {service.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};