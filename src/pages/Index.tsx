import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemasSection from "@/components/ProblemasSection";
import CatalogoSection from "@/components/CatalogoSection";
import DiferencialesSection from "@/components/DiferencialesSection";
import GaleriaSection from "@/components/GaleriaSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import UbicacionSection from "@/components/UbicacionSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemasSection />
      <CatalogoSection />
      <DiferencialesSection />
      <GaleriaSection />
      <TestimoniosSection />
      <UbicacionSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
