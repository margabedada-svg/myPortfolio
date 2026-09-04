import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "My Skills " },
      {
        name: "description",
        content:
          "Design, front-end and back-end capabilities: React, TypeScript, Node, design systems, motion and performance.",
      },
      { property: "og:title", content: "My Skills — Aurelia Studio" },
      {
        property: "og:description",
        content: "Design systems, React, Node and performance craft.",
      },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Design",
    items: [
      { name: "Design systems", level: 95 },
      { name: "Typography & layout", level: 92 },
      { name: "Motion & interaction", level: 84 },
    ],
  },
  {
    title: "Front-end",
    items: [
      { name: "HTML, CSS & JS", level: 97 },
      { name: "React & TypeScript", level: 96 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Accessibility & performance", level: 88 },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js & APIs", level: 87 },
      { name: "NestJS, Express.js", level: 85 },
      { name: "Databases & auth", level: 82 },
      { name: "Deployment & CI", level: 80 },
    ],
  },
];

const tools = [
  "Figma",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Tailwind",
  "Framer Motion",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Vite",
  "Git",
  "Playwright",
  "VS Code",
  "AI"
  

];

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="A refined toolkit"
        intro="Enough range to own a project end to end, enough depth to make each layer feel effortless."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {groups.map((g) => (
            <article key={g.title} className="luxe-card p-8">
              <h2 className="font-display text-2xl">{g.title}</h2>
              <div className="hairline my-6" />
              <ul className="space-y-6">
                {g.items.map((it) => (
                  <li key={it.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-foreground/90">{it.name}</span>
                      <span className="text-[11px] tracking-widest text-primary">
                        {it.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-px w-full bg-border">
                      <div
                        className="h-px bg-primary"
                        style={{ width: `${it.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="hairline mb-12" />
        <h2 className="font-display text-3xl">Tools of the trade</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {tools.map((t) => (
            <li
              key={t}
              className="border border-[var(--gold-line)] px-5 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {t}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
