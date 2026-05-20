import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="font-display text-4xl tracking-tight">Michell's Farm</div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
            Six generations of farming on the Saanich Peninsula. Growing real food
            for our neighbours since 1862.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.facebook.com/Michellsfarm" target="_blank" rel="noreferrer"
              className="rounded-full border border-primary-foreground/30 p-2 hover:bg-primary-foreground/10">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/michellsfarm" target="_blank" rel="noreferrer"
              className="rounded-full border border-primary-foreground/30 p-2 hover:bg-primary-foreground/10">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/60">Visit</div>
          <p className="mt-3 text-sm text-primary-foreground/85">
            2451 Island View Road<br />
            Saanichton, BC<br />
            V8M 1W3, Canada
          </p>
          <p className="mt-3 text-sm text-primary-foreground/85">Open 7 days, 9 — 5</p>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/60">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">Our story</Link></li>
            <li><Link to="/products" className="hover:underline">What we grow</Link></li>
            <li><Link to="/recipes" className="hover:underline">Recipes</Link></li>
            <li><Link to="/harvest-rd" className="hover:underline">Harvest Rd grill</Link></li>
            <li><Link to="/nursery" className="hover:underline">Michell Valley Plants</Link></li>
            <li><Link to="/visit" className="hover:underline">Plan a visit</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-primary-foreground/55 lg:px-10">
          <span>© {new Date().getFullYear()} Michell's Farm Market. All rights reserved.</span>
          <span>Grown on the Saanich Peninsula · Vancouver Island</span>
        </div>
      </div>
    </footer>
  );
}
