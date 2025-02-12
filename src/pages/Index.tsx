
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tokenomics from "../components/Tokenomics";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-myro-dark text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Tokenomics />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
