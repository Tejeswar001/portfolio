import Link from "next/link";
import { ThresholdPlot } from "@/components/threshold-plot";

const selected = [
  {
    title: "Credit Card Fraud Detection",
    summary:
      "Trained XGBoost and Random Forest classifiers on 100K+ transactions, rebalanced with SMOTE and reduced with PCA.",
    metric: "96.78%",
    metricLabel: "accuracy, XGBoost",
    href: "/projects/credit-card-fraud-detection",
  },
  {
    title: "UrbanFlow",
    summary:
      "YOLOv11 vehicle detection deployed on AWS Lambda, S3 and DynamoDB to drive traffic signals from live road use.",
    metric: "94.6%",
    metricLabel: "mAP@50",
    href: "/projects/urbanflow-traffic-management",
  },
  {
    title: "Role Radar",
    summary:
      "Flask app that finds professionals with 10+ years in a domain, ranked by a custom NLP confidence score over GitHub, Serper and Gemini data.",
    metric: "< 20 s",
    metricLabel: "per search",
    href: "/projects/role-radar",
  },
];

export default function Home() {
  return (
    <>
      <section className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 pt-12 sm:pt-20 pb-20 items-center">
        <div>
          <h1 className="text-[2.75rem] leading-[1.02] sm:text-7xl font-bold tracking-[-0.015em]">
            I build machine-learning models and the apps that put them to use.
          </h1>
          <p className="mt-7 max-w-[34rem] font-serif text-xl leading-[1.6] text-muted-foreground">
            I'm Tejeswar Naidu S, a B.Tech student in computer science at
            Lovely Professional University, specialising in AI and data
            engineering. My projects cover fraud detection, traffic vision,
            NLP search and full-stack web apps.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/projects"
              className="bg-primary text-primary-foreground px-5 py-3 font-medium rounded-sm hover:opacity-90"
            >
              See projects
            </Link>
            <a
              href="/tej-resume.pdf"
              download="TejeswarNaiduResume.pdf"
              className="underline underline-offset-4 decoration-2 decoration-border hover:decoration-primary"
            >
              Download resume
            </a>
            <Link
              href="/contact"
              className="underline underline-offset-4 decoration-2 decoration-border hover:decoration-primary"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div>
          <ThresholdPlot />
          <p className="mt-6 font-serif text-[17px] leading-[1.6] text-muted-foreground max-w-[34rem]">
            Move the threshold to see the trade-off at the center of my fraud
            detection project: catch more fraud and you flag more honest
            customers too. This plot uses made-up data.
          </p>
        </div>
      </section>

      <section aria-labelledby="selected" className="pt-6">
        <div className="flex items-baseline justify-between border-b border-foreground pb-3">
          <h2 id="selected" className="text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-sm underline underline-offset-4 hover:text-primary"
          >
            All projects
          </Link>
        </div>
        <ul>
          {selected.map((p) => (
            <li key={p.title} className="border-b border-border">
              <Link
                href={p.href}
                className="group grid sm:grid-cols-[1fr_auto] gap-x-10 gap-y-3 py-8 hover:bg-secondary/60 -mx-3 px-3"
              >
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-serif text-lg leading-[1.6] text-muted-foreground max-w-[40rem]">
                    {p.summary}
                  </p>
                </div>
                <div className="sm:text-right sm:self-center">
                  <div className="text-3xl font-semibold tabular-nums">
                    {p.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {p.metricLabel}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-24 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Open to opportunities
        </h2>
        <p className="font-serif text-xl leading-[1.6] max-w-[36rem]">
          I'm looking for data science and machine learning work where models
          ship into real products. Email me at{" "}
          <a
            href="mailto:tejeswarnaidu9@gmail.com"
            className="underline underline-offset-4 decoration-2 decoration-primary"
          >
            tejeswarnaidu9@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
