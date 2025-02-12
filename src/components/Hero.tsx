
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-myro-cyan to-myro-purple bg-clip-text text-transparent">
              FRUTEN FRATEN
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            The next generation digital companion for crypto enthusiasts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-full bg-myro-cyan text-black font-semibold hover:bg-opacity-90 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border border-myro-cyan text-white font-semibold hover:bg-myro-cyan/10 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-square"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src="/lovable-uploads/Roberto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
