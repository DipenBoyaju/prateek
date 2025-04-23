import { Plus } from 'lucide-react';
import { useState, useRef } from 'react';

const faqs = [
  {
    question: 'What is the mission of Prateek AI?',
    answer: "Prateek AI's mission is to become a global AI R&D hub focused on empowering differently abled and underserved communities. We combine deep interdisciplinary research, thoughtful engineering, and real-world innovation to build technologies that are inclusive, affordable, and impactful.",
  },
  {
    question: 'Who does Prateek AI serve?',
    answer: "We primarily serve differently abled individuals and underserved communities, especially those who have historically been overlooked by mainstream tech development. Our tools are designed to restore dignity, independence, and equal opportunity to people regardless of their physical or cognitive abilities.",
  },
  {
    question: "What makes Prateek AI different from other AI labs or startups?",
    answer: "We prioritize inclusion, accessibility, and real-world impact over hype and trends. Our Equitable Inclusive Technology Development Model (EITM) ensures that the technologies we build are affordable, durable, easy to use, and truly empower the users—especially those with disabilities.",
  },
  {
    question: "What kind of technologies or research does Prateek AI focus on?",
    answer: "We work on AI-driven tools for sign language translation, cognitive support, AI companionship, and more. Our research spans across disciplines to develop assistive technologies that are ethical, human-centered, and globally scalable.",
  },
  {
    question: "Why is Prateek AI based in Nepal?",
    answer: "Being based in Nepal allows us to stay grounded in the challenges of low-resource settings and design solutions that are practical and scalable. We believe powerful ideas can come from anywhere—and we're proud to prove that world-changing innovation can be born in the heart of Nepal.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:py-30 py-20">
      <div className="container mx-auto px-4 md:px-4">
        <div className="grid md:grid-cols-9">
          <div className="col-span-4">
            <h2 className='font-ubuntu text-4xl md:text-6xl text-primary'>
              Your questions, answered.
            </h2>
          </div>
          <div className="space-y-4 col-span-5 mt-5 md:mt-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden font-ubuntu pb-4 tracking-wider text-primary border-b border-white/10"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 transition-all flex items-center justify-between cursor-pointer text-lg"
                  >
                    {faq.question}
                    <Plus
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''
                        }`}
                    />
                  </button>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : '0px',
                    }}
                  >
                    <div className="p-4 text-primary/50">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
