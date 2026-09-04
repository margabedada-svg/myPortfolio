import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/about.png";
import texture from "@/assets/texture.jpg";
import { Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marga | Developer" },
      {
        name: "description",
        content:
          "Portfolio of a designer-developer crafting refined, high-end digital experiences for premium brands.",
      },
      { property: "og:title", content: "Aurelia Studio — Luxury Design & Development Portfolio" },
      {
        property: "og:description",
        content: "Portfolio of a designer-developer crafting refined, high-end digital experiences for premium brands.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "3+", label: "Years crafting" },
  { value: "2+", label: "Projects shipped" },
  
  { value: "93%", label: "Client retention" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
          <div className="animate-rise">
            <p className="eyebrow">Designer · Developer · Craftsman</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.03] sm:text-7xl">
              Quiet luxury,
              <br />
              <span className="text-gold-gradient italic">engineered</span> for the web.
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              I build considered, elegant interfaces for brands that value restraint,
              detail and permanence — from first sketch to production code.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-3 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                View work
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border border-border px-7 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div className="relative animate-rise" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-3 border border-[var(--gold-line)]" />
            <img
              src={portrait}
              alt="Portrait of the portfolio owner"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full object-cover shadow-[var(--shadow-luxe)]"
            />
          </div>
        </div>
      </section>

      <div className="border-y border-border/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-gold-gradient">{s.value}</p>
              <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              t: "Brand-led design",
              d: "Typography, spacing and motion tuned until the product feels inevitable.",
            },
            {
              t: "Engineered in React",
              d: "Accessible, fast, maintainable front-ends with a Node js backend .",
            },
            {
              t: "End-to-end care",
              d: "Discovery, build, launch and refinement — one accountable partner.",
            },
          ].map((c, i) => (
            <article key={c.t} className="luxe-card p-8">
              <p className="font-display text-3xl text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-2xl">{c.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="hairline mx-auto mb-12 w-56" />
        <h2 className="font-display text-4xl sm:text-5xl">
          Have something worth building?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
          I take on a small number of collaborations each quarter.
        </p>
        <Link
          to="/contact"
          className="mt-9 inline-block bg-primary px-9 py-3.5 text-xs tracking-[0.25em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </Section>
    </>
  );
}
