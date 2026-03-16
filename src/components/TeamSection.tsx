import { Button } from '@/components/ui/button';
import amitImg from '@/assets/amit.jpeg';
import vanessaImg from '@/assets/vanessa.png';
import saadImg from '@/assets/saad.jpg';

const team = [
  {
    name: 'Amit Kanigsberg',
    title: 'Human x AI Strategy & Architecture',
    bio: '25+ years including RBC Borealis, Rangle.io, and as founder/CTO of multiple ventures building AI products and platforms that work at scale. Amit brings firsthand building experience and a deep understanding of what makes enterprise AI successful: sound technical architecture paired with organizational transformation. Sustainable value only comes when both evolve together.',
    photo: amitImg,
  },
  {
    name: 'Vanessa Rementilla',
    title: 'Human x AI Strategy & CX + Operations',
    bio: '25+ years leading Human-Centered Design and business transformation. Industry speaker and educator teaching Entrepreneurship & AI at Schulich School of Business and Design Strategy & AI at OCADU. As both practitioner and instructor, Vanessa brings a keen eye for AI design, the importance of putting people at the center, and how AI integrates with the systems it serves.',
    photo: vanessaImg,
  },
  {
    name: 'Saad Nizari',
    title: 'Human x AI Strategy & Value Creation',
    bio: '15+ years at McKinsey, RBC, Goldman Sachs. Saad has led AI transformations globally across sectors and sizes, developing a practical view on delivering value from AI: a robust understanding of the problem to be solved alongside broader organizational realities, including implications on the end-to-end human-technology interaction model – not just the stack.',
    photo: saadImg,
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-foreground">The Team: Experience with a Fresh Perspective</h2>
          <p className="text-xl text-muted-foreground">
            Our team brings decades of real-world AI transformation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center space-y-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <img
                  src={member.photo}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book a Strategy Session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
