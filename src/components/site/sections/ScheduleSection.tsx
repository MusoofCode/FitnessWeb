import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import { schedule as scheduleData } from "@/components/site/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const types = ["All", "HIIT", "Strength", "Mobility", "Cardio"] as const;

type TypeFilter = (typeof types)[number];

export default function ScheduleSection() {
  const [type, setType] = React.useState<TypeFilter>("All");

  const list = scheduleData.filter((c) => type === "All" || c.type === type);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <Reveal>
        <h2 className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl">Class schedule</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
          A fast filter experience with smooth transitions. Next step: calendar view + class detail modals.
        </p>
      </Reveal>

      <div className="sticky top-16 z-10 mt-8 -mx-4 border-y border-border bg-[hsl(var(--glass))] px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
          {types.map((t) => (
            <Button key={t} variant={t === type ? "hero" : "glass"} size="lg" onClick={() => setType(t)}>
              {t}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {list.map((c, i) => (
          <Reveal key={`${c.day}-${c.time}-${c.name}`} delay={i * 0.04}>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card/50 p-5 shadow-soft md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/20">
                  <div className="font-display text-xl tracking-wide">{c.day}</div>
                </div>
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {c.time} • {c.type}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 md:justify-end">
                <span
                  className={cn(
                    "rounded-full border border-border bg-background/20 px-3 py-1 text-xs text-muted-foreground",
                    c.intensity === "High" ? "border-primary/40" : c.intensity === "Low" ? "border-accent/40" : "",
                  )}
                >
                  {c.intensity} intensity
                </span>
                <Button variant="glow" size="lg">Details</Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
