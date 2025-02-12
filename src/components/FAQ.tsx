
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "What is Fruten Fraten?",
    answer: "Fruten Fraten is a mindset and movement that defies traditional definition. Born in a Barcelona coffee shop, it represents freedom of expression, authenticity, and embracing chaos in the most positive way. It's about living life on your own terms and being part of a community that celebrates individuality."
  },
  {
    question: "How can I participate?",
    answer: "Simply be yourself! If you believe in doing your own thing and not caring what others think, you're already part of Fruten Fraten. Engage with our community and embrace the spirit of freedom and fun."
  },
  {
    question: "What are the benefits?",
    answer: "Being part of Fruten Fraten means joining a movement that celebrates individuality, creativity, and authentic self-expression. You'll be part of a community that supports being your true self."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="grid gap-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphic"
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-white/80">{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
