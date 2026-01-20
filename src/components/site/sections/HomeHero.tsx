import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import HeroSpotlight from "@/components/site/HeroSpotlight";
import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import heroImage from "@/assets/pure-fitness-hero.jpg";
import logo from "@/assets/pure-fitness-logo.png";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildContactJoinMessage, openWhatsApp } from "@/lib/whatsapp";

export default function HomeHero() {
  const handleJoin = () => {
    openWhatsApp(
      buildContactJoinMessage({
        message: "I want to join Pure Fitness. Please share membership details.",
        sourcePath: window.location.pathname,
      }),
    );
  };

  return (
    <HeroSpotlight className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "var(--gradient-hero)" }} aria-hidden="true" />

      <section className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                Premium training • Modern equipment • Hargeisa
              </div>

              <KineticHeading
                as="h1"
                className="mt-4 font-display text-6xl leading-[0.88] tracking-wide md:text-8xl"
                lines={["Hargeisa’s Premier Fitness Destination —", "Train Hard, Live Strong."]}
              />

              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                A high-energy space for athletes, beginners, and community members—designed to keep you consistent and progressing.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="xl" onClick={handleJoin}>
                  Join Today <ArrowRight />
                </Button>
                <Button asChild variant="glass" size="xl">
                  <NavLink to="/tour">
                    Take a Virtual Tour <PlayCircle />
                  </NavLink>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal variant="scale" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/55 p-5 shadow-soft backdrop-blur-md">
                <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "var(--gradient-hero)" }} />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Pure Fitness logo" className="h-10 w-auto" loading="lazy" />
                    <div>
                      <div className="font-display text-xl tracking-wide">PURE FITNESS</div>
                      <div className="text-xs text-muted-foreground">Hargeisa</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Stat label="Members" value="2,400+" />
                    <Stat label="Weekly classes" value="45+" />
                    <Stat label="Years" value="7" />
                  </div>

                  <motion.div
                    className="rounded-xl border border-border bg-background/20 p-4"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <div className="text-sm">Today’s vibe</div>
                    <div className="mt-1 text-xs text-muted-foreground">Strength Lab • Mobility Flow • HIIT Burn</div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-2/3 rounded-full bg-primary" />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">Peak hours in ~45 min</div>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </HeroSpotlight>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/20 p-3">
      <div className="font-display text-2xl leading-none tracking-wide">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
