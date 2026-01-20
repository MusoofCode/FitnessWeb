import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import TiltCard from "@/components/site/widgets/TiltCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = ["Cardio", "Power", "Studio", "Wellness"] as const;

type Tab = (typeof tabs)[number];

type Props = {
  showHeader?: boolean;
};

export default function FacilitiesSection({ showHeader = true }: Props) {
  const [tab, setTab] = React.useState<Tab>("Cardio");

  const content: Record<Tab, { title: string; bullets: string[] }> = {
    Cardio: {
      title: "Cardio zone",
      bullets: ["Treadmills & bikes", "Rowers", "Conditioning circuits"],
    },
    Power: {
      title: "Power floor",
      bullets: ["Barbells & racks", "Dumbbells", "Machines"],
    },
    Studio: {
      title: "Studio",
      bullets: ["Group classes", "Mobility", "HIIT & sculpt"],
    },
    Wellness: {
      title: "Wellness",
      bullets: ["Recovery corners", "Stretch zones", "Calm cooldown"],
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      {showHeader ? (
        <Reveal>
          <KineticHeading as="h2" className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl" lines={["Facilities & equipment"]} />
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Tap through spaces. Each zone is designed to feel clean, premium, and relentlessly functional.
          </p>
        </Reveal>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <Button key={t} variant={t === tab ? "hero" : "glass"} size="lg" onClick={() => setTab(t)}>
            {t}
          </Button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Reveal>
          <TiltCard>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-soft">
              <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "var(--gradient-hero)" }} />
              <div className="relative">
                <div className="text-sm text-muted-foreground">Selected</div>
                <div className="mt-2 font-display text-4xl tracking-wide">{content[tab].title}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {content[tab].bullets.map((b) => (
                    <li key={b} className="text-muted-foreground">
                      • {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={cn(
                      "h-full rounded-full bg-primary",
                      tab === "Wellness" ? "w-2/5" : tab === "Studio" ? "w-3/5" : tab === "Cardio" ? "w-4/5" : "w-5/6",
                    )}
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Zone density • live</div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-soft">
              <div className="font-medium">Interactive gallery (v1)</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Next step: replace with real gym photos and a parallax hover gallery with filters for each zone.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-soft">
              <div className="font-medium">Scroll transitions</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We’ll add smooth background transitions per zone as you scroll—cinematic and conversion-focused.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
