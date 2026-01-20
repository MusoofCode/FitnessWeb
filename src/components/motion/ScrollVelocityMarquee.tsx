import * as React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Props = {
  text: string;
  className?: string;
  /** Base speed in px/sec. Negative reverses direction. */
  baseVelocity?: number;
};

/**
 * Scroll-reactive marquee band.
 * - Uses scroll velocity (spring-smoothed) to modulate horizontal movement.
 * - Falls back to static text when prefers-reduced-motion is enabled.
 */
export default function ScrollVelocityMarquee({ text, className, baseVelocity = -45 }: Props) {
  const reduce = usePrefersReducedMotion();

  // SSR/initial render safety: keep it simple.
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 180, damping: 45, mass: 0.6 });
  const velocityFactor = useTransform(smoothVelocity, [-1200, 0, 1200], [-2, 0, 2]);

  const directionFactor = React.useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;

    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;

    const moveBy = directionFactor.current * baseVelocity * (delta / 1000) * (1 + Math.abs(vf));
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${v % 100}%`);

  if (reduce) {
    return (
      <div className={cn("overflow-hidden border-y border-border bg-card/30", className)}>
        <div className="mx-auto max-w-6xl px-4 py-2 text-xs text-muted-foreground">{text}</div>
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden border-y border-border bg-card/30", className)} aria-hidden="true">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <MarqueeRow text={text} />
        <MarqueeRow text={text} />
        <MarqueeRow text={text} />
      </motion.div>
    </div>
  );
}

function MarqueeRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-6 px-6 py-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="text-xs tracking-[0.22em] text-muted-foreground">
          {text}
        </span>
      ))}
    </div>
  );
}
