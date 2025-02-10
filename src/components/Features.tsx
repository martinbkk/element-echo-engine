
import { motion } from "framer-motion";

const features = [
  {
    title: "Digital Pet NFTs",
    description: "Unique, collectible digital companions with proof of ownership on the blockchain",
    icon: "🐾",
  },
  {
    title: "Interactive App",
    description: "Engage with your MYRO through our state-of-the-art mobile application",
    icon: "📱",
  },
  {
    title: "MYRO Rewards",
    description: "Earn rewards for taking care of and interacting with your digital pet",
    icon: "🏆",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphic p-6 hover:border-myro-cyan/50 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
