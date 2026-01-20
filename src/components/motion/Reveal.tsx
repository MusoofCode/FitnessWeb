import * as React from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

export default function Reveal({ children, className, delay = 0, variant = "up" }: Props) {
  const reduce = usePrefersReducedMotion();

  const variants: Record<RevealVariant, any> = {
    up: { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -18 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 18 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -18 }, show: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1 } },
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}

