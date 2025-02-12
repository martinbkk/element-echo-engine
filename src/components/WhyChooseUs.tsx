
import { motion } from "framer-motion";
import { Users, Shield, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strong Community",
      description: "Join our growing community of enthusiasts",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Development Transparency",
      description: "Open and honest communication about our progress",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation & Entertainment",
      description: "Combining fun with cutting-edge technology",
    },
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
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphic p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-myro-cyan">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
