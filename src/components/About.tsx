
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Fruten Fraten
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphic p-8 text-center md:text-left"
        >
          <p className="text-lg text-white/80 mb-6">
            Fruten Fraten is an innovative crypto project that combines the excitement of digital collectibles with real utility. Our platform enables users to participate in a unique ecosystem where they can collect, trade, and earn rewards through various interactions.
          </p>
          <p className="text-lg text-white/80">
            Built on blockchain technology, Fruten Fraten provides a secure and transparent environment for our community to engage with digital assets while enjoying the benefits of decentralized finance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
