import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(false); // Start unmuted

  const toggleSound = () => {
    const video = document.querySelector('video');
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  };

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
            <span className="bg-gradient-to-r from-myro-cyan to-myro-purple bg-clip-text text-transparent hover:scale-115 inline-block transition-transform duration-300">
              FRUTEN FRATEN
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            No Rules, Just Vibes! The Wild Side of Life. Own It.
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
          <button
            onClick={toggleSound}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all text-white"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
          <video
            autoPlay
            loop
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
