import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import ContactSection from "@/components/site/sections/ContactSection";

const Contact = () => {
  return (
    <SiteLayout>
      <PageHero
        kicker="Contact & Join"
        title="Start today. We’ll handle the rest."
        subtitle="Message us, visit the gym, or jump straight into membership—fast, friendly, and focused."
      />
      <ContactSection />
    </SiteLayout>
  );
};

export default Contact;
