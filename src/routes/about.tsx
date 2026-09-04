import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";
import portrait from "@/assets/profile.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "AboutMe" },
      {
        name: "description",
        content:
          "The story, philosophy and process behind a designer-developer building refined digital products.",
      },
      { property: "og:title", content: "About — Aurelia Studio" },
      {
        property: "og:description",
        content: "Story, philosophy and process behind the studio.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2024", title: "First Learning Full-stack Development", desc: "Began designing for my own projects." },
  { year: "2025", title: "Full-stack craft", desc: "Added another language and framework services, proffessional APIs designed and infrastructure to the toolkit." },
  { year: "2026", title: "Independent practice", desc: "Now partnering directly with founders and creative directors." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Detail is the difference"
        intro="I'm a designer and developer who believes restraint is a feature. Every margin, easing curve and line of code is a decision worth making twice."
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div className="relative">
            <div className="absolute -inset-3 border border-[var(--gold-line)]" />
            <img
              src={portrait}
              alt="Studio portrait"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl">A short story</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              I started out obsessing over typefaces and ended up writing the code
               that renders them. That double life design and engineering means 
               nothing gets lost in translation between the mockup, the frontend, 
               the backend, and the final product.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Today I work with a handful of clients a year: luxury retail, 
              Highschool ERP, private funds and founders who want their product 
              to feel as considered as their brand. Small teams, 
              long conversations, high standards.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { k: "Based in", v: "Ethiopia · Remote" },
                { k: "Focus", v: "Web · Product · Brand" },
                { k: "Stack", v: "React · Node · TypeScript" },
                { k: "Availability", v: "Open to select projects" },
              ].map((i) => (
                <div key={i.k} className="border-l border-[var(--gold-line)] pl-4">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-primary">
                    {i.k}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{i.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="hairline mb-14" />
        <h2 className="font-display text-3xl">The path so far</h2>
        <ol className="mt-10 space-y-0">
          {timeline.map((t) => (
            <li
              key={t.year}
              className="grid gap-2 border-t border-border/60 py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <span className="font-display text-2xl text-primary/80">{t.year}</span>
              <div>
                <h3 className="text-base tracking-wide">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
