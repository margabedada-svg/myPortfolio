import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl">Marga.Dev</p>
          <p className="mt-1 text-xs tracking-wide text-muted-foreground">
            Crafting refined digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/skills" className="hover:text-primary">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-[11px] tracking-widest uppercase text-muted-foreground">
        © {new Date().getFullYear()} Marga.Dev — All rights reserved
      </div>
    </footer>
  );
}
