import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValueProposition />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
