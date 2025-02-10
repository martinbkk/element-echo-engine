
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const Tokenomics = () => {
  const tokenAddress = "HhJpBhRRn4g56VsyLuT8...";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
  };

  return (
    <section id="tokenomics" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Tokenomics
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphic p-8 space-y-8"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-white/80 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/80 rounded-full"></div>
              </div>
              <div className="absolute -top-2 -right-2 text-xl">×</div>
              <div className="absolute -top-1 right-4 text-xl">×</div>
              <div className="absolute top-1 right-6 text-xl">×</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphic p-6 rounded-2xl border border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Symbol</span>
                <span className="text-myro-cyan">$MYRO</span>
              </div>
            </div>

            <div className="glassmorphic p-6 rounded-2xl border border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Tax</span>
                <span className="text-myro-cyan">0/0</span>
              </div>
            </div>

            <div className="glassmorphic p-6 rounded-2xl border border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">LP</span>
                <span className="text-myro-cyan">Burned Forever</span>
              </div>
            </div>
          </div>

          <div className="glassmorphic p-6 rounded-2xl border border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Token Address</span>
              <div className="flex items-center gap-2">
                <span className="text-myro-cyan text-sm md:text-base">{tokenAddress}</span>
                <button 
                  onClick={copyToClipboard}
                  className="hover:text-myro-cyan transition-colors"
                >
                  <Copy size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
