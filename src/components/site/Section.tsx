import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="vignette border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        )}
        <div className="hairline mx-auto mt-10 w-40" />
      </div>
    </header>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>{children}</section>
  );
}
