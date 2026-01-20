import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import ScheduleSection from "@/components/site/sections/ScheduleSection";

const Schedule = () => {
  return (
    <SiteLayout>
      <PageHero
        kicker="Class Schedule"
        title="Your week, engineered."
        subtitle="Filter by class type and intensity. Tap any session for details and a fast join flow."
      />
      <ScheduleSection />
    </SiteLayout>
  );
};

export default Schedule;
