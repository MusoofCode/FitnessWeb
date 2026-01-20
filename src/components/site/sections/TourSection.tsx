import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TOUR_VIDEO_ID = "p-AplMbDKe4";
const TOUR_EMBED = `https://www.youtube.com/embed/${TOUR_VIDEO_ID}?rel=0`;

export default function TourSection() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <div className="grid gap-6 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <KineticHeading as="h2" className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl" lines={["Virtual tour & video"]} />
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            A fast, cinematic look at our spaces—hit play, then message us on WhatsApp to book your first visit.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl">
                  Watch tour <Play />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl overflow-hidden p-0">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>Pure Fitness — Virtual Tour</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`${TOUR_EMBED}&autoplay=1`}
                    title="Pure Fitness Gym Hargeisa virtual tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.08}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/55 shadow-soft">
            <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "var(--gradient-hero)" }} />
            <div className="relative aspect-video p-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="grid h-full w-full place-items-center overflow-hidden rounded-xl border border-border bg-background/20"
                type="button"
                onClick={() => setOpen(true)}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground">
                  <Play className="text-primary" /> Play video
                </span>
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
