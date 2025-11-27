import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import circleImg from '@/assets/element-circle.png';
import diamondImg from '@/assets/element-diamond.png';
import starImg from '@/assets/element-star.png';

const faqs = [
  {
    question: 'Where do I even start with AI?',
    answer: 'In our decades of experience, we\'ve learned that each organization starts from a different place: different data maturity, technology stack, AI familiarity, and industry context. Our goal is to enhance your organization with the right AI enablement for where you are today.\n\nTogether, we shape the right approach for your business. For some organizations, that means starting with bespoke leadership workshops on AI opportunity identification and integration. For others, it\'s pinpointing optimal opportunities and redesigning specific workflows with measurable outcomes. And for others, they are already primed for building and introducing new AI-enabled workflows.',
    icon: circleImg,
  },
  {
    question: 'How disruptive is this to our day-to-day operations?',
    answer: 'We take a light-touch, embedded approach focusing on minimal meetings, observation instead of new documentation, and working sessions with the right team members to progress quickly vs. pulling all team members in for every discussion.\n\nYour team should feel relief, not pressure. We adapt to how you work, not the other way around.',
    icon: diamondImg,
  },
  {
    question: 'What prerequisites do we need?',
    answer: 'You don\'t need advanced tools or perfect data. AI does not require perfect systems.\n\nWe design solutions that work with what you have today and improve as you modernize naturally.',
    icon: starImg,
  },
  {
    question: 'Can you help us navigate privacy and risk?',
    answer: 'Yes. We embed practical safeguards from the start: how data is handled, who reviews outputs, what guardrails are needed, and how to document decisions and create auditability. Risk management isn\'t an afterthought; it\'s built into the design.',
    icon: circleImg,
  },
  {
    question: 'Will AI replace my people or change how I hire?',
    answer: 'No. AI helps reduce burnout, clear bottlenecks, avoid unnecessary hiring, and improve quality and consistency. Ultimately, it augments your people, helping boost their capacity to spend more time on the activities requiring their valuable judgment and experience. AI becomes a force multiplier, not a replacement.',
    icon: diamondImg,
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-foreground text-center mb-16 animate-fade-in">
          FAQs
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border-2 border-secondary/20 px-6 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline group">
                <div className="flex items-center gap-4">
                  <img
                    src={faq.icon}
                    alt=""
                    className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
