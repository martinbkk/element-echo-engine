
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Tokenomics
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphic p-8"
        >
          <img
            src="/lovable-uploads/07a89688-88d1-4661-b487-0fbbcdc63ca0.png"
            alt="Tokenomics Distribution"
            className="w-full max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
