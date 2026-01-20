import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import TiltCard from "@/components/site/widgets/TiltCard";
import { benefits } from "@/components/site/content";

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <KineticHeading as="h2" className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl" lines={["Built like a global brand."]} />
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Minimal, powerful, and relentlessly focused on results—every detail is designed to keep members moving.
          </p>
        </Reveal>

        <div className="md:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.05}>
                  <TiltCard className="h-full">
                    <div className="h-full rounded-2xl border border-border bg-card/60 p-5 shadow-soft backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/20">
                          <Icon className="text-primary" />
                        </div>
                        <div className="font-medium">{b.title}</div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
