import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  lines: string[];
  delay?: number;
};

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const char: Variants = {
  hidden: { opacity: 0, y: 14, rotate: -2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function KineticHeading({ as = "h1", className, lines, delay = 0 }: Props) {
  const reduce = usePrefersReducedMotion();
  const Comp = as as any;

  if (reduce) {
    return <Comp className={className}>{lines.map((l, i) => (i ? <span key={i} className="block">{l}</span> : l))}</Comp>;
  }

  return (
    <Comp className={cn(className)}>
      {lines.map((line, idx) => (
        <motion.span
          key={idx}
          className="block"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: delay + idx * 0.05 }}
        >
          {Array.from(line).map((c, i) => (
            <motion.span key={i} variants={char} className="inline-block will-change-transform">
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </Comp>
  );
}
