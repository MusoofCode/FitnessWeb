import Reveal from "@/components/motion/Reveal";
import { motion } from "framer-motion";

const stats = [
  { label: "Members", value: 2400, suffix: "+" },
  { label: "Classes / week", value: 45, suffix: "+" },
  { label: "Coaches", value: 18, suffix: "" },
  { label: "Years in Hargeisa", value: 7, suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card/50 p-5 shadow-soft">
                <Counter value={s.value} suffix={s.suffix} />
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  return (
    <motion.div
      className="font-display text-4xl leading-none tracking-wide"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {value.toLocaleString()}
      {suffix}
    </motion.div>
  );
}
