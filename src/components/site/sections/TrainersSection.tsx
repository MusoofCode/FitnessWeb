import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import TiltCard from "@/components/site/widgets/TiltCard";
import { trainers as trainersData } from "@/components/site/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  showHeader?: boolean;
};

const filters = ["All", "Power", "Hypertrophy", "Speed", "Agility", "Mobility", "Posture", "Fat Loss", "Habits"] as const;

type Filter = (typeof filters)[number];

export default function TrainersSection({ showHeader = true }: Props) {
  const [filter, setFilter] = React.useState<Filter>("All");

  const list = trainersData.filter((t) => filter === "All" || t.focus.includes(filter));

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      {showHeader ? (
        <Reveal>
          <KineticHeading as="h2" className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl" lines={["Meet the trainers"]} />
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Filter by expertise. Hover cards tilt in 3D—micro-interactions that feel premium.
          </p>
        </Reveal>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button key={f} variant={f === filter ? "hero" : "glass"} size="lg" onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {list.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <TiltCard>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-soft">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ backgroundImage: "var(--gradient-hero)" }}
                />
                <div className="relative">
                  <div className="font-display text-3xl tracking-wide">{t.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{t.role}</div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.focus.map((f) => (
                      <span key={f} className="rounded-full border border-border bg-background/20 px-2 py-1 text-[11px] text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3">
                    <Skill label="Strength" value={t.score.strength} />
                    <Skill label="Mobility" value={t.score.mobility} />
                    <Skill label="Conditioning" value={t.score.conditioning} />
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

function Skill({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-secondary">
        <div className={cn("h-full rounded-full bg-primary", value > 85 ? "w-5/6" : value > 70 ? "w-4/5" : value > 60 ? "w-3/5" : "w-2/5")} />
      </div>
    </div>
  );
}
