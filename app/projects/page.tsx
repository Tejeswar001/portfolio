"use client";
import { useState } from "react";
import Link from "next/link";
import { projects as detailed } from "@/app/data/projectdetails";

const detailSlugs = new Set(detailed.map((p) => p.slug));
const imageSrc = (src: string) =>
  "/" + src.replace(/^\//, "").replace(/\?.*$/, "");

const projects = [
  {
    id: 20,
    title: "Uptime Monitor",
    description:
      "A self-hosted API uptime monitor with a REST API. Flask and APScheduler ping registered endpoints every 30 seconds, and SQLAlchemy stores status codes and latency so you can query uptime percentage and average response time per endpoint.",
    image: "",
    tech: ["Python", "Flask", "SQLAlchemy", "APScheduler", "SQLite"],
    category: "Backend",
    date: "2026-07",
    github: "https://github.com/Tejeswar001/uptime_monitor",
    demo: "",
    slug: "uptime-monitor",
  },
  {
    id: 19,
    title: "LPU Resume Builder",
    description:
      "A web app that builds resumes from manual input or imported text and JSON, shows a live A4 preview, and exports to PDF and Word. Made for LPU students.",
    image: "/lpu_resume.png",
    tech: ["React", "JavaScript", "Vite", "PDF export", "Word export"],
    category: "Web Development",
    date: "2026-03",
    github: "https://github.com/Tejeswar001/Lpu-Resume-Generator",
    demo: "https://lpu-resume-generator.vercel.app",
    slug: "lpu-resume-builder",
  },
  {
    id: 18,
    title: "Heart-ML: Cardiovascular Risk Prediction",
    description:
      "A risk prediction platform with a Next.js front end and a Flask API serving a logistic regression model. Individuals get an instant Low, Medium or High risk result. Hospitals upload patient CSVs and filter by risk level.",
    image: "/heart_ml.png",
    tech: ["Python", "scikit-learn", "Flask", "Next.js", "TypeScript", "Pandas"],
    category: "Machine Learning",
    date: "2025-12",
    github: "https://github.com/Tejeswar001/Heart-ML",
    demo: "https://heart-ml-seven.vercel.app/",
    slug: "heart-ml",
  },
  {
    id: 8,
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning project to detect fraudulent credit card transactions using real-world data. Preprocessed 100K+ records, addressed class imbalance with SMOTE, reduced dimensions using PCA, and trained XGBoost and Random Forest models for high precision and recall.",
    image: "credit_card.jpg?height=200&width=300", // make sure this image exists in your assets
    tech: [
      "Python",
      "XGBoost",
      "Random Forest",
      "SMOTE",
      "PCA",
      "scikit-learn",
      "Pandas",
    ],
    category: "Machine Learning",
    date: "2025-05",
    github: "https://github.com/Tejeswar001/credit-card-fraud-detection",
    demo: "https://github.com/Tejeswar001/credit-card-fraud-detection/tree/main/models",
    slug: "credit-card-fraud-detection",
  },
  {
    id: 7,
    title: "Role Radar: Find Domain Experts",
    description:
      "A Flask-based web tool that identifies professionals with 10+ years of experience in a specific domain using GitHub and web search data. Combines Serper API, GitHub API, and Gemini API to extract, analyze, and rank profiles using a custom NLP-based confidence scoring algorithm. Delivers accurate results in under 20 seconds — no dummy profiles, only real experts.",
    image: "roleradar.png?height=200&width=300",
    tech: ["Flask", "GitHub API", "Serper API", "Gemini API", "Python", "NLP"],
    category: "AI/NLP",
    date: "2025-05",
    github: "https://github.com/Tejeswar001/RoleRadar", // update if needed
    demo: "https://roleradar-01.onrender.com/", // Add if hosted (e.g., Render, Vercel, etc.)
    slug: "role-radar",
  },

  {
    id: 1,
    title: "UrbanFlow: AI Traffic Management",
    description:
      "A real-time intelligent traffic control system using YOLOv11 for multi-class vehicle detection and AWS for scalable deployment. Trained with a Kaggle dataset (mAP@50 = 94.6%) to detect vehicles and pedestrians under varying conditions. The system uses AWS Lambda, DynamoDB, and S3 to dynamically manage signal control based on live road usage.",
    image: "/traffic.png?height=200&width=300",
    tech: ["YOLOv11", "AWS Lambda", "DynamoDB", "OpenCV"],
    category: "Machine Learning",
    date: "2025-03",
    github:
      "https://github.com/Tejeswar001/UrbanFlow-AI-Based-Traffic-Management",
    demo: "",
    slug: "urbanflow-traffic-management",
  },
  {
    id: 2,
    title: "Smart Todo Application",
    description:
      "A secure and efficient todo application built with Next.js, MongoDB, and JWT. Supports task creation, updating, deletion, and completion toggling, with real-time UI updates and user-specific data handling.",
    image: "/todo.png?height=200&width=300",
    tech: ["Next.js", "MongoDB", "JWT", "React", "Fetch API"],
    category: "Web Development",
    date: "2025-04",
    github: "https://github.com/Tejeswar001/Task-Manager",
    demo: "https://task-manager-open.vercel.app/",
    slug: "smart-todo",
  },
  {
    id: 3,
    title: "GenAI Learning Hub",
    description:
      "An AI-powered, inclusive, and immersive educational platform aligned with UN SDG 4. Features AI-generated video lessons, Gemini-powered chatbot support, secure Firebase authentication, and a responsive, intuitive UI for underserved learners.",
    image: "/geniailh.png?height=200&width=300",
    tech: ["Next.js", "Firebase Auth", "TailwindCSS", "Gemini API"],
    category: "Web Development",
    date: "2025-05",
    github: "https://github.com/Tejeswar001/GenAI-Learning-Hub",
    demo: "https://gen-ai-learning-hub.vercel.app/",
    slug: "genai-learning-hub",
  },

  {
    id: 4,
    title: "Online Cab Reservation System - Star Schema",
    description:
      "A dimensional modeling project for an Online Cab Reservation System using MySQL and a Star Schema. Includes fact and dimension tables for analyzing reservations, revenue, driver performance, and customer behavior.",
    image:
      "https://github.com/Tejeswar001/Cab-booking-system-Star-Schema/blob/main/ER-diagram/Screenshot%20from%202024-09-21%2012-14-42.png?raw=true",
    tech: ["MySQL", "Dimensional Modeling", "Star Schema", "SQL"],
    category: "Data Warehousing",
    date: "2024-09",
    github: "https://github.com/Tejeswar001/Cab-booking-system-Star-Schema",
    demo: "", // Optional
    slug: "online-cab-reservation-star-schema",
  },
  {
    id: 15,
    title: "Inventory Monitor",
    description:
      "A streamlined web application for inventory management, built with Next.js and hosted on Vercel. It offers a clean interface to track stock levels, manage product details, and monitor inventory changes efficiently. Designed for simplicity and usability, making it ideal for small businesses or personal use.",
    image: "Inventory_web.png?raw=true",
    tech: ["Next.js", "React", "Firebase Auth", "Vercel"],
    category: "Web Development",
    date: "2024-01",
    github: "https://github.com/Tejeswar001/InventoryMonitor",
    demo: "https://inventory-monitor.vercel.app/",
    slug: "inventory-monitor",
  },
  {
    id: 6,
    title: "Zomato Clone with Python Tkinter and MySQL",
    description:
      "A desktop-based Zomato clone built using Python Tkinter and MySQL, supporting user authentication, restaurant browsing, menu viewing, order placement, and order history.",
    image: "/zomato.png?raw=true",
    tech: ["Python", "Tkinter", "MySQL", "Pillow"],
    category: "App Development",
    date: "2024-08",
    github:
      "https://github.com/Tejeswar001/Zomato-Clone-with-Python-Tkinter-and-MySQL",
    demo: "", // Optional – add a video link or screen recording if available
    slug: "zomato-clone-tkinter",
  },
  {
    id: 17,
    title: "Customer Churn Analysis",
    description:
      "Exploratory data analysis of telecom customer churn to uncover key factors influencing churn, with violin plots comparing payment methods, contract types, and tenure.",
    image: "/vilionplot.png?height=200&width=300",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    category: "Data Analysis",
    date: "2024-07",
    github:
      "https://github.com/Tejeswar001/BootCamp-Jun-2024/blob/BootCampProgress/Analysis/Readme.md",
    demo: "", // Optional: can be left empty or replaced with a Colab/Jupyter link if available
    slug: "customer-churn-analysis",
  },
];

const categories = [
  "All",
  "Machine Learning",
  "AI/NLP",
  "Data Analysis",
  "Web Development",
  "Backend",
];

const formatDate = (d: string) =>
  new Date(d + "-01").toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const q = searchTerm.toLowerCase();

  const filtered = projects
    .filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="pt-14">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.015em]">
        Projects
      </h1>
      <p className="mt-4 font-serif text-xl text-muted-foreground max-w-[36rem] leading-[1.6]">
        {projects.length} projects, newest first.
      </p>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-5 border-b border-foreground pb-3">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-x-6 gap-y-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              aria-pressed={selectedCategory === c}
              className={`underline-offset-[10px] decoration-2 decoration-primary ${
                selectedCategory === c
                  ? "underline text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="search" className="sr-only">
            Search projects
          </label>
          <input
            id="search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or tool"
            className="bg-transparent border-b border-border focus:border-primary outline-none py-1 w-56 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 font-serif text-xl text-muted-foreground">
          Nothing matches "{searchTerm}" in {selectedCategory}. Clear the search
          or choose All.
        </p>
      ) : (
        <ul>
          {filtered.map((p) => {
            const hasDetail = detailSlugs.has(p.slug);
            return (
              <li
                key={p.id}
                className="grid sm:grid-cols-[11rem_1fr] md:grid-cols-[13rem_1fr_auto] gap-x-8 gap-y-4 py-8 border-b border-border"
              >
                <div className="border border-border bg-card aspect-[4/3] overflow-hidden">
                  {p.image ? (
                    <img
                      src={imageSrc(p.image)}
                      alt={`Screenshot of ${p.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-end p-3 text-sm text-muted-foreground">
                      No screenshot. API only.
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {hasDetail ? (
                      <Link
                        href={`/projects/${p.slug}`}
                        className="hover:text-primary underline-offset-4 hover:underline"
                      >
                        {p.title}
                      </Link>
                    ) : (
                      p.title
                    )}
                  </h2>
                  <p className="mt-2 font-serif text-[17px] leading-[1.6] text-muted-foreground max-w-[40rem] line-clamp-3">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm">{p.tech.join(", ")}</p>
                </div>
                <div className="text-sm md:text-right md:min-w-32 flex md:block flex-wrap gap-x-5 gap-y-1">
                  <div className="text-muted-foreground tabular-nums">
                    {formatDate(p.date)}
                  </div>
                  <div className="text-muted-foreground">{p.category}</div>
                  <div className="md:mt-3 flex md:flex-col gap-x-5 gap-y-1">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
