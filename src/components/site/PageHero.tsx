import KineticHeading from "@/components/motion/KineticHeading";
import Reveal from "@/components/motion/Reveal";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ kicker, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <Reveal>
          {kicker ? (
            <div className="inline-flex items-center rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground shadow-soft">
              {kicker}
            </div>
          ) : null}
          <KineticHeading as="h1" className="mt-4 font-display text-5xl leading-[0.95] tracking-wide md:text-7xl" lines={[title]} />
          {subtitle ? <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
