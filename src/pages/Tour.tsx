import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import TourSection from "@/components/site/sections/TourSection";

const Tour = () => {
  return (
    <SiteLayout>
      <PageHero
        kicker="Virtual Tour"
        title="See the energy before you arrive."
        subtitle="A cinematic preview of our spaces. Hit play, then book a visit or join online."
      />
      <TourSection />
    </SiteLayout>
  );
};

export default Tour;
