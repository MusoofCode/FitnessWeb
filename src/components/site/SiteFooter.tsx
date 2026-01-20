import { NavLink } from "@/components/NavLink";
import logo from "@/assets/pure-fitness-logo.png";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Pure Fitness logo" className="h-9 w-auto" loading="lazy" />
            <div>
              <div className="font-display text-lg leading-none tracking-wide">PURE FITNESS</div>
              <div className="text-xs text-muted-foreground">Hargeisa</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Premium training, modern equipment, and a community that shows up. Train hard, live strong.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <NavLink to="/membership" className="text-muted-foreground hover:text-foreground">
            Membership
          </NavLink>
          <NavLink to="/schedule" className="text-muted-foreground hover:text-foreground">
            Schedule
          </NavLink>
          <NavLink to="/facilities" className="text-muted-foreground hover:text-foreground">
            Facilities
          </NavLink>
          <NavLink to="/trainers" className="text-muted-foreground hover:text-foreground">
            Trainers
          </NavLink>
          <NavLink to="/tour" className="text-muted-foreground hover:text-foreground">
            Virtual Tour
          </NavLink>
          <NavLink to="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </NavLink>
        </div>

        <div className="space-y-2 text-sm">
          <div className="text-muted-foreground">Location</div>
          <div>Hargeisa, Somaliland</div>
          <div className="text-muted-foreground">Hours</div>
          <div>Daily • 6:00 AM – 10:00 PM</div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Pure Fitness Gym Hargeisa. All rights reserved.</div>
          <div>Built for speed, accessibility, and conversion.</div>
        </div>
      </div>
    </footer>
  );
}
