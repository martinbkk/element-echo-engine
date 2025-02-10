
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/07a89688-88d1-4661-b487-0fbbcdc63ca0.jpg" alt="Fruten Fraten Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-white">Fruten Fraten</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button className="px-6 py-2 rounded-full bg-myro-cyan text-black font-semibold hover:bg-opacity-90 transition-all">
            Connect Wallet
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-myro-dark/95 backdrop-blur-lg p-6 md:hidden">
            <NavLinks />
            <button className="w-full mt-4 px-6 py-2 rounded-full bg-myro-cyan text-black font-semibold hover:bg-opacity-90 transition-all">
              Connect Wallet
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
    <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
    <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
    <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors">Tokenomics</a>
    <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
  </div>
);

export default Header;
