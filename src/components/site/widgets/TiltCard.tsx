import * as React from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function TiltCard({ children, className }: Props) {
  const reduce = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotX = (py - 0.5) * -10;
        const rotY = (px - 0.5) * 12;
        el.style.setProperty("--rx", `${rotX.toFixed(2)}deg`);
        el.style.setProperty("--ry", `${rotY.toFixed(2)}deg`);
      });
    };

    const onLeave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={cn(
        "[transform-style:preserve-3d] transition-transform duration-200 will-change-transform",
        "hover:[transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translateY(-2px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
