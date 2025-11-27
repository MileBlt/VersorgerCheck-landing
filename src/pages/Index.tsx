import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValueProposition />
      <FAQ />
      <Footer />
      <MobileCTA />
    </main>
  );
};

export default Index;
