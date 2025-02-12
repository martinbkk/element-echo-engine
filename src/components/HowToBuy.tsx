
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How to Buy
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {["Jupiter", "Mayan"].map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphic p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Buy using {platform}</h3>
              <div className="space-y-4">
                <div className="p-4 border border-white/20 rounded-lg">
                  <p className="text-white/80">Connect Wallet</p>
                </div>
                <div className="p-4 border border-white/20 rounded-lg">
                  <p className="text-white/80">Select Token Pair</p>
                </div>
                <div className="p-4 border border-white/20 rounded-lg">
                  <p className="text-white/80">Complete Swap</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
