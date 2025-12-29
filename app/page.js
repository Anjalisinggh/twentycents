import HeroSection from "@/components/sections/HeroSection";

import FeaturesSection from "@/components/sections/FeaturesSection";
import ShortsSection from "@/components/sections/ShortsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProcessSection from "@/components/sections/ProcessSection";
import Footer from "@/components/layout/Footer";
import ClientsSection from "@/components/sections/ClientsSection";
export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
   
      <FeaturesSection />
      <ShortsSection />
      <ClientsSection />
      <ServicesSection />
      <PartnersSection />
      <ProcessSection />
      <Footer />
    </main>
  );
}
