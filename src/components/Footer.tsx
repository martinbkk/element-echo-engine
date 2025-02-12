
import { Youtube, BrandTiktok } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/6e890e3a-2adb-4193-a6e4-0fb2a01d295f.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-myro-cyan transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-myro-cyan transition-colors">
              <BrandTiktok className="w-8 h-8" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 rounded-full border border-white text-white hover:bg-white/10 transition-all">
              Privacy Policy
            </button>
            <button className="px-6 py-2 rounded-full border border-white text-white hover:bg-white/10 transition-all">
              Copyright Policy
            </button>
          </div>
          <p className="text-white">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
