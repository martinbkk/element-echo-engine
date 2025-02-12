
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "Fruten Fraten Buy Bot",
      description: "Automated Purchase System for efficient trading",
    },
    {
      title: "Social-Fi Mobile App",
      description: "Connect with the community and earn rewards",
    },
    {
      title: "Future Use-Cases",
      description: "Exciting developments on our roadmap",
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
          Our Products
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphic p-8 rounded-2xl hover:border-myro-cyan/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-4">{product.title}</h3>
              <p className="text-white/80">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
