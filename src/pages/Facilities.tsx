import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import FacilitiesSection from "@/components/site/sections/FacilitiesSection";

const Facilities = () => {
  return (
    <SiteLayout>
      <PageHero
        kicker="Facilities"
        title="Spaces built for performance."
        subtitle="Cardio, strength, studio, and recovery zones—premium equipment and a clean, high-energy atmosphere."
      />
      <FacilitiesSection showHeader={false} />
    </SiteLayout>
  );
};

export default Facilities;
