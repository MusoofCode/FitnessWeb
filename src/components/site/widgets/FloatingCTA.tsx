import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { buildContactJoinMessage, openWhatsApp } from "@/lib/whatsapp";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [show, setShow] = React.useState(false);

  const handleJoin = React.useCallback(() => {
    openWhatsApp(
      buildContactJoinMessage({
        message: "I want to join Pure Fitness. Please share membership details.",
        sourcePath: window.location.pathname,
      }),
    );
  }, []);

  React.useEffect(() => {
    return scrollY.on("change", (v) => setShow(v > 420));
  }, [scrollY]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button variant="hero" size="xl" className="shadow-elev" onClick={handleJoin}>
            Join Today <ArrowUpRight />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
