import * as React from "react";
import Reveal from "@/components/motion/Reveal";
import KineticHeading from "@/components/motion/KineticHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Send } from "lucide-react";
import { buildContactJoinMessage, openWhatsApp } from "@/lib/whatsapp";

const MAPS_URL = "https://maps.app.goo.gl/ptmwFAwEK2NVKQ8e8";
const MAPS_IFRAME_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.88743173902!2d44.0589138!3d9.562561299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf000b075dfb%3A0xebbbec22303835be!2sPure%20Fitness!5e1!3m2!1sen!2sso!4v1768803129987!5m2!1sen!2sso";

export default function ContactSection() {
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [goal, setGoal] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSend = React.useCallback(() => {
    openWhatsApp(
      buildContactJoinMessage({
        fullName,
        phone,
        goal,
        message,
        sourcePath: window.location.pathname,
      }),
    );
  }, [fullName, phone, goal, message]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <KineticHeading as="h2" className="font-display text-4xl leading-[0.95] tracking-wide md:text-5xl" lines={["Contact & join"]} />
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Tell us your goal and schedule—we’ll recommend a plan and a starter routine.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-card/55 p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/20">
                <MapPin className="text-primary" />
              </div>
              <div>
                <div className="font-medium">Pure Fitness Gym Hargeisa</div>
                <div className="mt-1 text-sm text-muted-foreground">Hargeisa, Somaliland</div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-xs text-muted-foreground underline-offset-4 hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background/20">
              <AspectRatio ratio={16 / 10}>
                <iframe
                  title="Pure Fitness Gym location"
                  src={MAPS_IFRAME_SRC}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </AspectRatio>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.08}>
          <form
            className="rounded-2xl border border-border bg-card/55 p-6 shadow-soft backdrop-blur-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Full name</label>
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Phone / WhatsApp</label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+252 ..." />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm text-muted-foreground">Goal</label>
              <Input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Fat loss, strength, performance..." />
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm text-muted-foreground">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us your availability and what you want to achieve."
                className="min-h-28"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-muted-foreground">By submitting, you agree to be contacted about membership.</div>
              <Button type="submit" variant="hero" size="xl">
                Send <Send />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
