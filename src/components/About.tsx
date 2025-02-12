
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
          About <span className="bg-gradient-to-r from-myro-cyan to-myro-purple bg-clip-text text-transparent">Fruten Fraten</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative glassmorphic p-8 text-center md:text-left space-y-6 border border-white/10 bg-opacity-50"
          style={{
            backgroundImage: 'url("/lovable-uploads/6e890e3a-2adb-4193-a6e4-0fb2a01d295f.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="relative z-10 font-sans leading-relaxed">
            <p className="text-lg text-white/80 tracking-wide">
              What is Fruten Fraten? Well, that's the beauty of it, it doesn't have one clear meaning, and that's exactly the point. It's a mindset, a movement, a little bit of chaos, and a whole lot of fun.
            </p>
            <p className="text-lg text-white/80 tracking-wide">
              Born in a smoky coffee shop in Barcelona, Fruten Fraten started as an inside joke and somehow turned into a way of life. It's about doing your thing, owning your energy, and not giving a damn what anyone thinks. If you believe in Fruten Fraten, you're already part of it. If you don't, well… you'll get there.
            </p>
            <p className="text-lg text-white/80 tracking-wide">
              So welcome, stay weird, stay wild and most importantly, stay Fruten Fraten!
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-85 rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
