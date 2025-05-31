"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Github, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const projects = [
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
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of data science projects showcasing machine learning,
              analytics, and visualization skills
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full rounded-full border-2 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 shadow-md"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:glow-effect overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(project.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={`/projects/${project.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300"
                        >
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
