import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import TiltCard from "@/components/site/widgets/TiltCard";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buildContactJoinMessage, openWhatsApp } from "@/lib/whatsapp";

type PlanCadence = "monthly" | "yearly";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 29, yearly: 299 },
    highlight: false,
    perks: ["Gym access", "Basic assessment", "Locker access"],
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 49, yearly: 499 },
    highlight: true,
    perks: ["Everything in Starter", "Unlimited classes", "Nutrition guidance"],
  },
  {
    id: "elite",
    name: "Elite",
    price: { monthly: 79, yearly: 799 },
    highlight: false,
    perks: ["Everything in Pro", "2 PT sessions / month", "Recovery add-ons"],
  },
] as const;

export default function PricingSection() {
  const [cadence, setCadence] = React.useState<PlanCadence>("monthly");

  const handleChoose = React.useCallback(
    (planName: string) => {
      openWhatsApp(
        buildContactJoinMessage({
          plan: planName,
          message: `I want to join Pure Fitness. I'm interested in the ${planName} plan (${cadence}).`,
          sourcePath: window.location.pathname,
        }),
      );
    },
    [cadence],
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <KineticHeading
            as="h2"
            className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl"
            lines={["Memberships that move fast."]}
          />
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Tap a plan to feel the motion. Switch cadence for monthly or yearly savings.
          </p>
        </Reveal>

        <div className="rounded-full border border-border bg-card/50 p-1 shadow-soft">
          <Toggle label="Monthly" active={cadence === "monthly"} onClick={() => setCadence("monthly")} />
          <Toggle label="Yearly" active={cadence === "yearly"} onClick={() => setCadence("yearly")} />
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <TiltCard>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-soft backdrop-blur-md">
                {p.highlight ? <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "var(--gradient-hero)" }} /> : null}

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display text-3xl tracking-wide">{p.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Best for {p.name === "Elite" ? "serious athletes" : p.name === "Pro" ? "consistent builders" : "getting started"}
                      </div>
                    </div>
                    {p.highlight ? (
                      <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background/20 px-3 py-1 text-xs">
                        <Sparkles className="text-primary" /> Popular
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <div className="text-sm text-muted-foreground">From</div>
                    <div className="mt-1 flex items-end gap-2">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                          key={`${p.id}-${cadence}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                          className="font-display text-5xl leading-none tracking-wide"
                        >
                          ${p.price[cadence]}
                        </motion.div>
                      </AnimatePresence>
                      <div className="pb-1 text-sm text-muted-foreground">/{cadence === "monthly" ? "mo" : "yr"}</div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    {p.perks.map((perk: string) => (
                      <div key={perk} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 text-primary" />
                        <span className="text-muted-foreground">{perk}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Button variant={p.highlight ? "hero" : "glow"} size="xl" className="w-full" onClick={() => handleChoose(p.name)}>
                      Choose {p.name}
                    </Button>
                    <div className="mt-2 text-center text-xs text-muted-foreground">No long contracts. Cancel anytime.</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Toggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" +
        (active ? " text-foreground" : " text-muted-foreground hover:text-foreground")
      }
    >
      {active ? (
        <motion.span
          layoutId="pricing-toggle"
          className="absolute inset-0 rounded-full bg-accent/10"
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
        />
      ) : null}
      <span className="relative">{label}</span>
    </button>
  );
}
