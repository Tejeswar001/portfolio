"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projectdetails";

const imageSrc = (src: string) =>
  "/" + src.replace(/^\//, "").replace(/\?.*$/, "");

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const facts = [
    { label: "Date", value: new Date(project.date + "-01").toLocaleDateString("en-US", { month: "long", year: "numeric" }) },
    { label: "Duration", value: project.duration },
    { label: "Team", value: project.team },
    { label: "Accuracy", value: project.accuracy },
  ].filter((f) => f.value);

  const columns = [
    { title: "Problem", items: project.challenges },
    { title: "Approach", items: project.solutions },
    { title: "Outcome", items: project.results },
  ];

  return (
    <article className="pt-10">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        All projects
      </Link>

      <h1 className="mt-8 text-5xl sm:text-7xl font-bold tracking-[-0.015em] leading-[1.02] max-w-4xl">
        {project.title}
      </h1>
      <p className="mt-6 font-serif text-xl sm:text-2xl leading-[1.55] text-muted-foreground max-w-[40rem]">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-primary-foreground px-5 py-3 font-medium rounded-sm hover:opacity-90"
          >
            View code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 font-medium rounded-sm border border-foreground hover:bg-secondary"
          >
            Open live demo
          </a>
        )}
      </div>

      <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-border py-5">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-sm text-muted-foreground">{f.label}</dt>
            <dd className="text-lg font-semibold tabular-nums">{f.value}</dd>
          </div>
        ))}
      </dl>

      {project.image && (
        <div className="mt-12 border border-border bg-card">
          <img
            src={imageSrc(project.image)}
            alt={`Screenshot of ${project.title}`}
            className="w-full max-h-[34rem] object-contain"
          />
        </div>
      )}

      <section className="mt-20 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="font-serif text-xl leading-[1.65] max-w-[38rem]">
          {project.overview}
        </p>
      </section>

      <section className="mt-20 grid md:grid-cols-3 gap-x-10 gap-y-12">
        {columns.map((c) => (
          <div key={c.title}>
            <h2 className="text-2xl font-semibold tracking-tight border-b border-foreground pb-3">
              {c.title}
            </h2>
            <ul className="mt-4 space-y-4 font-serif text-lg leading-[1.55]">
              {c.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-20 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Method</h2>
        <ol className="max-w-[38rem] divide-y divide-border border-y border-border">
          {project.methodology.map((step, i) => (
            <li key={step} className="flex gap-5 py-3">
              <span className="w-6 text-muted-foreground tabular-nums">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Built with</h2>
        <p className="text-lg max-w-[38rem]">{project.tech.join(", ")}</p>
      </section>
    </article>
  );
}
