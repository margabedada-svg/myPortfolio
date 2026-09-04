import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";
import texture from "@/assets/texture.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects" },
      {
        name: "description",
        content:
          "Selected work: luxury commerce, hospitality platforms, private banking dashboards and brand systems.",
      },
      { property: "og:title", content: "Projects — Aurelia Studio" },
      {
        property: "og:description",
        content: "Selected work across luxury commerce, hospitality and finance.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
    {
    name: "University ERP",
    year: "2026",
    type: "University Management System",
    desc: "A scalable ERP backend for university operations — role-based access, authentication, academic workflows, and secure REST APIs.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
    {
    name: "Alumni Network",
    year: "2026",
    type: "Alumni platform",
    desc: "A full-stack alumni platform designed and built from the ground up — connecting graduates, managing profiles and enabling secure communication through a scalable backend.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
  },
    {
    name: "Brand Boutique",
    year: "2026",
    type: "Fashion commerce",
    desc: "A modern e-commerce experience for a fashion boutique — curated product collections, intuitive shopping flows and a refined responsive interface.",
    tags: ["React", "E-commerce", "Design system"],
  },
  {
  name: "High School Management System",
  year: "2025",
  type: "School management system",
  desc: "A complete school management system designed and built from the ground up — streamlining student records, academic management, staff workflows and administrative operations.",
  tags: ["React", "Node.js", "MongoDB", "REST API"],
},
];

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        intro="A small, deliberate portfolio. Each engagement is designed, built and refined in-house."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden luxe-card p-9 transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={texture}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={1600}
                height={900}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-20"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{p.type}</p>
                    <h2 className="mt-3 font-display text-3xl">{p.name}</h2>
                  </div>
                  <span className="font-display text-lg text-muted-foreground">
                    {p.year}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary">
                  Case study
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
