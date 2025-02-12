
import { motion } from "framer-motion";

const Merchandise = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Merchandise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glassmorphic p-8 rounded-2xl text-center"
          >
            <img
              src="/lovable-uploads/07a89688-88d1-4661-b487-0fbbcdc63ca0.png"
              alt="Plush Toy"
              className="w-48 h-48 mx-auto mb-6 object-contain"
            />
            <h3 className="text-2xl font-bold mb-4">Limited Edition Plush Toys</h3>
            <p className="text-white/80 mb-6">Get your hands on our adorable mascot!</p>
            <button className="px-8 py-3 rounded-full bg-myro-cyan text-black font-semibold hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphic p-8 rounded-2xl text-center"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-white/20 rounded-lg">
                <p className="text-white/80">T-Shirts</p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <p className="text-white/80">Hoodies</p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <p className="text-white/80">Stickers</p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <p className="text-white/80">Accessories</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
