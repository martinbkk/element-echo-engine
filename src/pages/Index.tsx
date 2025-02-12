
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Exchange from "../components/Exchange";
import About from "../components/About";
import HowToBuy from "../components/HowToBuy";
import Products from "../components/Products";
import Merchandise from "../components/Merchandise";
import Tokenomics from "../components/Tokenomics";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-myro-dark text-white">
      <Header />
      <main>
        <Hero />
        <Exchange />
        <About />
        <HowToBuy />
        <Products />
        <Merchandise />
        <Tokenomics />
        <WhyChooseUs />
        <FAQ />
      </main>
    </div>
  );
};

export default Index;
