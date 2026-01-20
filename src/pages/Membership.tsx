import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import PricingSection from "@/components/site/sections/PricingSection";

const Membership = () => {
  return (
    <SiteLayout>
      <PageHero
        kicker="Membership & Pricing"
        title="Pick your plan. Enter your era."
        subtitle="Flexible memberships designed for busy schedules and serious goals—monthly or yearly with perks."
      />
      <PricingSection />
    </SiteLayout>
  );
};

export default Membership;
