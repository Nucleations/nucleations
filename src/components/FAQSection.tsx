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
    question: 'Do we need to know which AI tool we want before working with you?',
    answer: 'No. In fact, we recommend starting before the tool decision. Our work helps you identify the right workflow, clarify the business case, and determine what kind of technology is actually needed.',
    icon: circleImg,
  },
  {
    question: 'What if we are already using AI tools?',
    answer: 'That is common. Many organizations are experimenting with tools but have not connected them to measurable business value. We help assess what is working, where adoption is weak, and which workflows are worth redesigning.',
    icon: diamondImg,
  },
  {
    question: 'What if we already ran a pilot and did not see impact?',
    answer: 'A stalled pilot often means the workflow, adoption plan, business case, or governance model was not strong enough. We can help diagnose the gap and determine whether to improve, reposition, or stop the initiative.',
    icon: starImg,
  },
  {
    question: 'Who should be involved from our organization?',
    answer: 'The right group depends on the workflow. Typically, we involve a business sponsor, operational leaders, people close to the day-to-day work, and anyone accountable for technology, risk, or change.',
    icon: circleImg,
  },
  {
    question: 'Do you implement AI tools?',
    answer: 'We help define what should be implemented, how the workflow should change, and what conditions are required for success. Depending on the engagement, we may support implementation planning, vendor evaluation, pilot design, and delivery partnerships.',
    icon: diamondImg,
  },
  {
    question: 'How is Nucleations different from a SaaS vendor?',
    answer: 'SaaS vendors show what their tools can do. We help you decide what your organization should do. Our work comes before or alongside tool selection, so AI investments are tied to real workflows, business value, adoption, and accountability.',
    icon: starImg,
  },
  {
    question: 'Can you train our team while helping us build the strategy?',
    answer: 'Yes. Capability transfer is central to our approach. We teach the frameworks as we apply them, so your team can continue identifying and evaluating future AI opportunities independently.',
    icon: circleImg,
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 px-6 opportunity-gradient animate-gradient-shift">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-foreground text-center mb-16 animate-fade-in">
          Questions leaders ask before starting with AI
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
                    className="object-contain opacity-40 group-hover:opacity-70 transition-opacity flex-shrink-0"
                    style={{ width: '15px', height: '15px' }}
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
