
import { motion } from "framer-motion";

const Exchange = () => {
  const exchanges = [
    { name: "Gate.io", link: "#" },
    { name: "Bitget", link: "#" },
    { name: "Binance", link: "#" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Available on Top Exchanges
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exchanges.map((exchange, index) => (
            <motion.a
              key={exchange.name}
              href={exchange.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphic p-8 rounded-2xl text-center hover:border-myro-cyan/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-myro-cyan">{exchange.name}</h3>
              <p className="mt-2 text-white/80">Trade Now</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exchange;
