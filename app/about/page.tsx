"use client";

const skills = [
  { group: "Languages", items: "Python, SQL, Java" },
  {
    group: "Machine learning",
    items: "scikit-learn, XGBoost, TensorFlow, PyTorch, YOLO",
  },
  {
    group: "Data analysis",
    items: "Pandas, NumPy, Matplotlib, Seaborn, Plotly, Tableau, Power BI",
  },
  { group: "Web", items: "Flask, Next.js, React" },
  { group: "Platform and tooling", items: "AWS, Docker, Git, Jupyter" },
];

const certifications = [
  "DP-900: Microsoft Azure Data Fundamentals",
  "SQL Advanced, HackerRank",
  "Problem Solving (Intermediate), HackerRank",
  "Java, iamneo",
];

export default function About() {
  return (
    <div className="pt-14">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.015em]">
        About
      </h1>

      <section className="mt-12 grid md:grid-cols-[1fr_2fr] gap-6">
        <div>
          <img
            src="/profile.jpg"
            alt="Portrait of Tejeswar Naidu S"
            className="w-full max-w-[16rem] aspect-[4/5] object-cover object-top border border-border"
          />
        </div>
        <div className="space-y-5 font-serif text-xl leading-[1.65] max-w-[38rem]">
          <p>
            I'm a computer science student focused on AI and data engineering.
            I like finding the pattern in a messy dataset, then turning the
            model into something people can use.
          </p>
          <p>
            My work spans machine learning, statistical analysis and data
            visualization. I build predictive models and the interfaces around
            them, so the results reach people who don't read notebooks.
          </p>
          <p>
            Outside coursework I contribute to open-source projects, enter
            Kaggle competitions and follow new machine-learning research.
          </p>
          <p>
            <a
              href="/tej-resume.pdf"
              download="TejeswarNaiduResume.pdf"
              className="font-sans text-base underline underline-offset-4 decoration-2 decoration-primary"
            >
              Download resume (PDF)
            </a>
          </p>
        </div>
      </section>

      <section className="mt-20 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        <div className="max-w-[38rem]">
          <p className="text-lg font-semibold">
            B.Tech in Computer Science, 2023 to 2027
          </p>
          <p className="font-serif text-lg text-muted-foreground">
            Lovely Professional University. Specialisation in Artificial
            Intelligence and Data Engineering.
          </p>
        </div>
      </section>

      <section className="mt-20 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Tools</h2>
        <dl className="max-w-[38rem] divide-y divide-border border-y border-border">
          {skills.map((s) => (
            <div key={s.group} className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6 py-3">
              <dt className="font-medium">{s.group}</dt>
              <dd className="text-muted-foreground">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20 grid md:grid-cols-[1fr_2fr] gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Certifications
        </h2>
        <ul className="max-w-[38rem] divide-y divide-border border-y border-border">
          {certifications.map((c) => (
            <li key={c} className="py-3">
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
