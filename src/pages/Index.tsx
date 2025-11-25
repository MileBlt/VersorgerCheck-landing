import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ValueProposition />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
