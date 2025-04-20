import { Plus } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'What is a component in React?',
    answer: 'A component is a reusable piece of UI. It can be a function or a class.',
  },
  {
    question: 'What is state in React?',
    answer: 'State is a built-in object that stores property values that belong to a component.',
  },
  {
    question: 'What is a prop in React?',
    answer: 'Props are inputs to components. They are passed down from parent to child components.',
  },
  {
    question: 'How do you handle events in React?',
    answer: 'Events in React are handled using camelCase syntax and passing a function as the event handler.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-9">
          <div className="col-span-4">
            <h2 className='font-ubuntu text-6xl text-primary'>
              Your questions, answered.
            </h2>
          </div>
          <div className="space-y-4 col-span-5">
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
