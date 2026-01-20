import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X, Languages } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import * as React from "react";
import logo from "@/assets/pure-fitness-logo.png";
import { cn } from "@/lib/utils";
import { useColorMode } from "@/hooks/use-color-mode";
import { useTranslation } from "react-i18next";
import i18n, { persistLanguage, type AppLanguage } from "@/i18n";
import { openWhatsAppLead } from "@/lib/whatsapp-leads";

const nav = [
  { key: "nav.home", to: "/" },
  { key: "nav.membership", to: "/membership" },
  { key: "nav.facilities", to: "/facilities" },
  { key: "nav.trainers", to: "/trainers" },
  { key: "nav.schedule", to: "/schedule" },
  { key: "nav.tour", to: "/tour" },
  { key: "nav.contact", to: "/contact" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.5 });
  const { mode, toggle } = useColorMode();
  const { t } = useTranslation();

  const handleJoin = React.useCallback(() => {
    openWhatsAppLead({
      cta: "header_join",
      payload: {
        message: "Please share membership details.",
        sourcePath: window.location.pathname,
      },
    });
  }, []);

  const toggleLanguage = React.useCallback(() => {
    const next: AppLanguage = i18n.language === "so" ? "en" : "so";
    i18n.changeLanguage(next);
    persistLanguage(next);
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <motion.div style={{ scaleX }} className="h-[2px] origin-left bg-primary" aria-hidden="true" />

      <div className="border-b border-border bg-[hsl(var(--glass))] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <NavLink to="/" className="flex items-center gap-3" aria-label="Pure Fitness home">
            <img src={logo} alt="Pure Fitness logo" className="h-9 w-auto" loading="eager" />
            <div className="hidden sm:block">
              <div className="font-display text-lg leading-none tracking-wide">PURE FITNESS</div>
              <div className="text-xs text-muted-foreground">Hargeisa</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeClassName="text-foreground"
              >
                <span className="relative">
                  {t(item.key)}
                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-[.active]:scale-x-100" />
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="glass"
              size="icon"
              onClick={toggle}
              aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
              title={mode === "light" ? "Dark mode" : "White mode"}
            >
              {mode === "light" ? <Moon /> : <Sun />}
            </Button>

            <div className="hidden sm:block">
              <Button variant="hero" size="lg" onClick={handleJoin}>
                Join Today
              </Button>
            </div>

            <Button
              variant="glass"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="lg:hidden"
            >
              <div className="mx-auto max-w-6xl px-4 pb-4">
                <div className="grid gap-2 rounded-xl border border-border bg-card/60 p-2 shadow-soft">
                  {nav.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors",
                        "hover:bg-accent/10 hover:text-foreground",
                      )}
                      activeClassName="bg-accent/10 text-foreground"
                    >
                      {t(item.key)}
                    </NavLink>
                  ))}

                  <Button
                    variant="hero"
                    size="xl"
                    className="mt-1"
                    onClick={() => {
                      setOpen(false);
                      handleJoin();
                    }}
                  >
                    {t("common.joinToday")}
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
