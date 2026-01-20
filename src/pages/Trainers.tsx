import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import TrainersSection from "@/components/site/sections/TrainersSection";

const Trainers = () => {
  return (
    <SiteLayout>
      <PageHero
        kicker="Coaches"
        title="Elite trainers. Real results."
        subtitle="Meet specialists in strength, conditioning, mobility, and transformation—built around your goal."
      />
      <TrainersSection showHeader={false} />
    </SiteLayout>
  );
};

export default Trainers;
