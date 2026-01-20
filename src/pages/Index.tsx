import SiteLayout from "@/components/site/SiteLayout";
import HomeHero from "@/components/site/sections/HomeHero";
import BenefitsSection from "@/components/site/sections/BenefitsSection";
import StatsSection from "@/components/site/sections/StatsSection";
import PricingSection from "@/components/site/sections/PricingSection";
import FacilitiesSection from "@/components/site/sections/FacilitiesSection";
import TrainersSection from "@/components/site/sections/TrainersSection";
import TourSection from "@/components/site/sections/TourSection";
import ContactSection from "@/components/site/sections/ContactSection";

const Index = () => {
  return (
    <SiteLayout>
      <HomeHero />
      <BenefitsSection />
      <StatsSection />
      <PricingSection />
      <FacilitiesSection />
      <TrainersSection />
      <TourSection />
      <ContactSection />
    </SiteLayout>
  );
};

export default Index;

