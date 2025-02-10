
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What is Fruten Raten?",
    answer: "Fruten Raten is a next-generation digital platform that combines blockchain technology with innovative features to create a unique crypto ecosystem."
  },
  {
    question: "How can I participate?",
    answer: "You can participate by connecting your wallet and engaging with our platform's various features and opportunities."
  },
  {
    question: "What are the benefits?",
    answer: "Members can enjoy various benefits including rewards, exclusive access to features, and participation in our growing community."
  }
];

const FAQ = () => {
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
        <div className="grid gap-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphic p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-white/80">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
