import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, ArrowUpRight } from "lucide-react";
import { openWhatsAppLead } from "@/lib/whatsapp-leads";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Hodan",
    quote: "I joined for fat loss—stayed for the community. Coaches actually care about form and consistency.",
    result: "-8kg in 8 weeks",
  },
  {
    name: "Mahad",
    quote: "Best equipment in town. The strength programming is serious and the sessions keep you locked in.",
    result: "+ strength & endurance",
  },
  {
    name: "Ayaan",
    quote: "Clean space, great vibe, and the classes are energetic. I finally enjoy training again.",
    result: "Confidence back",
  },
];

const reviews = [
  { name: "Google Reviewer", rating: 5, text: "Modern gym, friendly staff, and great atmosphere." },
  { name: "Google Reviewer", rating: 5, text: "Clean facilities and excellent trainers." },
  { name: "Google Reviewer", rating: 5, text: "Great classes and top equipment." },
];

export default function ConversionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <Reveal>
        <h2 className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl">Proof. Results. Community.</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
          Real members, real transformations, and a crew that keeps you accountable—start today and feel the difference this week.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7" delay={0.06}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/55 p-6 shadow-soft backdrop-blur-md">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Member stories</div>
                <div className="font-display text-2xl tracking-wide">Transformation highlights</div>
              </div>
            </div>

            <Carousel opts={{ loop: true }} className="px-10">
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.name}>
                    <div className="rounded-xl border border-border bg-background/20 p-5">
                      <div className="text-sm text-muted-foreground">{t.result}</div>
                      <div className="mt-2 text-lg leading-snug">“{t.quote}”</div>
                      <div className="mt-4 text-sm text-muted-foreground">— {t.name}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious variant="glass" />
              <CarouselNext variant="glass" />
            </Carousel>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.1}>
          <div className="rounded-2xl border border-border bg-card/55 p-6 shadow-soft backdrop-blur-md">
            <div className="text-sm text-muted-foreground">Google reviews</div>
            <div className="mt-1 font-display text-2xl tracking-wide">Rated 5.0</div>

            <div className="mt-4 space-y-3">
              {reviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-border bg-background/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">{r.name}</div>
                    <div className="inline-flex items-center gap-1">
                      {Array.from({ length: r.rating }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 text-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-12" delay={0.12}>
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="rounded-2xl border border-border bg-card/55 p-6 shadow-soft backdrop-blur-md">
                <div className="text-sm text-muted-foreground">Before / After</div>
                <div className="mt-1 font-display text-2xl tracking-wide">See the change</div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <BeforeAfterCard label="Before" />
                  <BeforeAfterCard label="After" accent />
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/55 p-6 shadow-soft backdrop-blur-md">
                <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "var(--gradient-hero)" }} />
                <div className="relative">
                  <div className="font-display text-2xl tracking-wide">Limited spots this week</div>
                  <p className="mt-2 text-sm text-muted-foreground">Message us now and we’ll reserve your first visit + assessment.</p>

                  <Button
                    variant="hero"
                    size="xl"
                    className="mt-5 w-full"
                    onClick={() => openWhatsAppLead({ cta: "conversion_urgency", payload: { sourcePath: window.location.pathname } })}
                  >
                    Join Today <ArrowUpRight />
                  </Button>

                  <div className="mt-3 text-xs text-muted-foreground">Fast reply • No commitment • Starter routine included</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BeforeAfterCard({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background/20",
        accent ? "ring-1 ring-primary/30" : "",
      )}
    >
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: accent ? "var(--gradient-hero)" : "var(--gradient-surface)" }} />
      <div className="relative flex h-full items-end p-4">
        <div className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
